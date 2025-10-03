interface GradientButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function GradientButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: GradientButtonProps) {
  const baseClasses =
    "font-medium rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white",
    secondary:
      "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white",
    outline:
      "border border-transparent bg-gradient-to-r from-cyan-400 to-blue-600 bg-origin-border text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-700",
  };

  return (
    <button
      type="button"
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
