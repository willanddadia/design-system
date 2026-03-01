import { useState, useEffect } from 'react';
import { Section, PageHero } from './DocLayout';
import { Button } from '@lib/components/ui/button';
import { RefreshCcw, Pipette } from 'lucide-react';

const DEFAULTS = {
  primary: '#3b82f6',
  secondary: '#f3f4f6',
  accent: '#34d399',
};

export function ColorsPage() {
  const [colors, setColors] = useState(DEFAULTS);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', colors.primary);
    root.style.setProperty('--secondary', colors.secondary);
    root.style.setProperty('--accent', colors.accent);

    // Optional: Auto-calculate foregrounds if needed, for now just brand
  }, [colors]);

  const updateColor = (key: keyof typeof DEFAULTS, value: string) => {
    setColors((prev) => ({ ...prev, [key]: value }));
  };

  const resetColors = () => {
    setColors(DEFAULTS);
  };

  const colorGroups = [
    {
      title: 'Brand Colors',
      colors: [
        {
          name: 'Primary',
          variable: 'primary',
          hex: colors.primary,
          description: 'Used for main actions and branding.',
        },
        {
          name: 'Secondary',
          variable: 'secondary',
          hex: colors.secondary,
          description: 'Used for subtle backgrounds and secondary actions.',
        },
        {
          name: 'Accent',
          variable: 'accent',
          hex: colors.accent,
          description: 'Used for highlights and decorative elements.',
        },
      ],
    },
    {
      title: 'Utility Colors',
      colors: [
        {
          name: 'Destructive',
          variable: 'destructive',
          hex: '#ef4444',
          description: 'Used for error states and dangerous actions.',
        },
        {
          name: 'Success',
          variable: 'success',
          hex: '#059669',
          description: 'Used for positive states and confirmations.',
        },
        {
          name: 'Warning',
          variable: 'warning',
          hex: '#d97706',
          description: 'Used for cautious alerts.',
        },
        {
          name: 'Muted',
          variable: 'muted',
          hex: '#9ca3af',
          description: 'Used for deactivated states and supporting text.',
        },
      ],
    },
    {
      title: 'Neutral Colors',
      colors: [
        {
          name: 'Background',
          variable: 'background',
          hex: '#ffffff',
          description: 'The main canvas color.',
        },
        {
          name: 'Card',
          variable: 'card',
          hex: '#ffffff',
          description: 'Used for cards and grouped containers.',
        },
        {
          name: 'Input',
          variable: 'input-background',
          hex: '#f9fafb',
          description: 'Background for form elements.',
        },
        {
          name: 'Border',
          variable: 'border',
          hex: '#e5e7eb',
          description: 'Used for borders and dividers.',
        },
      ],
    },
  ];

  return (
    <div className="space-y-12">
      <PageHero
        badge="Foundation"
        title="Colors"
        description="Our color palette is designed to be functional and consistent. We use CSS variables for easy theming and maintainability."
      />

      <Section
        title="Interactive Theme Customizer"
        description="Modify the brand colors below to see them update live across the entire design system documentation."
      >
        <div className="bg-muted/10 border-2 border-border rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(Object.keys(DEFAULTS) as Array<keyof typeof DEFAULTS>).map((key) => (
              <div key={key} className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Pipette className="size-3.5" />
                  {key}
                </label>
                <div className="flex items-center gap-3">
                  <div className="relative group size-12 shrink-0">
                    <input
                      type="color"
                      value={colors[key]}
                      onChange={(e) => updateColor(key, e.target.value)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div
                      className="w-full h-full rounded-xl border-2 border-border shadow-sm group-hover:scale-105 transition-transform duration-200"
                      style={{ backgroundColor: colors[key] }}
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <input
                      type="text"
                      value={colors[key]}
                      onChange={(e) => updateColor(key, e.target.value)}
                      className="w-full bg-transparent text-lg font-mono font-bold uppercase outline-none focus:text-primary transition-colors"
                    />
                    <p className="text-[10px] text-muted-foreground font-medium">CSS: var(--{key})</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground italic">
              Changes are applied to the <code>:root</code> element via inline styles.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={resetColors}
              leftIcon={<RefreshCcw className="size-3.5" />}
            >
              Reset to Defaults
            </Button>
          </div>
        </div>
      </Section>

      {colorGroups.map((group) => (
        <Section key={group.title} title={group.title}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {group.colors.map((color) => (
              <div
                key={color.variable}
                className="border-2 border-border rounded-xl overflow-hidden group bg-card"
              >
                <div
                  className="h-24 border-b-2 border-border transition-transform group-hover:scale-110 duration-500 ease-out"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="p-4 relative">
                  <h4 className="flex items-center justify-between font-bold">
                    {color.name}
                    <span className="text-[10px] font-mono text-muted-foreground uppercase bg-muted px-1.5 py-0.5 rounded">
                      {color.hex}
                    </span>
                  </h4>
                  <p className="text-[11px] font-mono text-primary mt-1.5 mb-2 font-semibold">
                    var(--{color.variable})
                  </p>
                  <p className="text-xs text-muted-foreground leading-snug line-clamp-2">{color.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      ))}
    </div>
  );
}
