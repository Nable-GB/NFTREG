"use client";

/* ─────────────────────────────────────────────
   Hand-crafted SVG illustrations for NFTReg.US
   Legal-registration / protection brand motifs
   ───────────────────────────────────────────── */

/* ── NAVBAR LOGO MARK ─────────────────────── */
export const LogoMark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* outer shield shape */}
    <path
      d="M22 2L4 10v12c0 11.1 7.7 21.5 18 24 10.3-2.5 18-12.9 18-24V10L22 2z"
      stroke="rgba(213,176,106,0.5)"
      strokeWidth="1.2"
      fill="rgba(213,176,106,0.06)"
    />
    {/* inner shield */}
    <path
      d="M22 6L8 12.5v9.5C8 31 14.3 39.6 22 41.8c7.7-2.2 14-10.8 14-19.8v-9.5L22 6z"
      stroke="rgba(213,176,106,0.3)"
      strokeWidth="0.8"
      fill="rgba(213,176,106,0.04)"
    />
    {/* star at center of shield */}
    <path
      d="M22 14l1.8 3.6 4 .6-2.9 2.8.7 4L22 23l-3.6 2 .7-4-2.9-2.8 4-.6L22 14z"
      fill="rgba(213,176,106,0.7)"
    />
    {/* horizontal accent bar */}
    <rect x="14" y="28" width="16" height="1" rx="0.5" fill="rgba(213,176,106,0.35)" />
    <rect x="17" y="31" width="10" height="0.8" rx="0.4" fill="rgba(213,176,106,0.2)" />
  </svg>
);

/* ── ORNATE REGISTRATION SEAL ─────────────── */
export const RegistrationSeal = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* radiating lines */}
    {Array.from({ length: 24 }).map((_, i) => (
      <line
        key={i}
        x1="40"
        y1="40"
        x2={40 + 38 * Math.cos((i * 15 * Math.PI) / 180)}
        y2={40 + 38 * Math.sin((i * 15 * Math.PI) / 180)}
        stroke="rgba(213,176,106,0.12)"
        strokeWidth="0.5"
      />
    ))}
    {/* outer ring */}
    <circle cx="40" cy="40" r="36" stroke="rgba(213,176,106,0.35)" strokeWidth="1" fill="none" />
    <circle cx="40" cy="40" r="33" stroke="rgba(213,176,106,0.2)" strokeWidth="0.6" fill="none" strokeDasharray="3 3" />
    {/* middle serrated edge */}
    <circle cx="40" cy="40" r="28" stroke="rgba(213,176,106,0.4)" strokeWidth="0.8" fill="rgba(213,176,106,0.04)" />
    {/* inner ring */}
    <circle cx="40" cy="40" r="24" stroke="rgba(213,176,106,0.5)" strokeWidth="1.2" fill="rgba(213,176,106,0.06)" />
    {/* star in the center */}
    <path
      d="M40 22l4.4 8.8 9.7 1.4-7 6.9 1.6 9.7L40 44l-8.7 4.8 1.6-9.7-7-6.9 9.7-1.4L40 22z"
      fill="rgba(213,176,106,0.55)"
      stroke="rgba(213,176,106,0.7)"
      strokeWidth="0.8"
    />
    {/* text arc hint */}
    <path
      d="M40 11 A29 29 0 0 1 69 40"
      stroke="none"
      fill="none"
      id="sealArc"
    />
  </svg>
);

/* ── PROBLEM SECTION ICONS ────────────────── */

