import { PageHero, Section } from './DocLayout';
import { Flex, Grid, Padded } from '@lib/components/layout';
import { Paragraph, Text } from '@lib/components/ui/typography';
import { Button } from '@lib/components/ui/button';
import { Badge } from '@lib/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@lib/components/ui/tabs';
import {
  Terminal,
  Code2,
  Layers,
  Cpu,
  Zap,
  Github,
  Package,
  Palette,
  ShieldCheck,
  Binary,
  Box,
  Braces
} from 'lucide-react';

export function IntroductionPage({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <Flex direction="col" gap="xl" internalClassName="pb-20">
      <PageHero
        title="Design System"
        description="A high-performance, accessible, and developer-first UI library built for modern React applications."
      />

      <Flex direction="col" gap="lg">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" internalClassName="px-3 py-1 font-mono">React 18+</Badge>
          <Badge variant="secondary" internalClassName="px-3 py-1 font-mono">Tailwind CSS 4.0</Badge>
          <Badge variant="secondary" internalClassName="px-3 py-1 font-mono">TypeScript</Badge>
          <Badge variant="secondary" internalClassName="px-3 py-1 font-mono">Radix UI</Badge>
          <Badge variant="secondary" internalClassName="px-3 py-1 font-mono">Lucide Icons</Badge>
        </div>
      </Flex>

      <Section
        title="Installation"
        description="Get started by installing the core package via your preferred package manager."
      >
        <Tabs defaultValue="npm">
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          </TabsList>
          <div className="mt-4 group relative">
            <TabsContent value="npm">
              <div className="bg-[#0d0d0d] p-5 rounded-xl font-mono text-sm text-green-400 border border-border/40 shadow-2xl flex items-center justify-between">
                <span>npm install @will-and/design-system</span>
                <Terminal className="size-4 opacity-30" />
              </div>
            </TabsContent>
            <TabsContent value="yarn">
              <div className="bg-[#0d0d0d] p-5 rounded-xl font-mono text-sm text-green-400 border border-border/40 shadow-2xl flex items-center justify-between">
                <span>yarn add @will-and/design-system</span>
                <Terminal className="size-4 opacity-30" />
              </div>
            </TabsContent>
            <TabsContent value="pnpm">
              <div className="bg-[#0d0d0d] p-5 rounded-xl font-mono text-sm text-green-400 border border-border/40 shadow-2xl flex items-center justify-between">
                <span>pnpm add @will-and/design-system</span>
                <Terminal className="size-4 opacity-30" />
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </Section>

      <Section
        title="Quick Start"
        description="Import components and include the global styles to start building immediately."
      >
        <div className="bg-[#0d0d0d] p-0 rounded-xl overflow-hidden border border-border/40 shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/5">
            <Code2 className="size-3 text-white/40" />
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] font-mono">
              App.tsx
            </span>
          </div>
          <div className="p-6 overflow-x-auto">
            <pre className="text-[13px] leading-relaxed font-mono">
              <code className="text-blue-300">
                {`import { Button, Flex } from '@will-and/design-system';
import '@will-and/design-system/style.css';

export default function App() {
  return (
    <Flex gap="md" align="center">
      <Button variant="default">Primary</Button>
      <Button variant="outline">Secondary</Button>
    </Flex>
  );
}`}
              </code>
            </pre>
          </div>
        </div>
      </Section>

      <Section title="Key Architecture" description="Technical overview of our core implementation principles.">
        <Grid cols={1} mdCols={2} gap="xl">
          <Padded
            bordered
            padding="none"
            internalClassName="overflow-hidden bg-card/50 backdrop-blur-sm group hover:border-primary/50 transition-all duration-300"
          >
            <div
              className="px-6 py-8 relative"
              style={{
                backgroundImage: `radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0'
              }}
            >
              <Flex direction="col" gap="md">
                <Flex align="center" gap="md">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                    <Layers className="size-5" />
                  </div>
                  <div>
                    <Text weight="bold" size="lg" internalClassName="tracking-tight">Atomic Primitives</Text>
                    <Text size="2xs" variant="muted" uppercase weight="bold" internalClassName="tracking-widest opacity-60">Engineered with Radix UI</Text>
                  </div>
                </Flex>
                <Paragraph variant="muted" size="sm" internalClassName="leading-relaxed">
                  Low-level component primitives designed for maximum flexibility. Each component is a standalone module with baked-in accessibility features conforming to WAI-ARIA standards.
                </Paragraph>
              </Flex>
              <div className="absolute top-2 right-4 opacity-5">
                <Braces className="size-16" />
              </div>
            </div>
          </Padded>

          <Padded
            bordered
            padding="none"
            internalClassName="overflow-hidden bg-card/50 backdrop-blur-sm group hover:border-primary/50 transition-all duration-300"
          >
            <div
              className="px-6 py-8 relative"
              style={{
                backgroundImage: `radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0'
              }}
            >
              <Flex direction="col" gap="md">
                <Flex align="center" gap="md">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                    <Palette className="size-5" />
                  </div>
                  <div>
                    <Text weight="bold" size="lg" internalClassName="tracking-tight">Systematic Styling</Text>
                    <Text size="2xs" variant="muted" uppercase weight="bold" internalClassName="tracking-widest opacity-60">Tailwind CSS 4.0 Engine</Text>
                  </div>
                </Flex>
                <Paragraph variant="muted" size="sm" internalClassName="leading-relaxed">
                  Utilizes a unified design token system managed through modern CSS variables. Full support for dark mode, custom palettes, and dynamic theming via the integrated theme engine.
                </Paragraph>
              </Flex>
              <div className="absolute top-2 right-4 opacity-5">
                <Box className="size-16" />
              </div>
            </div>
          </Padded>

          <Padded
            bordered
            padding="none"
            internalClassName="overflow-hidden bg-card/50 backdrop-blur-sm group hover:border-primary/50 transition-all duration-300"
          >
            <div
              className="px-6 py-8 relative"
              style={{
                backgroundImage: `radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0'
              }}
            >
              <Flex direction="col" gap="md">
                <Flex align="center" gap="md">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div>
                    <Text weight="bold" size="lg" internalClassName="tracking-tight">Strictly Typed</Text>
                    <Text size="2xs" variant="muted" uppercase weight="bold" internalClassName="tracking-widest opacity-60">TypeScript First-Class</Text>
                  </div>
                </Flex>
                <Paragraph variant="muted" size="sm" internalClassName="leading-relaxed">
                  Exhaustive type definitions for every prop, variant, and event handler. Provides superior IDE intellisense, making the library self-documenting for high-velocity teams.
                </Paragraph>
              </Flex>
              <div className="absolute top-2 right-4 opacity-5">
                <Binary className="size-16" />
              </div>
            </div>
          </Padded>

          <Padded
            bordered
            padding="none"
            internalClassName="overflow-hidden bg-card/50 backdrop-blur-sm group hover:border-primary/50 transition-all duration-300"
          >
            <div
              className="px-6 py-8 relative"
              style={{
                backgroundImage: `radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0'
              }}
            >
              <Flex direction="col" gap="md">
                <Flex align="center" gap="md">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                    <Zap className="size-5" />
                  </div>
                  <div>
                    <Text weight="bold" size="lg" internalClassName="tracking-tight">Hyper Performance</Text>
                    <Text size="2xs" variant="muted" uppercase weight="bold" internalClassName="tracking-widest opacity-60">Tree-Shakeable ESM</Text>
                  </div>
                </Flex>
                <Paragraph variant="muted" size="sm" internalClassName="leading-relaxed">
                  Built for minimal bundle impact. Components are distributed as ES modules, ensuring that build tools like Vite and Webpack only bundle the code your application actually uses.
                </Paragraph>
              </Flex>
              <div className="absolute top-2 right-4 opacity-5">
                <Cpu className="size-16" />
              </div>
            </div>
          </Padded>
        </Grid>
      </Section>

      <Section title="Next Steps">
        <Flex direction="col" gap="xl">
          <Paragraph variant="muted">
            Ready to build? Dive into our component documentation to explore everything available.
          </Paragraph>
          <Grid cols={1} mdCols={3} gap="md">
            <Button size="lg" onClick={onGetStarted} internalClassName="w-full">
              Explore Components
            </Button>
            <Button asChild size="lg" variant="outline" internalClassName="w-full">
              <a
                href="https://github.com/willanddadia/design-system"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 size-4" />
                GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" internalClassName="w-full">
              <a
                href="https://www.npmjs.com/package/@will-and/design-system"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Package className="mr-2 size-4" />
                NPM Package
              </a>
            </Button>
          </Grid>
        </Flex>
      </Section>
    </Flex>
  );
}
