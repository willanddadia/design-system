import { Section, PageHero } from './DocLayout';

const colorGroups = [
  {
    title: 'Brand Colors',
    colors: [
      {
        name: 'Primary',
        variable: 'primary',
        hex: '#3b82f6',
        description: 'Used for main actions and branding.',
      },
      {
        name: 'Secondary',
        variable: 'secondary',
        hex: '#f3f4f6',
        description: 'Used for subtle backgrounds and secondary actions.',
      },
      {
        name: 'Accent',
        variable: 'accent',
        hex: '#8b5cf6',
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

export function ColorsPage() {
  return (
    <div>
      <PageHero
        badge="Foundation"
        title="Colors"
        description="Our color palette is designed to be functional and consistent. We use CSS variables for easy theming and maintainability."
      />

      {colorGroups.map((group) => (
        <Section key={group.title} title={group.title}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {group.colors.map((color) => (
              <div
                key={color.variable}
                className="border-2 border-border rounded-xl overflow-hidden group"
              >
                <div
                  className={`h-24 bg-${color.variable} border-b-2 border-border transition-transform group-hover:scale-105 duration-200`}
                />
                <div className="p-4 bg-background">
                  <h4 className="flex items-center justify-between">
                    {color.name}
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">
                      {color.hex}
                    </span>
                  </h4>
                  <p className="text-xs font-mono text-primary mt-1 mb-2">
                    var(--{color.variable})
                  </p>
                  <p className="text-sm text-muted-foreground leading-snug">{color.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      ))}
    </div>
  );
}
