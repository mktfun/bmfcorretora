import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "light";
  rounded?: boolean;
  textOnly?: boolean;
}

export const Logo = ({
  className,
  size = "md",
  variant = "default",
  rounded = true,
  textOnly = false,
}: LogoProps) => {
  const sizes = {
    sm: { icon: 28, text: "text-lg", gap: "gap-2" },
    md: { icon: 36, text: "text-2xl", gap: "gap-2.5" },
    lg: { icon: 44, text: "text-3xl", gap: "gap-3" },
    xl: { icon: 120, text: "text-2xl", gap: "gap-5" },
  };

  const logoSrc = variant === "light"
    ? "/lovable-uploads/b1c3e60d-1da1-4434-bbf8-b01ec0a469ec.png"
    : "/lovable-uploads/b1c3e60d-1da1-4434-bbf8-b01ec0a469ec.png";

  return (
    <div className={cn("flex items-center", sizes[size].gap, className)}>
      {!textOnly && (
        <img
          alt="BMF Corretora"
          width={sizes[size].icon}
          height={sizes[size].icon}
          className={cn("object-contain", rounded && "rounded-lg")}
          src={logoSrc}
        />
      )}
      <span
        className={cn(
          "font-sans font-bold tracking-tight",
          sizes[size].text,
          "text-white"
        )}
      >
        BMF{" "}
        <span className="font-light tracking-wide opacity-70 text-cyan-400 text-sm">
          Corretora
        </span>
      </span>
    </div>
  );
};
