export default function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="
        relative
        mx-auto
        max-w-6xl
        px-6
        py-24
      "
    >
      {children}
    </section>
  );
}
