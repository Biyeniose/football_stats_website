export default function DataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex items-center justify-center gap-4 py-8 md:py-10">
      <div className="  justify-center">{children}</div>
    </section>
  );
}
