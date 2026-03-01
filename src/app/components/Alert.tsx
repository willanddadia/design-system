import { HTMLAttributes, forwardRef } from 'react';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'destructive';
  title?: string;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'default', title, className = '', children, ...props }, ref) => {
    const variants = {
      default: 'bg-secondary text-secondary-foreground border-border',
      success: 'bg-green-50 text-green-900 border-green-200',
      warning: 'bg-yellow-50 text-yellow-900 border-yellow-200',
      destructive: 'bg-red-50 text-red-900 border-red-200',
    };
    
    const icons = {
      default: Info,
      success: CheckCircle,
      warning: AlertCircle,
      destructive: XCircle,
    };
    
    const Icon = icons[variant];
    
    return (
      <div
        ref={ref}
        className={`rounded-lg border-2 p-4 ${variants[variant]} ${className}`}
        {...props}
      >
        <div className="flex gap-3">
          <Icon className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="flex-1">
            {title && <h4 className="mb-1">{title}</h4>}
            <div>{children}</div>
          </div>
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';
