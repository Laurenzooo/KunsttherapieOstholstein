import { Layout } from "@/components/layout/Layout";
import { businessInfo } from "@/config/businessInfo";


export default function Datenschutz({ currentPath }: { currentPath?: string }) {
  return (
    <Layout currentPath={currentPath}>
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h1 className="text-4xl md:text-6xl font-light text-foreground mb-8">
              Datenschutzerklärung
            </h1>

            <div className="space-y-8 text-muted-foreground">
              {/* SECTION 1 */}
              <div>
                <h2 className="text-xl font-light text-foreground mb-2">
                  1. Datenschutz auf einen Blick
                </h2>
                <h3 className="font-light text-foreground mt-4 mb-2">Allgemeine Hinweise</h3>
                <p className="text-sm">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>

              {/* SECTION 2 */}
              <div>
                <h2 className="text-xl font-light text-foreground mb-2">
                  2. Verantwortliche Stelle
                </h2>
                <p className="text-sm">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="text-sm mt-2">
                  {businessInfo.name}<br />
                  {businessInfo.address.street}<br />
                  {businessInfo.address.zip} {businessInfo.address.city}<br />
                  E-Mail: {businessInfo.contact.email}<br />
                  Telefon: {businessInfo.contact.phone}
                </p>
                <p className="text-sm mt-4">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
                  gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
                  personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                </p>
              </div>

              {/* SECTION 3 */}
              <div>
                <h2 className="text-xl font-light text-foreground mb-4">
                  3. Allgemeine Hinweise und Pflichtinformationen
                </h2>

                <h3 className="font-light text-foreground mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
                <p className="text-sm mb-4">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                  vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als
                  Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
                  Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://"
                  auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>

                <h3 className="font-light text-foreground mb-2">Schweigepflicht</h3>
                <p className="text-sm mb-4">
                  Als Heilpraktikerin für Psychotherapie unterliege ich der gesetzlichen
                  Schweigepflicht gemäß § 203 StGB. Alle Informationen, die Sie mir im Rahmen
                  einer therapeutischen Zusammenarbeit anvertrauen, werden streng vertraulich behandelt.
                </p>

                <h3 className="font-light text-foreground mb-2">Ihre Rechte (Auskunft, Berichtigung, Löschung)</h3>
                <p className="text-sm">
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht
                  auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
                  Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
                  Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
                  personenbezogene Daten können Sie sich jederzeit an uns wenden.
                </p>
                <p className="text-sm mt-2">
                  Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
              </div>

              {/* SECTION 4 */}
              <div>
                <h2 className="text-xl font-light text-foreground mb-2">
                  4. Hosting und Server-Log-Files
                </h2>
                <h3 className="font-light text-foreground mt-4 mb-2">Externes Hosting (Netcup)</h3>
                <p className="text-sm">
                  Wir hosten unsere Website bei der Netcup GmbH (Daimlerstraße 25, 76185 Karlsruhe).
                  Die Server befinden sich in Deutschland (Nürnberg).
                  Beim Besuch unserer Website erfasst der Hoster automatisch Informationen in so
                  genannten Server-Log-Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse (ggf. in anonymisierter Form)</li>
                </ul>
                <p className="text-sm mt-4">
                  Diese Daten sind technisch notwendig, um Ihnen unsere Website anzuzeigen und die
                  Stabilität und Sicherheit zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </div>

              {/* SECTION 5 */}
              <div>
                <h2 className="text-xl font-light text-foreground mb-2">
                  5. Datenerfassung auf dieser Website
                </h2>

                <h3 className="font-light text-foreground mt-4 mb-2">Technisch notwendige Speicherung (LocalStorage)</h3>
                <p className="text-sm">
                  Diese Website verwendet keine Tracking-Cookies. Wir nutzen jedoch den lokalen Speicher Ihres Browsers (LocalStorage),
                  um technisch notwendige Informationen oder von Ihnen getroffene Einstellungen (wie z. B. die Zustimmung zur Anzeige
                  externer Inhalte) zu speichern. Dies dient der Benutzerfreundlichkeit, damit Sie Ihre Auswahl nicht bei jedem
                  Seitenaufruf erneut treffen müssen. Diese Speicherung erfolgt auf Grundlage unserer berechtigten Interessen
                  gemäß Art. 6 Abs. 1 lit. f DSGVO.
                </p>

                <h3 className="font-light text-foreground mt-4 mb-2">Umami Analytics</h3>
                <p className="text-sm">
                  Wir nutzen zur statistischen Auswertung der Besucherzugriffe das Analyse-Tool
                  "Umami". Umami ist eine datenschutzfreundliche Alternative zu gängigen Tools.
                  <strong>Umami verwendet keine Cookies</strong> und speichert keine personenbezogenen
                  Daten. IP-Adressen werden anonymisiert. Die Analyse dient ausschließlich der
                  Optimierung unserer Website.
                </p>

                <h3 className="font-light text-foreground mt-4 mb-2">Lokal gehostete Schriften</h3>
                <p className="text-sm">
                  Diese Website nutzt zur einheitlichen Darstellung von Schriftarten Web Fonts (Inter).
                  Diese sind <strong>lokal auf unserem Server</strong> bei Netcup installiert. Eine
                  Verbindung zu Servern von Drittanbietern (z.B. Google Fonts) findet nicht statt,
                  sodass keine Daten an externe Schriftanbieter übertragen werden.
                </p>

                <h3 className="font-light text-foreground mt-4 mb-2">Google Maps</h3>
                <p className="text-sm">
                  Wir binden auf einigen Unterseiten Kartenmaterial des Dienstes "Google Maps" ein.
                  Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                  Um den Datenschutz auf unserer Website zu gewährleisten, ist Google Maps deaktiviert, wenn
                  Sie unsere Website das erste Mal betreten. Eine Verbindung zu den Servern von Google wird
                  erst hergestellt, wenn Sie die Karte aktiv per Klick laden (Zwei-Klick-Lösung). In diesem
                  Fall wird Ihre IP-Adresse an Google übertragen.
                </p>

                <h3 className="font-light text-foreground mt-4 mb-2">Kontaktformular und E-Mail</h3>
                <p className="text-sm">
                  Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre
                  Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
                  geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt
                  auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
                  eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                  erforderlich ist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}