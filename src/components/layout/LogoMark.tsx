import logoUrl from '../../assets/vijay-engineering-works-logo.png';

interface LogoMarkProps {
  className?: string;
  /** Use on dark backgrounds (e.g. the footer) so the logo sits on a light chip instead of blending in. */
  withBackground?: boolean;
}

export function LogoMark({ className = 'w-10 h-10', withBackground = false }: LogoMarkProps) {
  return (
    <div
      className={`${className} shrink-0 flex items-center justify-center ${
        withBackground ? 'bg-white rounded-xl p-1.5 shadow-soft' : ''
      }`}
    >
      <img src={logoUrl} alt="Vijay Engineering Works" className="w-full h-full object-contain" />
    </div>
  );
}
