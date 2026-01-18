export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="marketing-layout">
      <header>
        <h1>Marketing Site</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2026 Marketing Team</p>
      </footer>
    </div>
  );
}   