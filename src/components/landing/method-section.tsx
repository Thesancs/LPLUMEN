import {
  ClipboardScan,
  Lightbulb,
  Cog,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FadeIn } from "./fade-in";

const methodSteps: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: ClipboardScan,
    title: "1. Diagnóstico Completo",
    description:
      "Iniciamos com uma análise profunda para identificar vulnerabilidades, riscos e pontos fracos em sua infraestrutura digital.",
  },
  {
    icon: Lightbulb,
    title: "2. Estratégia Personalizada",
    description:
      "Com base no diagnóstico, desenhamos um plano de segurança sob medida, alinhado às necessidades e ao orçamento do seu negócio.",
  },
  {
    icon: Cog,
    title: "3. Implementação Robusta",
    description:
      "Nossos especialistas implementam as ferramentas e políticas de segurança mais avançadas do mercado, com o mínimo de interrupção.",
  },
  {
    icon: ShieldCheck,
    title: "4. Monitoramento Contínuo",
    description:
      "A segurança não para. Monitoramos seus sistemas 24/7 para detectar e responder a ameaças em tempo real, garantindo sua tranquilidade.",
  },
];

export function MethodSection() {
  return (
    <section
      id="method"
      className="w-full py-12 md:py-24 lg:py-32 bg-background"
    >
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nosso Método de Implementação
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Um processo transparente e eficaz para garantir que sua empresa
              esteja protegida de ponta a ponta.
            </p>
          </div>
        </FadeIn>
        <div className="relative">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"
            aria-hidden="true"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {methodSteps.map((step, index) => (
              <FadeIn
                key={step.title}
                className={`flex items-start gap-6 ${
                  index % 2 !== 0 ? "md:flex-row-reverse md:text-right" : "md:text-left"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0 ${
                    index % 2 !== 0 ? "md:ml-6" : "md:mr-6"
                  }`}
                >
                  <step.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">{step.title}</h3>
                  <p className="text-muted-foreground mt-2">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
