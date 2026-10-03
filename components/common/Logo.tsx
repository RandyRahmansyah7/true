interface LogoProps {
  className?: string;
  size?: number;
  textColor?: string;
}

export default function Logo({
  className = "",
  size = 36,
  textColor = "text-brandDark",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 text-2xl sm:text-3xl font-bold tracking-tight ${textColor} ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect width="36" height="36" rx="8" fill="#191A23" />
        <path d="M18 6L21.5 14.5L30 18L21.5 21.5L18 30L14.5 21.5L6 18L14.5 14.5L18 6Z" fill="#B9FF66" />
        <path d="M18 11L19.8 16.2L25 18L19.8 19.8L18 25L16.2 19.8L11 18L16.2 16.2L18 11Z" fill="#191A23" />
      </svg>
      <span className="capitalize">truegrid</span>
    </div>
  );
}
