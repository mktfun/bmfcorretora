import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle } from "lucide-react";

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  success?: boolean;
  hint?: string;
  inputMode?: "text" | "numeric" | "tel" | "email" | "url" | "search" | "none" | "decimal";
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, error, success, hint, type, inputMode, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value.length > 0);
      props.onBlur?.(e);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    return (
      <div className="w-full space-y-1.5">
        <label className="block text-sm font-medium text-neutral-300">
          {label}
          {props.required && <span className="text-red-400 ml-0.5">*</span>}
        </label>
        <div className="relative">
          <input
            type={type}
            inputMode={inputMode}
            className={cn(
              // Base styles - dark premium
              "flex h-12 w-full rounded-lg border bg-[#0d0d0d] px-4 py-3 text-base text-white [color-scheme:dark]",
              "ring-offset-transparent transition-all duration-200",
              "placeholder:text-neutral-600",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0",
              "disabled:cursor-not-allowed disabled:opacity-50",
              // Numeric data styling
              inputMode === "numeric" || inputMode === "tel"
                ? "font-mono tracking-wide"
                : "",
              // State-based styling
              error
                ? "border-red-500/70 bg-red-950/20 focus-visible:ring-red-500/30 pr-10"
                : success
                ? "border-cyan-500/70 bg-cyan-950/10 focus-visible:ring-cyan-500/30 pr-10"
                : "border-white/10 hover:border-white/20 focus-visible:ring-cyan-500/30 focus-visible:border-cyan-500/50",
              className
            )}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          />
          {/* Validation icons */}
          {error && (
            <AlertCircle
              className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-400"
            />
          )}
          {success && !error && (
            <CheckCircle2
              className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400"
            />
          )}
        </div>
        {/* Error message */}
        {error && (
          <p className="text-sm text-red-400 flex items-center gap-1">
            {error}
          </p>
        )}
        {/* Hint text */}
        {hint && !error && (
          <p className="text-sm text-neutral-500">{hint}</p>
        )}
      </div>
    );
  }
);
FormInput.displayName = "FormInput";

export { FormInput };
