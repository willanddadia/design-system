import { useState } from 'react';
import { Check } from 'lucide-react';

export interface SelectBoxOption {
  value: string;
  label: string;
  description?: string;
}

export interface SelectBoxProps {
  options: SelectBoxOption[];
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  multiple?: boolean;
  className?: string;
}

export function SelectBox({
  options,
  value,
  onChange,
  multiple = false,
  className = '',
}: SelectBoxProps) {
  const selectedValues = Array.isArray(value) ? value : value ? [value] : [];

  const handleSelect = (optionValue: string) => {
    if (multiple) {
      const newValues = selectedValues.includes(optionValue)
        ? selectedValues.filter(v => v !== optionValue)
        : [...selectedValues, optionValue];
      onChange?.(newValues);
    } else {
      onChange?.(optionValue);
    }
  };

  const isSelected = (optionValue: string) => selectedValues.includes(optionValue);

  return (
    <div className={`space-y-2 ${className}`}>
      {options.map((option) => {
        const selected = isSelected(option.value);
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => handleSelect(option.value)}
            className={`
              w-full p-4 rounded-lg border-2 text-left
              transition-all
              ${selected 
                ? 'border-primary bg-primary/5' 
                : 'border-border bg-card hover:border-primary/50 hover:bg-accent/50'
              }
            `}
          >
            <div className="flex items-start gap-3">
              <div className={`
                w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5
                border-2 transition-colors
                ${selected 
                  ? 'bg-primary border-primary' 
                  : 'border-border bg-background'
                }
              `}>
                {selected && <Check className="w-3 h-3 text-primary-foreground" />}
              </div>
              <div className="flex-1">
                <div className="font-medium">{option.label}</div>
                {option.description && (
                  <div className="text-sm text-muted-foreground mt-1">
                    {option.description}
                  </div>
                )}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
