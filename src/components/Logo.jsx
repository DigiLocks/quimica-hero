export default function Logo({ className = "w-7 h-7" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      aria-label="DigiLock"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>

      {/* Shield base */}
      <path
        d="M16 2 L28 6 L28 16 C28 22 22 27 16 30 C10 27 4 22 4 16 L4 6 Z"
        fill="url(#logoGrad)"
      />

      {/* Lock body */}
      <rect
        x="11" y="14" width="10" height="9" rx="1.5"
        fill="white"
      />

      {/* Lock shackle */}
      <path
        d="M12 14 L12 11 C12 9 13.5 7 16 7 C18.5 7 20 9 20 11 L20 14"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Keyhole */}
      <circle cx="16" cy="17.5" r="1.3" fill="url(#logoGrad)" />
      <rect x="15.4" y="18" width="1.2" height="3.5" rx="0.6" fill="url(#logoGrad)" />
    </svg>
  );
}
