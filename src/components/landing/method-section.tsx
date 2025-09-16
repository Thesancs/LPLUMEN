import {
  ClipboardIcon,
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
    icon: ClipboardIcon,
    title: "FASE 1: DIAGNÓSTICO GRATUITO",
    description:
      "Visita técnica completa com mapeamento 3D de vulnerabilidades e relatório detalhado.",
  },
  {
    icon: Lightbulb,
    title: "FASE 2: PROJETO PERSONALIZADO",
    description:
      "Desenvolvimento de solução única baseada em suas necessidades específicas e orçamento.",
  },
  {
    icon: Cog,
    title: "FASE 3: INSTALAÇÃO PROFISSIONAL",
    description:
      "Execução certificada com testes rigorosos e treinamento da equipe.",
  },
  {
    icon: ShieldCheck,
    title: "FASE 4: MONITORAMENTO ATIVO",
    description:
      "Acompanhamento contínuo com relatórios mensais e manutenções preventivas.",
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
              Método Lumen de Implementação
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
