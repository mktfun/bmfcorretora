import * as React from "react";
import { Label } from "@/components/ui/label";

interface YesNoToggleProps {
  label: string;
  value: "sim" | "nao" | null;
  onChange: (value: "sim" | "nao") => void;
}

export const YesNoToggle: React.FC<YesNoToggleProps> = ({ label, value, onChange }) => (
  <div className="space-y-2">
    <Label className="text-sm font-medium text-neutral-300">{label}</Label>
    <div className="grid grid-cols-2 gap-3 w-full">
      <button
        type="button"
        onClick={() => onChange("sim")}
        className={`h-12 flex items-center justify-center rounded-lg border text-sm font-medium transition-all duration-200 ${
          value === "sim"
            ? "bg-cyan-500/15 text-cyan-400 border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.15)] scale-[1.02]"
            : "bg-white/5 text-neutral-400 border-white/10 hover:bg-white/8 hover:border-white/20"
        }`}
      >
        Sim
      </button>
      <button
        type="button"
        onClick={() => onChange("nao")}
        className={`h-12 flex items-center justify-center rounded-lg border text-sm font-medium transition-all duration-200 ${
          value === "nao"
            ? "bg-cyan-500/15 text-cyan-400 border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.15)] scale-[1.02]"
            : "bg-white/5 text-neutral-400 border-white/10 hover:bg-white/8 hover:border-white/20"
        }`}
      >
        Não
      </button>
    </div>
  </div>
);
