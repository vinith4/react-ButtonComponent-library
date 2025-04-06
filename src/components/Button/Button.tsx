import React from "react";

interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  radius?: string;
  color?: string;
  backgroundColor?: string;
  hoverColor?: string;
  variant?: "filled" | "outlined" | "text";
  height?: string | number;
  width?: string | number;
  onClick?: () => void;
  disabled?: boolean;
  shadow?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  radius = "4px",
  color = "#fff",
  backgroundColor = "#007bff",
  hoverColor = "#0056b3",
  variant = "filled",
  height,
  width,
  onClick,
  disabled = false,
  shadow = "0px 2px 6px rgba(0,0,0,0.15)",
  className,
  style,
}) => {
  const sizeStyles: Record<string, React.CSSProperties> = {
    small: { padding: "4px 10px", fontSize: "12px" },
    medium: { padding: "8px 16px", fontSize: "14px" },
    large: { padding: "12px 24px", fontSize: "16px" },
  };

  const baseStyles: React.CSSProperties = {
    borderRadius: radius,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    boxShadow: shadow,
    height,
    width,
    transition: "background-color 0.3s ease",
    ...sizeStyles[size],
    ...style,
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    filled: {
      backgroundColor,
      color,
      border: "none",
    },
    outlined: {
      backgroundColor: "transparent",
      color: backgroundColor,
      border: `2px solid ${backgroundColor}`,
    },
    text: {
      backgroundColor: "transparent",
      color: backgroundColor,
      border: "none",
    },
  };

  return (
    <button
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={className}
      style={{ ...baseStyles, ...variantStyles[variant] }}
      onMouseOver={(e) => {
        if (!disabled && variant === "filled") {
          (e.currentTarget.style.backgroundColor = hoverColor!);
        }
      }}
      onMouseOut={(e) => {
        if (!disabled && variant === "filled") {
          (e.currentTarget.style.backgroundColor = backgroundColor!);
        }
      }}
    >
      {label}
    </button>
  );
};

export default Button;
