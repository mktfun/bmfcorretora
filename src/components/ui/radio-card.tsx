import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface RadioCardOption {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

interface RadioCardGroupProps {
  options: RadioCardOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  className?: string;
  columns?: 2 | 3;
}

const RadioCardGroup = ({
  options,
  value,
  onChange,
  label,
  className,
  columns = 2,
}: RadioCardGroupProps) => {
  return (
    <div className={cn("w-full space-y-2", className)}>
      {label && (
        <label className="block text-sm font-medium text-neutral-300">
          {label}
        </label>
      )}
      <div
        className={cn(
          "grid gap-3",
          columns === 2
            ? "grid-cols-1 sm:grid-cols-2"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {options.map((option) => {
          const isSelected = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={cn(
                "relative flex flex-col items-start p-4 rounded-xl border transition-all duration-200",
                "min-h-[60px] text-left",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8702a]/30 focus-visible:ring-offset-0",
                isSelected
                  ? "border-[#e8702a] bg-[#e8702a]/20 shadow-[0_0_15px_rgba(232,112,42,0.2)]"
                  : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
              )}
            >
              {/* Icon */}
              {option.icon && (
                <div
                  className={cn(
                    "mb-2 transition-colors",
                    isSelected ? "text-[#e8702a]" : "text-white/70"
                  )}
                >
                  {option.icon}
                </div>
              )}
              {/* Label */}
              <span
                className={cn(
                  "text-sm font-semibold transition-colors",
                  isSelected ? "text-white" : "text-white/70"
                )}
              >
                {option.label}
              </span>
              {/* Description */}
              {option.description && (
                <span className="text-xs text-neutral-500 mt-0.5">
                  {option.description}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export { RadioCardGroup, type RadioCardOption };
