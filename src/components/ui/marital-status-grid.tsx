import React from "react";
import { cn } from "@/lib/utils";

interface MaritalStatusGridProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const options = [
  { value: "solteiro", label: "Solteiro(a)" },
  { value: "casado", label: "Casado(a)" },
  { value: "divorciado", label: "Divorciado(a)" },
  { value: "viuvo", label: "Viúvo(a)" },
  { value: "uniao_estavel", label: "União Estável" },
];

export const MaritalStatusGrid: React.FC<MaritalStatusGridProps> = ({ value, onChange, required = true }) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-neutral-300">
        Estado Civil {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
        {options.map((opt) => {
          const isActive = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={cn(
                "p-3 rounded-lg text-xs md:text-sm text-center transition-all duration-200 h-full flex items-center justify-center",
                isActive
                  ? "bg-cyan-600 text-white font-medium shadow-[0_0_15px_rgba(6,182,212,0.4)] border border-cyan-400"
                  : "bg-white/10 text-white hover:bg-white/20 border border-transparent"
              )}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
