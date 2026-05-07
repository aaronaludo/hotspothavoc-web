import { LegalPage } from "../components";

export const metadata = {
  title: "Terms of Use | Hotspot Havoc",
};

export default function Terms() {
  return (
    <LegalPage title="Terms" subtitle="Simple terms for using Hotspot Havoc.">
      <p>
        Hotspot Havoc is provided as a local multiplayer arena game for personal
        entertainment. You are responsible for how you use the app, your device,
        your network connection, and the people you choose to play with.
      </p>
      <p>
        The app is designed for nearby play using Apple MultipeerConnectivity or
        a local area network fallback. Creating or joining a room may require
        local network, nearby device, Bluetooth, or Wi-Fi permissions depending
        on your device and platform.
      </p>
      <p>
        Matches are meant to be played fairly. Do not attempt to disrupt other
        players, interfere with local networks, modify the app to gain an unfair
        advantage, or use Hotspot Havoc in a way that violates laws, platform
        rules, or the rights of others.
      </p>
      <p>
        Hotspot Havoc may be distributed through the App Store, Google Play, or
        other platform stores. Purchases, refunds, updates, and cancellations are
        handled by the store or platform where you obtained the app, under that
        platform&apos;s own terms.
      </p>
      <p>
        Gameplay availability depends on compatible devices, local permissions,
        nearby connectivity, and the stability of the host device or fallback
        server. We may change, improve, limit, or discontinue features when needed
        for security, legal, technical, or product reasons.
      </p>
      <p>
        The app is provided on an &quot;as is&quot; basis without guarantees of
        uninterrupted play, compatibility with every device or network
        configuration, or fitness for any particular purpose.
      </p>
      <p>
        These terms may be updated from time to time, and this page will reflect
        the latest version. Last updated: May 6, 2026.
      </p>
    </LegalPage>
  );
}
