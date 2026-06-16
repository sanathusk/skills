#!/usr/bin/env node

/**
 * Validate Conventional Commits specification v1.0.0
 * Usage: node validate_commits.js [--commits <commit1,commit2>] [--file <path>]
 */

const fs = require('fs');

const TYPES = new Set([
  'feat', 'fix', 'docs', 'style', 'refactor', 'test',
  'perf', 'build', 'ci', 'chore', 'revert', 'config'
]);

function parseCommit(message) {
  const lines = message.trim().split(/\r?\n/);
  const firstLine = lines[0];
  const match = firstLine.match(/^(\w+)(?:\(([^)]+)\))?(!)?: (.+)$/);

  if (!match) {
    return {
      valid: false,
      errors: ['Commit must follow format: <type>(scope)!: <description>']
    };
  }

  const [, type, scope, breaking, description] = match;
  const errors = [];

  if (!TYPES.has(type)) {
    errors.push(`Unknown type '${type}'. Expected one of: ${Array.from(TYPES).join(', ')}`);
  }

  if (description.charAt(0) === description.charAt(0).toUpperCase()) {
    errors.push('Description must start with lowercase letter');
  }

  if (description.endsWith('.')) {
    errors.push('Description must not end with a period');
  }

  if (description.length > 50) {
    errors.push('Description should be 50 characters or less');
  }

  if (/^(add|added|fix|fixed|update|updated|change|changed|remove|removed|refactor|refactored|test|tested|docs|documented)\b/i.test(description)) {
    errors.push('Description should use imperative mood (e.g., "add feature" not "added feature")');
  }

  if (breaking && !lines.slice(1).some(line => line.includes('BREAKING CHANGE:'))) {
    errors.push('Breaking change marker (!) requires BREAKING CHANGE: footer');
  }

  if (!breaking && lines.slice(1).some(line => line.includes('BREAKING CHANGE:'))) {
    errors.push('BREAKING CHANGE: footer requires ! marker in header');
  }

  return {
    valid: errors.length === 0,
    errors,
    type,
    scope,
    breaking,
    description
  };
}

function validateCommits(commits) {
  const results = commits.map((commit, index) => ({
    index: index + 1,
    commit: commit.trim(),
    ...parseCommit(commit)
  }));

  const validCount = results.filter(r => r.valid).length;
  const invalidCount = results.length - validCount;

  return {
    total: results.length,
    valid: validCount,
    invalid: invalidCount,
    results
  };
}

function printReport(report) {
  console.log(`\nConventional Commits Validation Report`);
  console.log(`=====================================`);
  console.log(`Total commits: ${report.total}`);
  console.log(`Valid: ${report.valid}`);
  console.log(`Invalid: ${report.invalid}`);
  console.log('');

  report.results.forEach((result, index) => {
    console.log(`[${result.valid ? '✓' : '✗'}] Commit ${index + 1}: ${result.commit.split('\n')[0]}`);
    if (!result.valid) {
      result.errors.forEach(error => console.log(`    - ${error}`));
    }
  });

  console.log('');
}

function main() {
  const args = process.argv.slice(2);
  const commits = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--commits') {
      commits.push(...args[++i].split(',').map(c => c.trim()).filter(Boolean));
    } else if (args[i] === '--file') {
      const filePath = args[++i];
      const content = fs.readFileSync(filePath, 'utf8');
      commits.push(...content.split(/\n\s*\n/).map(c => c.trim()).filter(Boolean));
    } else if (args[i] === '--help' || args[i] === '-h') {
      console.log('Usage: node validate_commits.js [--commits <commit1,commit2>] [--file <path>]');
      console.log('');
      console.log('Examples:');
      console.log('  node validate_commits.js --commits "feat: add feature,fix: fix bug"');
      console.log('  node validate_commits.js --file commits.txt');
      return;
    }
  }

  if (commits.length === 0) {
    console.log('No commits provided. Use --commits or --file to provide commits.');
    process.exit(1);
  }

  const report = validateCommits(commits);
  printReport(report);

  if (report.invalid > 0) {
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { parseCommit, validateCommits };
