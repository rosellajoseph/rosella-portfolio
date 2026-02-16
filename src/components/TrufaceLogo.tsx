export default function TrufaceLogo({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 140"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="trufaceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F97068" />
          <stop offset="40%" stopColor="#E8567A" />
          <stop offset="100%" stopColor="#C44D9E" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="120" height="140" rx="8" fill="#87CEEB" />

      {/* Fingerprint head profile - curved lines */}
      <g fill="none" stroke="url(#trufaceGradient)" strokeWidth="2.2" strokeLinecap="round">
        {/* Outermost curves - head shape */}
        <path d="M60 12 Q30 12, 22 45 Q14 78, 22 95 Q30 112, 45 118 Q55 122, 60 122" />
        <path d="M60 12 Q90 15, 98 50 Q105 85, 95 105 Q85 120, 60 122" />

        {/* Second layer */}
        <path d="M60 18 Q35 18, 28 48 Q20 78, 28 94 Q36 108, 50 113 Q56 115, 60 115" />
        <path d="M60 18 Q85 20, 92 52 Q98 82, 90 100 Q82 115, 60 115" />

        {/* Third layer */}
        <path d="M60 24 Q40 24, 34 50 Q27 76, 34 90 Q42 104, 55 108 Q58 109, 60 109" />
        <path d="M60 24 Q80 26, 86 54 Q92 80, 85 95 Q78 108, 60 109" />

        {/* Fourth layer */}
        <path d="M60 30 Q45 30, 40 52 Q34 74, 40 86 Q47 98, 58 102 Q59 102, 60 102" />
        <path d="M60 30 Q75 32, 80 54 Q86 76, 80 90 Q74 102, 60 102" />

        {/* Fifth layer */}
        <path d="M60 36 Q48 36, 45 54 Q40 72, 45 82 Q51 92, 58 95 Q59 95, 60 95" />
        <path d="M60 36 Q72 37, 75 55 Q80 73, 75 84 Q70 94, 60 95" />

        {/* Sixth layer */}
        <path d="M60 42 Q52 42, 50 56 Q46 70, 50 78 Q54 86, 59 88 Q60 88, 60 88" />
        <path d="M60 42 Q68 43, 70 57 Q74 71, 70 79 Q66 87, 60 88" />

        {/* Inner curves */}
        <path d="M60 48 Q55 48, 54 58 Q52 68, 55 74 Q57 80, 60 81" />
        <path d="M60 48 Q65 49, 66 59 Q68 69, 65 75 Q63 80, 60 81" />

        {/* Center */}
        <path d="M60 54 Q58 54, 58 62 Q57 70, 60 74" />
        <path d="M60 54 Q62 55, 62 63 Q63 71, 60 74" />
      </g>

      {/* TRUFACE text */}
      <text
        x="60"
        y="132"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="12"
        fontWeight="bold"
        letterSpacing="2"
        fill="#5B4FCF"
      >
        TRUFACE
      </text>
    </svg>
  );
}
