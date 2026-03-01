import { HTMLAttributes, forwardRef, useEffect } from 'react';
import { X } from 'lucide-react';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  variant?: 'fullscreen' | 'popup' | 'side';
  title?: string;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, variant = 'popup', title, className = '', children, ...props }, ref) => {
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }

      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [isOpen]);

    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const variants = {
      fullscreen: 'inset-0',
      popup: 'inset-0 flex items-center justify-center p-4',
      side: 'inset-y-0 right-0',
    };

    const contentVariants = {
      fullscreen: 'w-full h-full bg-background',
      popup: 'bg-card rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto',
      side: 'w-full max-w-md h-full bg-card shadow-2xl',
    };

    const animationVariants = {
      fullscreen: 'animate-in fade-in duration-200',
      popup: 'animate-in fade-in zoom-in-95 duration-200',
      side: 'animate-in slide-in-from-right duration-300',
    };

    return (
      <div className="fixed inset-0 z-50">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 animate-in fade-in duration-200"
          onClick={onClose}
        />

        {/* Modal Container */}
        <div className={`fixed ${variants[variant]}`}>
          {/* Modal Content */}
          <div
            ref={ref}
            className={`relative ${contentVariants[variant]} ${animationVariants[variant]} ${className}`}
            {...props}
          >
            {/* Header */}
            {(title || variant !== 'fullscreen') && (
              <div className="flex items-center justify-between p-6 border-b-2 border-border">
                {title && <h2>{title}</h2>}
                <button
                  onClick={onClose}
                  className="ml-auto p-2 rounded-lg hover:bg-accent transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Body */}
            <div className="p-6">{children}</div>
          </div>
        </div>
      </div>
    );
  },
);

Modal.displayName = 'Modal';

export const FullscreenModal = forwardRef<HTMLDivElement, Omit<ModalProps, 'variant'>>(
  (props, ref) => <Modal ref={ref} variant="fullscreen" {...props} />,
);

FullscreenModal.displayName = 'FullscreenModal';

export const PopupModal = forwardRef<HTMLDivElement, Omit<ModalProps, 'variant'>>((props, ref) => (
  <Modal ref={ref} variant="popup" {...props} />
));

PopupModal.displayName = 'PopupModal';

export const SideModal = forwardRef<HTMLDivElement, Omit<ModalProps, 'variant'>>((props, ref) => (
  <Modal ref={ref} variant="side" {...props} />
));

SideModal.displayName = 'SideModal';