export const IconNoProof = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* broken chain links */}
    <rect x="5" y="14" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" fill="none" />
    <rect x="23" y="14" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" fill="none" opacity="0.5" />
    {/* break line */}
    <line x1="17" y1="20" x2="23" y2="20" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.4" />
    {/* X mark */}
    <line x1="27" y1="6" x2="33" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="33" y1="6" x2="27" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const IconRegulatory = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* building pillars */}
    <rect x="8" y="16" width="4" height="18" rx="1" fill="currentColor" opacity="0.3" />
    <rect x="18" y="16" width="4" height="18" rx="1" fill="currentColor" opacity="0.3" />
    <rect x="28" y="16" width="4" height="18" rx="1" fill="currentColor" opacity="0.3" />
    {/* pediment triangle */}
    <path d="M4 16L20 4l16 12H4z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    {/* base */}
    <rect x="4" y="34" width="32" height="2" rx="1" fill="currentColor" opacity="0.5" />
    {/* question mark */}
    <text x="30" y="12" fontSize="10" fontWeight="bold" fill="currentColor" opacity="0.7">?</text>
  </svg>
);

export const IconUnenforceable = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* gavel head */}
    <rect x="10" y="8" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    {/* gavel handle */}
    <line x1="20" y1="16" x2="20" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* striking block */}
    <rect x="12" y="32" width="16" height="4" rx="1.5" fill="currentColor" opacity="0.3" />
    {/* cancel slash */}
    <line x1="6" y1="36" x2="34" y2="4" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
  </svg>
);

export const IconTaxGap = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* document */}
    <path d="M8 4h18l6 6v26H8V4z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    {/* fold corner */}
    <path d="M26 4v6h6" stroke="currentColor" strokeWidth="1.2" fill="none" />
    {/* dollar sign */}
    <text x="15" y="27" fontSize="14" fontWeight="bold" fill="currentColor" opacity="0.6">$</text>
    {/* gap lines */}
    <line x1="12" y1="14" x2="22" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="12" y1="17" x2="18" y2="17" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </svg>
);

export const IconRWA = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* house */}
    <path d="M6 20L20 8l14 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    <rect x="10" y="20" width="20" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
    {/* chain link overlay */}
    <circle cx="30" cy="12" r="5" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5" />
    <circle cx="36" cy="12" r="5" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5" />
    {/* door */}
    <rect x="17" y="26" width="6" height="8" rx="1" fill="currentColor" opacity="0.2" />
  </svg>
);

export const IconFraud = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* mask shape */}
    <path
      d="M20 6C12 6 6 14 6 20c0 4 2 7 6 9 2.5-2 5-3 8-3s5.5 1 8 3c4-2 6-5 6-9 0-6-6-14-14-14z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    {/* eye holes */}
    <ellipse cx="14" cy="18" rx="3" ry="2.5" fill="currentColor" opacity="0.3" />
    <ellipse cx="26" cy="18" rx="3" ry="2.5" fill="currentColor" opacity="0.3" />
    {/* warning triangle */}
    <path d="M20 30l-4 6h8l-4-6z" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <line x1="20" y1="32" x2="20" y2="34" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="20" cy="35.5" r="0.6" fill="currentColor" />
  </svg>
);

/* ── FEATURES SECTION ICONS ───────────────── */

export const IconCopyright = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
    <text x="13" y="26" fontSize="18" fontWeight="bold" fill="currentColor" opacity="0.8">©</text>
  </svg>
);

export const IconTrademark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* shield */}
    <path
      d="M20 4L5 10v10c0 10 6.5 19 15 22 8.5-3 15-12 15-22V10L20 4z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    {/* TM text */}
    <text x="10" y="26" fontSize="13" fontWeight="bold" fill="currentColor" opacity="0.7" letterSpacing="1">TM</text>
  </svg>
);

export const IconSEC = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* scales */}
    <line x1="20" y1="4" x2="20" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* beam */}
    <line x1="6" y1="14" x2="34" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* fulcrum triangle */}
    <path d="M17 4h6l-3-3-3 3z" fill="currentColor" opacity="0.5" />
    {/* left pan */}
    <path d="M6 14c0 4 3 7 7 7s7-3 7-7" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6" />
    {/* right pan */}
    <path d="M20 14c0 4 3 7 7 7s7-3 7-7" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6" />
    {/* base */}
    <rect x="14" y="34" width="12" height="2" rx="1" fill="currentColor" opacity="0.4" />
  </svg>
);

