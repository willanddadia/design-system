# Contributing to @wild/design-system

Thank you for your interest in contributing! This document outlines the project structure and development workflow.

## Project Structure

- **`src/lib`**: The core library. Only code here is published to npm.
  - `components/ui`: Atomic components based on Radix UI.
  - `components/layout`: Structural components (Flex, Grid, etc.).
  - `utils`: Shared logic (`cn` helper, etc.).
- **`src/site`**: The documentation and demo application.
- **`dist`**: Compiled library output.
- **`dist-docs`**: Compiled documentation site output.

## Development Workflow

1. **Local Setup**:
   ```bash
   npm install
   ```

2. **Developing Components**:
   We use **Ladle** for isolated component development.
   ```bash
   npm run ladle
   ```
   Add a `.stories.tsx` file alongside your component to see it in Ladle.

3. **Running the Documentation Site**:
   To see how components look in the context of the full site:
   ```bash
   npm run dev
   ```

4. **Code Quality**:
   Ensure your code follows our linting and formatting rules:
   ```bash
   npm run lint
   # coming soon: npm run format
   ```

5. **Adding a New Component**:
   - Create the component in the appropriate subdirectory of `src/lib/components`.
   - Export it from `src/index.ts`.
   - Add a documentation page in `src/site/docs`.
   - Register the page in `src/site/App.tsx`.

## Pull Request Guidelines

- Ensure your changes don't break the build: `npm run build`.
- Update the documentation if you've added or modified a component's API.
- Keep components focused and use Radix UI primitives for complex interactions.
