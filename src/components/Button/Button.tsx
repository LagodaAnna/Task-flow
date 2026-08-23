import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "ghost" | "plain";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  ghost: "text-primary hover:text-primary-hover",
  plain: "",
};

function Button({
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-1 rounded-md text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
}

export default Button;
