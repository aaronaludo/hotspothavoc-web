import Image from "next/image";
import Link from "next/link";

export function HomeButton() {
  return (
    <Link className="home-button" href="/">
      Back to home
    </Link>
  );
}

export function StoreBadges() {
  return (
    <div className="store-badges" aria-label="Download options">
      <a
        className="store-badge"
        href="https://apps.apple.com/ph/app/hotspot-havoc/id6766814349"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
      >
        <span className="store-symbol"></span>
        <span>
          <small>Download on the</small>
          App Store
        </span>
      </a>
    </div>
  );
}

export function AppMark({ size = 320 }: { size?: number }) {
  return (
    <Image
      className="app-icon"
      src="/assets/icon.png"
      alt="Hotspot Havoc app icon"
      width={size}
      height={size}
      priority
    />
  );
}

export function LegalPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <main className="legal-shell">
      <HomeButton />
      <article className="legal-content">
        <h1>{title}</h1>
        <p className="legal-subtitle">{subtitle}</p>
        <div className="legal-copy">{children}</div>
      </article>
    </main>
  );
}
