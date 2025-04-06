// Inside your component library's Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  backgroundColor?: string;
  color?: string;
  hoverColor?: string;
  width?: string;
  height?: string;
  radius?: string;
  disabled?: boolean;
  shadow?: string;
  onClick?: () => void;
}

const Button = ({
  label,
  backgroundColor,
  color,
  hoverColor,
  width,
  height,
  radius,
  disabled,
  shadow,
  onClick
}: ButtonProps) => {
  console.log('Button rendered:', label);

  const [hovered, setHovered] = React.useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: hovered && hoverColor ? hoverColor : backgroundColor || '#007BFF',
        color: color || 'white',
        width: width || '150px',
        height: height || '40px',
        borderRadius: radius || '5px',
        boxShadow: shadow || 'none',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </button>
  );
};

export default Button;
