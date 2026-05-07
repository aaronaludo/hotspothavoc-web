import { LegalPage } from "../components";

export const metadata = {
  title: "Privacy Policy | Hotspot Havoc",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="Privacy for local multiplayer, nearby discovery, and support."
    >
      <p>
        Hotspot Havoc is designed to work locally by default. The app does not
        require an account, cloud profile, or remote lobby to create or join
        nearby matches.
      </p>
      <p>
        When you host or join a game, the app may process temporary gameplay
        information such as player name, connection status, input, health, score,
        room settings, and match state. This information is used to run the match
        and is shared only with the host device, nearby peers, or the local LAN
        fallback server needed for that session.
      </p>
      <p>
        The app may request local network, nearby device, Bluetooth, or Wi-Fi
        permissions so devices can discover and connect to each other. Permission
        choices are managed through your device settings.
      </p>
      <p>
        We do not sell your personal information. We do not use advertising
        trackers for third-party targeting, and we do not use gameplay data for
        data brokerage.
      </p>
      <p>
        If you contact support by email or another support channel, we use the
        information you send only to respond, troubleshoot, and support your
        request.
      </p>
      <p>
        If this privacy policy changes, this page will be updated to reflect the
        current version. Continued use of Hotspot Havoc after an update means you
        accept the revised policy. Last updated: May 6, 2026.
      </p>
    </LegalPage>
  );
}
