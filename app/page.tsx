import Link from "next/link";
import { AppMark, StoreBadges } from "./components";

export default function Home() {
  return (
    <main className="home-shell">
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-art">
          <AppMark />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Hotspot Havoc - Local Arena</p>
          <h1 id="home-title">Nearby Battle App</h1>
          <p className="description">
            Create a room, find nearby players, and battle over local network or
            hotspot connections. No account, no cloud lobby, just fast arena chaos
            with the people around you.
          </p>
          <StoreBadges />
          <nav className="hero-links" aria-label="Site links">
            <Link href="/terms">Terms of Use</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </nav>
        </div>
      </section>
    </main>
  );
}
