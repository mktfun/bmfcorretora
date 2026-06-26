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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {options.map((opt) => {
          const isActive = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={cn(
                "rounded-lg p-3 text-center cursor-pointer transition-all duration-200",
                isActive
                  ? "bg-[#e8702a]/20 border border-[#e8702a] text-white shadow-[0_0_15px_rgba(232,112,42,0.2)]"
                  : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10"
              )}
            >
              <span className={cn("text-sm font-medium", isActive ? "text-white" : "text-white/70")}>{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
