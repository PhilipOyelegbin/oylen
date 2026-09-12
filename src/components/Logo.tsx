// export const Logo = () => (
//   <Image
//     src="/logo.png"
//     alt="Logo"
//     className="w-32 aspect-video relative"
//     width={100}
//     height={100}
//     priority
//   />
// );

// export const Logo_Light = () => (
//   <>
//     <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary to-secondary shadow-md transition-transform duration-300 group-hover:scale-105">
//       <span className="text-xl font-black text-accent">O</span>
//       <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-accent"></span>
//     </span>
//     <div className="flex flex-col">
//       <span className="text-xl font-bold tracking-tight text-secondary leading-none group-hover:text-primary transition-colors">
//         Oylen
//       </span>
//       <span className="text-[10px] uppercase tracking-widest font-semibold text-primary">
//         Group
//       </span>
//     </div>
//   </>
// );

// export const Logo_Dark = () => (
//   <>
//     <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary to-accent shadow-md transition-transform duration-300">
//       <span className="text-xl font-black text-white">O</span>
//       <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-secondary bg-accent"></span>
//     </span>
//     <div className="flex flex-col">
//       <span className="text-xl font-bold tracking-tight text-white leading-none">
//         Oylen
//       </span>
//       <span className="text-[10px] uppercase tracking-widest font-semibold text-primary">
//         Group
//       </span>
//     </div>
//   </>
// );

export const Logo_Light = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 165 42"
    width={165}
    height={42}
    aria-label="Oylen Group Logo"
  >
    <defs>
      <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--primary, #0F6B5B)" />
        <stop offset="100%" stopColor="var(--secondary, #0f172a)" />
      </linearGradient>
      <filter id="shadow-md" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow
          dx={0}
          dy={4}
          stdDeviation={3}
          floodColor="#000000"
          floodOpacity={0.1}
        />
        <feDropShadow
          dx={0}
          dy={2}
          stdDeviation={2}
          floodColor="#000000"
          floodOpacity={0.06}
        />
      </filter>
    </defs>
    <g id="logo-icon">
      <rect
        x={0}
        y={1}
        width={40}
        height={40}
        rx={12}
        ry={12}
        fill="url(#brand-gradient)"
        filter="url(#shadow-md)"
      />
      <text
        x={20}
        y={21}
        fill="var(--accent, #f59e0b)"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize={20}
        fontWeight={900}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {"\n      O\n    "}
      </text>
      <circle cx={35} cy={36} r={7} fill="white" />
      <circle cx={35} cy={36} r={5} fill="var(--accent, #f59e0b)" />
    </g>
    <g id="logo-text" transform="translate(52, 0)">
      <text
        x={0}
        y={22}
        fill="var(--secondary, #0f172a)"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize={20}
        fontWeight={700}
        letterSpacing="-0.025em"
      >
        {"\n      Oylen\n    "}
      </text>
      <text
        x={0}
        y={34}
        fill="var(--primary, #0F6B5B)"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize={10}
        fontWeight={600}
        letterSpacing="0.1em"
      >
        {"\n      GROUP\n    "}
      </text>
    </g>
  </svg>
);

export const Logo_Dark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 165 42"
    width={165}
    height={42}
    aria-label="Oylen Group Logo"
  >
    <defs>
      <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--primary, #0F6B5B)" />
        <stop offset="100%" stopColor="var(--secondary, #0f172a)" />
      </linearGradient>
      <filter id="shadow-md" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow
          dx={0}
          dy={4}
          stdDeviation={3}
          floodColor="#000000"
          floodOpacity={0.1}
        />
        <feDropShadow
          dx={0}
          dy={2}
          stdDeviation={2}
          floodColor="#000000"
          floodOpacity={0.06}
        />
      </filter>
    </defs>
    <g id="logo-icon">
      <rect
        x={0}
        y={1}
        width={40}
        height={40}
        rx={12}
        ry={12}
        fill="url(#brand-gradient)"
        filter="url(#shadow-md)"
      />
      <text
        x={20}
        y={21}
        fill="var(--accent, #f59e0b)"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize={20}
        fontWeight={900}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {"\n      O\n    "}
      </text>
      <circle cx={35} cy={36} r={7} fill="white" />
      <circle cx={35} cy={36} r={5} fill="var(--accent, #f59e0b)" />
    </g>
    <g id="logo-text" transform="translate(52, 0)">
      <text
        x={0}
        y={22}
        fill="#ffffff"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize={20}
        fontWeight={700}
        letterSpacing="-0.025em"
      >
        {"\n      Oylen\n    "}
      </text>
      <text
        x={0}
        y={34}
        fill="var(--primary, #0F6B5B)"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize={10}
        fontWeight={600}
        letterSpacing="0.1em"
      >
        {"\n      GROUP\n    "}
      </text>
    </g>
  </svg>
);
