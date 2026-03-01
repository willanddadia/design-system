# @will-and/design-system

A reusable design system built with React and Tailwind CSS. The original Figma project is available at [Figma](https://www.figma.com/design/qrE7A2wiwBsegKoGj147N5/Design-system).

## Installation

```bash
npm install @will-and/design-system
```

## Usage

Import components and **also import the stylesheet** — the CSS is not injected automatically:

```tsx
// 1. Import styles (required — do this once in your app entry point)
import '@will-and/design-system/style.css';

// 2. Import components
import { Button, Input, Card } from '@will-and/design-system';

export default function App() {
  return <Button>Click me</Button>;
}
```

> **Note:** The stylesheet includes Tailwind CSS utility classes, theme tokens (CSS custom properties), and base typography styles. Make sure to import it before your own stylesheets so you can override as needed.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run component stories (Ladle)
npm run ladle

# Run visual snapshot tests (Playwright)
npm run test:snapshots

# Build the library
npm run build
```

## Publishing

The library is automatically built before publishing via the `prepublishOnly` script.

```bash
npm publish --access public
```

## License

MIT