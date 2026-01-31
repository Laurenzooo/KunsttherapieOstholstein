import { Layout } from "@/components/layout/Layout";
import { businessInfo } from "@/config/businessInfo";


export default function Impressum({ currentPath }: { currentPath?: string }) {
  return (
    <Layout currentPath={currentPath}>
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h1 className="text-4xl md:text-6xl font-light text-foreground mb-8">
              Impressum
            </h1>

            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-xl font-light text-foreground mb-2">
                  Angaben gemäß § 5 TMG
                </h2>
                <p>
                  {businessInfo.name}<br />
                  {businessInfo.address.street}<br />
                  {businessInfo.address.zip} {businessInfo.address.city}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-light text-foreground mb-2">
                  Kontakt
                </h2>
                <p>
                  Telefon: {businessInfo.contact.phone}<br />
                  E-Mail: {businessInfo.contact.email}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-light text-foreground mb-2">
                  Berufsbezeichnung
                </h2>
                <p>
                  Heilpraktikerin beschränkt auf das Gebiet der Psychotherapie<br />
                  Zuständige Behörde: Gesundheitsamt Kreis Ostholstein
                </p>
              </div>

              <div>
                <h2 className="text-xl font-light text-foreground mb-2">
                  Berufsrechtliche Regelungen
                </h2>
                <p>
                  Heilpraktikergesetz (HPG)<br />
                  Erste Durchführungsverordnung zum Heilpraktikergesetz (1. DVO-HPG)
                </p>
              </div>

              <div>
                <h2 className="text-xl font-light text-foreground mb-2">
                  Haftungsausschluss
                </h2>
                <h3 className="font-light text-foreground mt-4 mb-2">Haftung für Inhalte</h3>
                <p className="text-sm">
                  Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
                  Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin
                  ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
                  fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                  rechtswidrige Tätigkeit hinweisen.
                </p>

                <h3 className="font-light text-foreground mt-4 mb-2">Haftung für Links</h3>
                <p className="text-sm">
                  Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich
                  keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine
                  Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich.
                </p>

                <h3 className="font-light text-foreground mt-4 mb-2">Urheberrecht</h3>
                <p className="text-sm">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                  unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                  Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                  bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}