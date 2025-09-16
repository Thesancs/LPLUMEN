import { AlertTriangle } from "lucide-react";
import { FadeIn } from "./fade-in";

const stats = [
  "1 empresa é invadida a cada 3 minutos no Brasil",
  "68% dos furtos residenciais acontecem por falha de segurança",
  "Prejuízo médio por invasão: R$ 75.000 (empresas) | R$ 25.000 (residências)",
];

export function SecurityAlertSection() {
  return (
    <section id="alert" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <FadeIn>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-6 rounded-2xl border-2 border-destructive bg-destructive/5 p-8 text-center shadow-lg">
            <AlertTriangle className="h-12 w-12 text-destructive" />
            <div className="space-y-4">
              <h2 className="text-3xl font-headline font-bold text-destructive">
                ALERTA DE SEGURANÇA CRÍTICO
              </h2>
              <p className="font-bold text-lg">
                Estatísticas que você precisa saber:
              </p>
              <ul className="grid gap-2 text-left max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-destructive font-bold mr-2 text-xl">
                      •
                    </span>
                    <span className="text-foreground md:text-lg">{stat}</span>
                  </li>
                ))}
              </ul>
              <p className="font-bold text-xl pt-4">
                Pergunta direta: Quanto isso custaria para você?
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
