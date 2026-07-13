import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function Logo({ className = "", size = 32, showText = true }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1 ${className}`}>
      <div 
        className="relative flex items-center justify-center overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.png"
          alt="ComplDoc Logo"
          width={size}
          height={size}
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span className="font-serif text-lg font-semibold tracking-tight text-dark dark:text-white transition-colors duration-300">
          ComplDoc
        </span>
      )}
    </Link>
  );
}

// A pure SVG vector version of the section symbol "§" for dynamic background visual motifs and animations
export function SectionSymbol({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`select-none ${className}`}
    >
      {/* Handcrafted vector path for § paragraph sign */}
      <path d="M12 4c-1.657 0-3 1.12-3 2.5S10.343 9 12 9c2.21 0 4 1.343 4 3s-1.79 3-4 3c-1.657 0-3-1.12-3-2.5S10.343 10 12 10c2.21 0 4-1.343 4-3s-1.79-3-4-3zm0 16c1.657 0 3-1.12 3-2.5S13.657 15 12 15c-2.21 0-4-1.343-4-3s1.79-3 4-3c1.657 0 3 1.12 3 2.5S13.657 14 12 14c-2.21 0-4 1.343-4 3s1.79 3 4 3z" />
    </svg>
  );
}
