export default function GlassCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-lg
        p-8
      "
    >
      {children}
    </div>
  );
}
