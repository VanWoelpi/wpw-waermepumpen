import Layout from "@/components/Layout";

const Impressum = () => {
  return (
      <Layout>
        <section className="section-default">
          <div className="container max-w-3xl space-y-8">
            <h1 className="text-4xl font-bold text-center">Impressum</h1>

            <div className="text-gray-300 space-y-6 leading-relaxed">
              <div>
                <h2 className="text-xl font-semibold text-white">Angaben gemäß § 5 TMG</h2>
                <p>
                  Christian Wölper – Innovative Konzepte für zeitgemäße Energietechnik<br />
                  Von Droste Hülshoff Weg 7<br />
                  30855 Langenhagen
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white">Vertreten durch</h2>
                <p>Geschäftsführender Gesellschafter: Christian Wölper</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white">Kontaktdaten</h2>
                <p>
                  Telefon: <a href="tel:+49511357387511" className="text-green-400 hover:underline">+49 511 357 3875 – 11</a><br />
                  Mobil: <a href="tel:+4915164956976" className="text-green-400 hover:underline">+49 151 64 956 976</a><br />
                  Fax: +49 511 357 3875 – 9<br />
                  E-Mail: <a href="mailto:christian.woelper@gmx.de" className="text-green-400 hover:underline">christian.woelper@gmx.de</a>
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white">Haftung für Inhalte</h2>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                  Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                  allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                  erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                  Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                  entfernen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white">Haftung für Links</h2>
                <p>
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                  der Seiten verantwortlich.
                </p>
                <p>
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                  überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
                <p>
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                  Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                  Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white">Urheberrecht</h2>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                  Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
                <p>
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
                  gestattet.
                </p>
                <p>
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                  Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                  gekennzeichnet. Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                  bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                  werden wir derartige Inhalte umgehend entfernen.
                </p>
                <p>Webdesign: sand</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
  );
};

export default Impressum;
