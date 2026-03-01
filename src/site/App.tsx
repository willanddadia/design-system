import { useState, useEffect } from 'react';
import {
  Package,
  Palette,
  Type,
  Layout,
  MousePointer2,
  Tag,
  CreditCard,
  AlertCircle,
  Table as TableIcon,
  CheckSquare,
  Layers,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';

// Import Pages
import { IntroductionPage } from './docs/IntroductionPage';
import { ColorsPage } from './docs/ColorsPage';
import { TypographyPage } from './docs/TypographyPage';
import { TokensPage } from './docs/TokensPage';
import { ButtonPage } from './docs/ButtonPage';
import { BadgePage } from './docs/BadgePage';
import { CardPage } from './docs/CardPage';
import { AlertPage } from './docs/AlertPage';
import { FormPage } from './docs/FormPage';
import { ModalPage } from './docs/ModalPage';
import { LayoutPage } from './docs/LayoutPage';
import { TablePage } from './docs/TablePage';
import { CalendarPage } from './docs/CalendarPage';
import { LoadingPage } from './docs/LoadingPage';

import { StickyHeader } from '@lib/components/layout/StickyHeader';
import { StickyFooter } from '@lib/components/layout/StickyFooter';
import { Button } from '@lib/components/ui/button';

type PageId =
  | 'intro'
  | 'tokens'
  | 'colors'
  | 'typography'
  | 'button'
  | 'badge'
  | 'card'
  | 'alert'
  | 'table'
  | 'calendar'
  | 'loading'
  | 'form'
  | 'modal'
  | 'layout';

interface NavItem {
  id: PageId;
  label: string;
  icon: any;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { id: 'intro', label: 'Introduction', icon: Package },
      { id: 'colors', label: 'Colors', icon: Palette },
      { id: 'typography', label: 'Typography', icon: Type },
    ],
  },
  {
    title: 'Components',
    items: [
      { id: 'button', label: 'Button', icon: MousePointer2 },
      { id: 'badge', label: 'Badge', icon: Tag },
      { id: 'card', label: 'Card', icon: CreditCard },
      { id: 'alert', label: 'Alert', icon: AlertCircle },
      { id: 'table', label: 'Table', icon: TableIcon },
      { id: 'calendar', label: 'Calendar', icon: CheckSquare },
      { id: 'loading', label: 'Loading', icon: Layers },
    ],
  },
  {
    title: 'Forms',
    items: [{ id: 'form', label: 'Form Elements', icon: CheckSquare }],
  },
  {
    title: 'Overlays',
    items: [{ id: 'modal', label: 'Modal', icon: Layers }],
  },
  {
    title: 'Layout',
    items: [{ id: 'layout', label: 'Layout Wrappers', icon: Layout }],
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('intro');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handle hash changes for routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (hash && navSections.some(s => s.items.some(i => i.id === hash))) {
        setCurrentPage(hash);
      }
    };

    // Initial load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when currentPage changes
  useEffect(() => {
    const currentHash = window.location.hash.replace('#', '');
    if (currentHash !== currentPage) {
      window.location.hash = currentPage;
    }
  }, [currentPage]);

  const handlePageChange = (page: PageId) => {
    setCurrentPage(page);
    setIsSidebarOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'intro':
        return <IntroductionPage onGetStarted={() => handlePageChange('button')} />;
      case 'colors':
        return <ColorsPage />;
      case 'tokens':
        return <TokensPage />;
      case 'typography':
        return <TypographyPage />;
      case 'button':
        return <ButtonPage />;
      case 'badge':
        return <BadgePage />;
      case 'card':
        return <CardPage />;
      case 'alert':
        return <AlertPage />;
      case 'table':
        return <TablePage />;
      case 'calendar':
        return <CalendarPage />;
      case 'loading':
        return <LoadingPage />;
      case 'form':
        return <FormPage />;
      case 'modal':
        return <ModalPage />;
      case 'layout':
        return <LayoutPage />;
      default:
        return <IntroductionPage onGetStarted={() => handlePageChange('button')} />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Mobile Header */}
      <StickyHeader className="md:hidden px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Package className="w-6 h-6 text-primary" />
          <span className="font-bold tracking-tight">Design System</span>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-accent rounded-lg transition-colors"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </StickyHeader>

      {/* Sidebar Sidebar */}
      <aside
        className={`
        fixed inset-0 z-30 md:relative md:z-0
        w-full md:w-72 border-r-2 border-border bg-card
        transform transition-transform duration-200 md:transform-none
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}
      >
        <div className="h-full flex flex-col">
          {/* Logo Section */}
          <div className="hidden md:flex items-center gap-3 px-8 py-10 border-b-2 border-border/50">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Package className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-none">Design System</h1>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                v1.0.0 Alpha
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 md:p-6 space-y-8 custom-scrollbar">
            {navSections.map((section) => (
              <div key={section.title}>
                <h2 className="px-3 mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
                  {section.title}
                </h2>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentPage === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handlePageChange(item.id)}
                        className={`
                          w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
                          group relative overflow-hidden
                          ${isActive
                            ? 'bg-primary text-primary-foreground shadow-md shadow-primary/10'
                            : 'hover:bg-accent text-foreground/70 hover:text-foreground'
                          }
                        `}
                      >
                        <Icon
                          className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                        />
                        <span className="text-[13px] font-medium flex-1 text-left">
                          {item.label}
                        </span>
                        {isActive && <ChevronRight className="w-3 h-3 opacity-50" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          {/* Footer Section */}
          <div className="p-6 border-t-2 border-border/50 bg-muted/20">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>System Operational</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen bg-background selection:bg-primary/10 relative">
        {/* Desktop Sticky Header */}
        <StickyHeader className="hidden md:flex px-12 py-4 items-center justify-between border-b-2">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold capitalize">{currentPage === 'intro' ? 'Overview' : currentPage}</h2>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/willanddadia/design-system#readme" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="text-xs">Docs</Button>
            </a>
            <a href="https://github.com/willanddadia/design-system" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="text-xs">GitHub</Button>
            </a>
          </div>
        </StickyHeader>

        <div className="flex-1 max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-16 w-full">
          {renderPage()}
        </div>

        {/* Sticky Footer */}
        <StickyFooter className="px-12 py-4 mt-auto border-t-2">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© 2026 Design System. Open for contribution.</p>
            <div className="flex items-center gap-6">
              <a href="https://github.com/willanddadia/design-system#readme" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Documentation
              </a>
              <a href="https://github.com/willanddadia/design-system" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="https://www.npmjs.com/package/@will-and/design-system" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                NPM
              </a>
            </div>
          </div>
        </StickyFooter>
      </main>
    </div>
  );
}
