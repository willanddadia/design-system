import { defineConfig } from 'vitest/config'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      include: ['src'],
      exclude: ['src/**/*.stories.tsx', 'src/**/*.test.{ts,tsx}', 'src/test/setup.ts'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@site': path.resolve(__dirname, './src/site'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    include: ['src/**/*.test.{ts,tsx}'],
  },
  build: process.env.BUILD_APP ? {
    outDir: 'dist-docs',
  } : {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'DesignSystem',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'lucide-react',
        'clsx',
        'tailwind-merge',
        'class-variance-authority',
        /^@radix-ui\/react-/,
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          'lucide-react': 'LucideReact',
          clsx: 'clsx',
          'tailwind-merge': 'tailwindMerge',
          'class-variance-authority': 'cva',
          '@radix-ui/react-slot': 'reactSlot',
          '@radix-ui/react-select': 'SelectPrimitive',
          '@radix-ui/react-switch': 'SwitchPrimitive',
          '@radix-ui/react-accordion': 'AccordionPrimitive',
          '@radix-ui/react-alert-dialog': 'AlertDialogPrimitive',
          '@radix-ui/react-aspect-ratio': 'AspectRatioPrimitive',
          '@radix-ui/react-avatar': 'AvatarPrimitive',
          '@radix-ui/react-checkbox': 'CheckboxPrimitive',
          '@radix-ui/react-collapsible': 'CollapsiblePrimitive',
          '@radix-ui/react-dialog': 'DialogPrimitive',
          '@radix-ui/react-context-menu': 'ContextMenuPrimitive',
          '@radix-ui/react-dropdown-menu': 'DropdownMenuPrimitive',
          '@radix-ui/react-label': 'LabelPrimitive',
          '@radix-ui/react-hover-card': 'HoverCardPrimitive',
          '@radix-ui/react-menubar': 'MenubarPrimitive',
          '@radix-ui/react-navigation-menu': 'NavigationMenuPrimitive',
          '@radix-ui/react-popover': 'PopoverPrimitive',
          '@radix-ui/react-progress': 'ProgressPrimitive',
          '@radix-ui/react-radio-group': 'RadioGroupPrimitive',
          '@radix-ui/react-scroll-area': 'ScrollAreaPrimitive',
          '@radix-ui/react-separator': 'SeparatorPrimitive',
          '@radix-ui/react-tooltip': 'TooltipPrimitive',
          '@radix-ui/react-slider': 'SliderPrimitive',
          '@radix-ui/react-tabs': 'TabsPrimitive',
          '@radix-ui/react-toggle-group': 'ToggleGroupPrimitive',
          '@radix-ui/react-toggle': 'TogglePrimitive',
          '@radix-ui/react-primitive': 'reactPrimitive',
          '@radix-ui/react-id': 'reactId',
          '@radix-ui/react-compose-refs': 'reactComposeRefs',
        },
      },
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
