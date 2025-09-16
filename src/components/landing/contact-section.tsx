import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { FadeIn } from "./fade-in";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <FadeIn>
        <div className="container px-4 md:px-6 text-center">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Pronto para Elevar sua Segurança?
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Não espere uma crise acontecer. Nossa equipe está pronta para
              fornecer um diagnóstico completo e fortalecer suas defesas
              digitais.
            </p>
            <Button
              size="lg"
              className="font-bold text-lg rounded-xl px-8 py-6 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Phone className="mr-2 h-6 w-6" />
              Falar com Especialista Agora
            </Button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
