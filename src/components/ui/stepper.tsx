import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Step {
  id: string;
  title: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

const Stepper = ({ steps, currentStep, className }: StepperProps) => {
  return (
    <div className={cn("w-full", className)}>
      {/* Desktop stepper */}
      <div className="hidden sm:flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isLast = index === steps.length - 1;

          return (
            <React.Fragment key={step.id}>
              <div className="flex items-center gap-3">
                {/* Step circle */}
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300",
                    isCompleted
                      ? "border-cyan-400 bg-cyan-400 text-black"
                      : isCurrent
                      ? "border-cyan-500 bg-cyan-500/10 text-cyan-400 font-semibold"
                      : "border-white/20 bg-transparent text-white/40"
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5 text-black" />
                  ) : (
                    <span className="text-sm">{index + 1}</span>
                  )}
                </div>
                {/* Step text */}
                <div className="flex flex-col">
                  <span
                    className={cn(
                      "text-sm transition-colors",
                      isCurrent
                        ? "text-white font-semibold"
                        : isCompleted
                        ? "text-white font-medium"
                        : "text-white/40"
                    )}
                  >
                    {step.title}
                  </span>
                  {step.description && (
                    <span className={cn(
                      "text-xs",
                      isCurrent || isCompleted ? "text-white/70" : "text-white/40"
                    )}>
                      {step.description}
                    </span>
                  )}
                </div>
              </div>
              {/* Connector line */}
              {!isLast && (
                <div
                  className={cn(
                    "h-0.5 flex-1 mx-4 transition-colors duration-300",
                    isCompleted ? "bg-cyan-500" : "bg-white/10"
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile stepper - simplified progress bar */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-white">
            {steps[currentStep]?.title}
          </span>
          <span className="text-sm text-white/50">
            {currentStep + 1} de {steps.length}
          </span>
        </div>
        {/* Progress bar */}
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-cyan-500 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
        {/* Step indicators */}
        <div className="flex justify-between mt-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-colors",
                index <= currentStep ? "bg-cyan-400" : "bg-white/20"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Stepper, type Step };
