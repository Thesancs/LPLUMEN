import { AlertTriangle } from "lucide-react";
import { FadeIn } from "./fade-in";

export function SecurityAlertSection() {
  return (
    <section
      id="alert"
      className="w-full py-12 md:py-24 lg:py-32 bg-card"
    >
      <FadeIn>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-6 rounded-2xl border-2 border-destructive bg-destructive/5 p-8 text-center shadow-lg">
            <AlertTriangle className="h-12 w-12 text-destructive" />
            <div className="space-y-2">
              <h2 className="text-3xl font-headline font-bold text-destructive">
                Alerta de Segurança: Você Está Realmente Seguro?
              </h2>
              <p className="max-w-3xl mx-auto text-foreground md:text-lg">
                Cibercriminosos estão mais sofisticados do que nunca. Uma única
                brecha pode custar a reputação e a saúde financeira do seu
                negócio. A inação não é uma opção.
              </p>
              <p className="font-bold text-lg pt-2">
                95% das violações de cibersegurança são causadas por erro
                humano.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
