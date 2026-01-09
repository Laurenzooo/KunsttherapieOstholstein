import { Layout } from "@/components/layout/Layout";

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

              <div>
                <h2 className="text-xl font-light text-foreground mb-2">
                  2. Verantwortliche Stelle
                </h2>
                <p className="text-sm">
                  Mikela Blanck<br />
                  Friedrichstraße 8c<br />
                  23701 Eutin<br />
                  E-Mail: hallo@kunsttherapie-ostholstein.de<br />
                  Telefon: 0151 74272814
                </p>
              </div>

              <div>
                <h2 className="text-xl font-light text-foreground mb-2">
                  3. Datenerfassung auf dieser Website
                </h2>

                <h3 className="font-light text-foreground mt-4 mb-2">Kontaktformular</h3>
                <p className="text-sm">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                  aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
                  zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
                  gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>

                <h3 className="font-light text-foreground mt-4 mb-2">E-Mail-Kontakt</h3>
                <p className="text-sm">
                  Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus
                  hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
                  Ihres Anliegens bei uns gespeichert und verarbeitet.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-light text-foreground mb-2">
                  4. Ihre Rechte
                </h2>
                <p className="text-sm">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger
                  und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben
                  außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit
                  an uns wenden.
                </p>
                <p className="text-sm mt-2">
                  Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-light text-foreground mb-2">
                  5. Schweigepflicht
                </h2>
                <p className="text-sm">
                  Als Heilpraktikerin für Psychotherapie unterliege ich der gesetzlichen
                  Schweigepflicht gemäß § 203 StGB. Alle Informationen, die Sie mir im Rahmen
                  der therapeutischen Beziehung anvertrauen, werden streng vertraulich behandelt.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-light text-foreground mb-2">
                  6. SSL-Verschlüsselung
                </h2>
                <p className="text-sm">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                  vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung
                  erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://"
                  wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}