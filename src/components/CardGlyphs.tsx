export function TriangleGlyph() {
  return (
    <svg viewBox="0 0 220 160" className="absolute inset-0 w-full h-full opacity-70" fill="none">
      <circle cx="110" cy="70" r="58" stroke="currentColor" strokeOpacity="0.25" strokeDasharray="2 6" />
      <path d="M110 30 L156 108 L64 108 Z" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
      <circle cx="110" cy="88" r="16" fill="currentColor" fillOpacity="0.18" />
    </svg>
  );
}

export function HouseGlyph() {
  return (
    <svg viewBox="0 0 220 160" className="absolute inset-0 w-full h-full opacity-70" fill="none">
      <path
        d="M70 100 L110 62 L150 100 V132 H70 Z"
        stroke="currentColor"
        strokeOpacity="0.32"
        strokeWidth="1.5"
      />
      <path d="M95 132 V108 H125 V132" stroke="currentColor" strokeOpacity="0.32" strokeWidth="1.5" />
      <line x1="110" y1="62" x2="110" y2="132" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" />
    </svg>
  );
}

export function WaveGlyph() {
  return (
    <svg viewBox="0 0 220 160" className="absolute inset-0 w-full h-full opacity-70" fill="none">
      <path
        d="M40 100 C 70 60, 90 130, 120 90 S 170 50, 190 80"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1.5"
      />
      <path
        d="M40 120 C 70 90, 90 150, 130 110 S 175 80, 190 105"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="1.5"
      />
      <circle cx="120" cy="90" r="3" fill="currentColor" fillOpacity="0.5" />
      <circle cx="190" cy="80" r="3" fill="currentColor" fillOpacity="0.5" />
    </svg>
  );
}

export function HexGlyph() {
  return (
    <svg viewBox="0 0 220 160" className="absolute inset-0 w-full h-full opacity-70" fill="none">
      <path
        d="M140 45 L172 65 V105 L140 125 L108 105 V65 Z"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1.5"
      />
      <circle cx="140" cy="85" r="14" fill="currentColor" fillOpacity="0.18" />
    </svg>
  );
}

export const glyphMap = {
  triangle: TriangleGlyph,
  house: HouseGlyph,
  wave: WaveGlyph,
  hex: HexGlyph,
};