export const IconProperty = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* key bow (circle) */}
    <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
    {/* key shaft */}
    <line x1="22" y1="14" x2="36" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    {/* key teeth */}
    <line x1="30" y1="14" x2="30" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="34" y1="14" x2="34" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* chain links below */}
    <rect x="8" y="26" width="8" height="6" rx="2" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
    <rect x="16" y="28" width="8" height="6" rx="2" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
  </svg>
);

/* ── PROCESS SECTION ICONS ────────────────── */

export const IconConsultation = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* magnifying glass */}
    <circle cx="17" cy="17" r="10" stroke="currentColor" strokeWidth="1.6" fill="none" />
    <line x1="24.5" y1="24.5" x2="34" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* document inside */}
    <rect x="12" y="11" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
    <line x1="14" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
    <line x1="14" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
  </svg>
);

export const IconStrategy = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* chess piece – simplified rook */}
    <rect x="14" y="6" width="12" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" fill="none" />
    <path d="M16 10v4h8v-4" stroke="currentColor" strokeWidth="1.3" fill="none" />
    <rect x="15" y="14" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="12" y="28" width="16" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    {/* crown notches */}
    <rect x="15" y="6" width="2" height="2" fill="currentColor" opacity="0.3" />
    <rect x="19" y="6" width="2" height="2" fill="currentColor" opacity="0.3" />
    <rect x="23" y="6" width="2" height="2" fill="currentColor" opacity="0.3" />
    {/* direction arrow */}
    <path d="M32 18l-4 4 4 4" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconFiling = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* filing cabinet */}
    <rect x="6" y="4" width="28" height="32" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    {/* drawer lines */}
    <line x1="6" y1="14.5" x2="34" y2="14.5" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <line x1="6" y1="25" x2="34" y2="25" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    {/* drawer handles */}
    <rect x="17" y="8" width="6" height="2" rx="1" fill="currentColor" opacity="0.4" />
    <rect x="17" y="18.5" width="6" height="2" rx="1" fill="currentColor" opacity="0.4" />
    <rect x="17" y="29" width="6" height="2" rx="1" fill="currentColor" opacity="0.4" />
    {/* document peeking out */}
    <rect x="12" y="1" width="10" height="5" rx="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.15" />
  </svg>
);

export const IconCertificate = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* certificate document */}
    <rect x="4" y="4" width="24" height="32" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    {/* text lines */}
    <line x1="8" y1="10" x2="24" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="8" y1="14" x2="20" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="8" y1="18" x2="22" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    {/* ribbon / seal */}
    <circle cx="32" cy="30" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="32" cy="30" r="4" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.2" />
    {/* ribbon tails */}
    <line x1="28" y1="36" x2="26" y2="40" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="36" y1="36" x2="38" y2="40" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    {/* checkmark inside seal */}
    <path d="M29 30l2 2 4-4" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── DECORATIVE BACKGROUND ELEMENTS ───────── */

export const GridPattern = ({ className = "" }: { className?: string }) => (
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <pattern id="legalGrid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M60 0V60H0" fill="none" stroke="rgba(213,176,106,0.06)" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#legalGrid)" />
  </svg>
);

