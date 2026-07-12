import { type ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'outline';
  size?: 'small' | 'default' | 'large';
  icon?: ReactNode;
  className?: string;
}

const variantStyles = {
  primary: 'bg-primary-100 text-primary-700',
  secondary: 'bg-secondary-100 text-secondary-700',
  accent: 'bg-accent-100 text-accent-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-orange-100 text-orange-700',
  error: 'bg-red-100 text-red-700',
  outline: 'bg-transparent border border-secondary-300 text-secondary-700',
};

const sizeStyles = {
  small: 'text-xs px-2 py-0.5',
  default: 'text-xs px-2.5 py-1',
  large: 'text-sm px-3 py-1.5',
};

export function Badge({
  children,
  variant = 'primary',
  size = 'default',
  icon,
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1 font-semibold rounded-full
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {icon}
      {children}
    </span>
  );
}
