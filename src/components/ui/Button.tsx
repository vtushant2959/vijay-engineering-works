import { type ReactNode, forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
type ButtonSize = 'small' | 'default' | 'large';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-soft hover:shadow-medium',
  secondary: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200',
  outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
  ghost: 'text-secondary-600 hover:bg-secondary-100',
  accent: 'bg-accent-500 text-secondary-900 hover:bg-accent-600 shadow-soft hover:shadow-medium',
};

const sizeStyles: Record<ButtonSize, string> = {
  small: 'px-4 py-2 text-sm',
  default: 'px-6 py-3 text-base',
  large: 'px-8 py-4 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'default',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        className={`
          inline-flex items-center justify-center gap-2 font-semibold rounded-xl
          transition-all duration-200 focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

interface LinkButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  href: string;
  className?: string;
  external?: boolean;
}

const MotionLink = motion.create(Link);

/** True for tel:, mailto:, http(s):, and other protocol links that must stay real <a> tags. */
function isExternalHref(href: string, external?: boolean): boolean {
  return external || /^([a-z][a-z0-9+.-]*:)/i.test(href);
}

export function LinkButton({
  variant = 'primary',
  size = 'default',
  leftIcon,
  rightIcon,
  children,
  href,
  className = '',
  external = false,
}: LinkButtonProps) {
  const classes = `
    inline-flex items-center justify-center gap-2 font-semibold rounded-xl
    transition-all duration-200 focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-offset-2 min-h-[44px]
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  if (isExternalHref(href, external)) {
    const isProtocolLink = /^(tel|mailto):/i.test(href);
    return (
      <motion.a
        href={href}
        target={isProtocolLink ? undefined : '_blank'}
        rel={isProtocolLink ? undefined : 'noopener noreferrer'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </motion.a>
    );
  }

  return (
    <MotionLink to={href} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={classes}>
      {leftIcon}
      {children}
      {rightIcon}
    </MotionLink>
  );
}
