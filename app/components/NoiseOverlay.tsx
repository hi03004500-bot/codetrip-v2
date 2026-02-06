export default function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-soft-light"
      style={{
        backgroundImage: `
          repeating-radial-gradient(
            circle at 0 0,
            rgba(255,255,255,0.15) 0,
            rgba(255,255,255,0.15) 1px,
            transparent 1px,
            transparent 2px
          )
        `,
      }}
    />
  );
}
