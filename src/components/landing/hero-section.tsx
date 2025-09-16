import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./fade-in";

export function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/lumen-hero/1920/1080"
          alt="Tecnologia de segurança digital abstrata"
          data-ai-hint="abstract technology"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-white">
        <FadeIn noVertical>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4">
            Transforme sua Segurança Digital com a Lumen
          </h1>
          <p className="font-body text-lg md:text-xl max-w-3xl mx-auto mb-8 text-neutral-200">
            Protegemos seu negócio contra as ameaças do futuro, hoje. Análise de
            vulnerabilidade e implementação de defesas de ponta.
          </p>
          <a href="#offer">
            <Button
              size="lg"
              className="font-bold text-lg rounded-xl px-8 py-6 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
            >
              Garantir minha vaga - Diagnóstico Gratuito
            </Button>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
