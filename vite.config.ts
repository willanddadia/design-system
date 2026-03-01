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
        },
      },
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
