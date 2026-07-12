import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'primary' | 'gradient' | 'dark';
  padding?: 'small' | 'default' | 'large' | 'none';
}

const backgroundStyles = {
  white: 'bg-white',
  light: 'bg-secondary-50',
  primary: 'bg-primary-600 text-white',
  gradient: 'bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white',
  dark: 'bg-secondary-900 text-white',
};

const paddingStyles = {
  none: '',
  small: 'py-12 md:py-16',
  default: 'py-16 md:py-20 lg:py-24',
  large: 'py-20 md:py-28 lg:py-32',
};

export function Section({
  children,
  className = '',
  id,
  background = 'white',
  padding = 'default',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        ${backgroundStyles[background]}
        ${paddingStyles[padding]}
        ${className}
      `}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  /** Set to 'dark' when this header sits on a gradient/primary/dark Section background. */
  theme?: 'light' | 'dark';
  className?: string;
}

const alignStyles = {
  left: 'text-left',
  center: 'text-center mx-auto',
  right: 'text-right ml-auto',
};

const themeStyles = {
  light: {
    eyebrow: 'text-primary-600',
    title: 'text-secondary-900',
    subtitle: 'text-secondary-600',
  },
  dark: {
    eyebrow: 'text-accent-400',
    title: 'text-white',
    subtitle: 'text-primary-100',
  },
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}: SectionHeaderProps) {
  const colors = themeStyles[theme];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${alignStyles[align]} mb-12 md:mb-16 ${className}`}
    >
      {eyebrow && (
        <p className={`font-semibold text-sm uppercase tracking-wider mb-3 ${colors.eyebrow}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 ${colors.title}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${colors.subtitle}`}>{subtitle}</p>
      )}
    </motion.div>
  );
}
