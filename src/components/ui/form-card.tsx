import * as React from "react";
import { cn } from "@/lib/utils";

interface FormCardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

const FormCard = ({ children, title, description, className }: FormCardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[#111]/80 border border-white/10 backdrop-blur-sm p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)]",
        className
      )}
    >
      {(title || description) && (
        <div className="mb-6 pb-4 border-b border-white/10">
          {title && (
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-neutral-400 mt-1">{description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export { FormCard };
