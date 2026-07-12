import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'small' | 'default' | 'large';
  onClick?: () => void;
}

const paddingStyles = {
  none: '',
  small: 'p-4',
  default: 'p-6',
  large: 'p-8',
};

export function Card({
  children,
  className = '',
  hover = false,
  padding = 'default',
  onClick,
}: CardProps) {
  const Component = onClick ? motion.button : motion.div;

  return (
    <Component
      onClick={onClick}
      whileHover={hover ? { y: -4, boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.1), 0 16px 48px -8px rgba(0, 0, 0, 0.1)' } : undefined}
      className={`
        bg-white rounded-2xl border border-secondary-200
        transition-all duration-300
        ${hover ? 'shadow-soft hover:shadow-medium' : 'shadow-soft'}
        ${paddingStyles[padding]}
        ${onClick ? 'cursor-pointer text-left w-full' : ''}
        ${className}
      `}
    >
      {children}
    </Component>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <Card hover className={`text-center ${className}`}>
      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600">
        {icon}
      </div>
      <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-2">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </Card>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export function StatCard({ value, label, icon, className = '' }: StatCardProps) {
  return (
    <Card className={`text-center ${className}`}>
      {icon && (
        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent-50 flex items-center justify-center text-accent-600">
          {icon}
        </div>
      )}
      <p className="font-heading font-bold text-4xl text-primary-600 mb-1">{value}</p>
      <p className="text-secondary-600">{label}</p>
    </Card>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  rating = 5,
  className = '',
}: TestimonialCardProps) {
  return (
    <Card className={`${className}`}>
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-accent-500' : 'text-secondary-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-secondary-700 mb-6 italic">&ldquo;{quote}&rdquo;</blockquote>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
          {avatar ? (
            <img src={avatar} alt={author} className="w-full h-full rounded-full object-cover" />
          ) : (
            author.charAt(0)
          )}
        </div>
        <div>
          <p className="font-semibold text-secondary-900">{author}</p>
          <p className="text-sm text-secondary-600">{role}, {company}</p>
        </div>
      </div>
    </Card>
  );
}
