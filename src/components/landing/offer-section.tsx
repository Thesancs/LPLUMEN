import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import { FadeIn } from "./fade-in";

export function OfferSection() {
  return (
    <section
      id="offer"
      className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground"
    >
      <FadeIn>
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-headline font-bold tracking-tighter md:text-4xl/tight">
              Oferta Exclusiva por Tempo Limitado
            </h2>
            <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              As primeiras 20 empresas que se inscreverem este mês recebem um
              diagnóstico de segurança completo, <strong>totalmente gratuito</strong>.
              Não perca esta chance!
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="font-bold text-lg rounded-xl px-8 py-6 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
            >
              <Gift className="mr-2 h-6 w-6" />
              Garantir Diagnóstico Gratuito
            </Button>
          </div>
          <p className="text-xs mt-2">Vagas limitadas. A oferta pode expirar sem aviso prévio.</p>
        </div>
      </FadeIn>
    </section>
  );
}