export const FloatingDocs = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* scattered document shapes */}
    <rect x="30" y="40" width="60" height="80" rx="4" stroke="rgba(213,176,106,0.1)" strokeWidth="0.8" fill="none" transform="rotate(-12 60 80)">
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 -8; 0 0" dur="6s" repeatCount="indefinite" />
    </rect>
    <rect x="300" y="60" width="50" height="70" rx="4" stroke="rgba(138,160,196,0.1)" strokeWidth="0.8" fill="none" transform="rotate(8 325 95)">
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 10; 0 0" dur="8s" repeatCount="indefinite" />
    </rect>
    <rect x="180" y="20" width="40" height="55" rx="3" stroke="rgba(213,176,106,0.08)" strokeWidth="0.6" fill="none" transform="rotate(-5 200 47)">
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0" dur="7s" repeatCount="indefinite" />
    </rect>
    {/* small seal circles */}
    <circle cx="100" cy="200" r="15" stroke="rgba(213,176,106,0.08)" strokeWidth="0.6" fill="none">
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 6; 0 0" dur="5s" repeatCount="indefinite" />
    </circle>
    <circle cx="340" cy="220" r="12" stroke="rgba(138,160,196,0.08)" strokeWidth="0.6" fill="none">
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur="6.5s" repeatCount="indefinite" />
    </circle>
    {/* decorative lines */}
    <line x1="60" y1="160" x2="140" y2="160" stroke="rgba(213,176,106,0.06)" strokeWidth="0.5" />
    <line x1="250" y1="180" x2="360" y2="180" stroke="rgba(213,176,106,0.05)" strokeWidth="0.5" />
  </svg>
);

/* ── CTA SECTION DECORATION ───────────────── */

export const ShieldBadge = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M60 4L10 24v40c0 36 21.5 68 50 76 28.5-8 50-40 50-76V24L60 4z"
      stroke="rgba(213,176,106,0.18)"
      strokeWidth="1.5"
      fill="rgba(213,176,106,0.03)"
    />
    <path
      d="M60 16L20 32v32c0 30 17 56 40 64 23-8 40-34 40-64V32L60 16z"
      stroke="rgba(213,176,106,0.12)"
      strokeWidth="1"
      fill="none"
    />
    {/* inner star */}
    <path
      d="M60 40l6 12 13.4 2-9.7 9.4 2.3 13.4L60 71l-12 6.8 2.3-13.4-9.7-9.4 13.4-2L60 40z"
      fill="rgba(213,176,106,0.12)"
      stroke="rgba(213,176,106,0.25)"
      strokeWidth="0.8"
    />
    {/* text-like lines */}
    <rect x="40" y="90" width="40" height="2" rx="1" fill="rgba(213,176,106,0.12)" />
    <rect x="45" y="96" width="30" height="1.5" rx="0.75" fill="rgba(213,176,106,0.08)" />
    <rect x="48" y="101" width="24" height="1.5" rx="0.75" fill="rgba(213,176,106,0.06)" />
  </svg>
);

/* ── SECTION DIVIDER ──────────────────────── */

export const SectionDivider = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 800 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="none">
    <line x1="0" y1="12" x2="360" y2="12" stroke="rgba(213,176,106,0.15)" strokeWidth="0.5" />
    {/* center diamond */}
    <path d="M394 12l6-6 6 6-6 6-6-6z" stroke="rgba(213,176,106,0.35)" strokeWidth="0.8" fill="rgba(213,176,106,0.08)" />
    <line x1="440" y1="12" x2="800" y2="12" stroke="rgba(213,176,106,0.15)" strokeWidth="0.5" />
  </svg>
);

/* ── HERO FLOATING ELEMENTS ───────────────── */

export const HeroAccent = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* concentric legal-styled circles */}
    <circle cx="100" cy="100" r="90" stroke="rgba(213,176,106,0.06)" strokeWidth="0.5" fill="none" />
    <circle cx="100" cy="100" r="70" stroke="rgba(213,176,106,0.08)" strokeWidth="0.5" fill="none" strokeDasharray="4 6" />
    <circle cx="100" cy="100" r="50" stroke="rgba(213,176,106,0.1)" strokeWidth="0.5" fill="none" />
    <circle cx="100" cy="100" r="30" stroke="rgba(213,176,106,0.12)" strokeWidth="0.5" fill="none" strokeDasharray="2 4" />
    {/* crosshair */}
    <line x1="100" y1="30" x2="100" y2="170" stroke="rgba(213,176,106,0.04)" strokeWidth="0.5" />
    <line x1="30" y1="100" x2="170" y2="100" stroke="rgba(213,176,106,0.04)" strokeWidth="0.5" />
  </svg>
);
