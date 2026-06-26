import React from "react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger 
          className="w-full bg-white/5 border-white/10 text-white h-12 rounded-xl focus:ring-[#e8702a]/30 focus:border-[#e8702a] transition-all"
        >
          <SelectValue placeholder="Selecione seu estado civil" />
        </SelectTrigger>
        <SelectContent className="bg-[#1a1a1a] border-white/10 text-white rounded-xl">
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value} className="focus:bg-white/10 focus:text-white cursor-pointer">
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
