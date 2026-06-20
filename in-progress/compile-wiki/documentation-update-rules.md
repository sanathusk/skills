# Documentation Update Rules

As soon as any requirement, terminology, or technical detail is finalized or discovered, perform the following updates inline:

### A. Update the Glossary (`CONTEXT.md`):
- **Check against glossary:** If the user uses a term that conflicts with `CONTEXT.md` (at the project root), call it out immediately. Propose precise, canonical terms for fuzzy or overloaded language.
- **Update inline:** As terms are resolved, update `CONTEXT.md` (following [CONTEXT-FORMAT.md](./CONTEXT-FORMAT.md)) immediately. Keep `CONTEXT.md` purely as a glossary, devoid of implementation details.

### B. Update the Wiki (`wiki/`):
Create or update files under `wiki/` immediately as requirements and technical specifications are finalized. Organize files using the following structure:

- **`wiki/index.md`**: The main index page. Maintain a table of contents that groups features and maps them to their respective functional and technical documents.
- **`wiki/functional/`**: Contains files describing **what** the feature does from a product, business, and user perspective.
  - *Focus:* User goals, user stories, user workflows, calculation logic/rules, and UI states.
  - *Example:* `wiki/functional/stock-search.md` (e.g., "The user should be able to search for stocks in their portfolio using a search bar. The search should filter holdings by ticker or company name.")
  - *Cross-link:* Must start with a prominent link to its technical counterpart:
    ```
    > [!NOTE]
    > For technical implementation details, see [Technical Specifications](../technical/feature-name.md).
    ```
- **`wiki/technical/`**: Contains files describing **how** the system executes those functional requirements.
  - *Focus:* API endpoints, query parameters, payloads, database tables, schemas, RLS security policies, third-party integrations, and code entry points.
  - *Monorepo / Microservices Organization:* If the repository contains multiple microservices, sub-projects, or independent backend services, group technical files into subfolders corresponding to each service (e.g., `wiki/technical/api-gateway/`, `wiki/technical/auth-service/`).
  - *Shared / Common Requirements:* If a technical requirement, helper library, shared database schema, or infrastructure config is common across multiple aspects, place it in a `shared/` subfolder at the appropriate level (e.g., `wiki/technical/shared/`).
  - *Cross-link:* Must start with a prominent link to its functional counterpart:
    ```
    > [!NOTE]
    > For functional requirements and user flows, see [Functional Specifications](../../functional/feature-name.md).
    ```
    *(Note: Adjust the relative path prefix like `../` or `../../` depending on the directory depth).*

- **File Naming:** Ensure corresponding files in both folders share identical basenames (e.g., `wiki/functional/portfolio.md` matches `wiki/technical/portfolio.md`).
- **Clickable Links:** Ensure all references to database tables, API file paths, or configuration files are clickable markdown links.

### C. Create ADRs / Decision Records:
- **When to propose:**
  - Also propose creating a decision record if you see that a detailed discussion was done on a topic and the user decided to go with a specific option after the discussion.
- **What to document:** For decision records, document the reason for selecting the given option, the pros and cons of the current option, and the alternatives discussed.
- **Where to save:** Document ADRs under `wiki/adr/` (following [ADR-FORMAT.md](./ADR-FORMAT.md)) immediately when resolved.
