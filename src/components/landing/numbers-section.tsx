import {
  ShieldCheck,
  Zap,
  Award,
  Lock,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "./fade-in";

const metrics: { icon: LucideIcon; value: string; label: string }[] = [
  {
    icon: Award,
    value: "+500",
    label: "Projetos Executados",
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Proteção Ativa",
  },
  {
    icon: Lock,
    value: "Zero",
    label: "Falhas de Segurança",
  },
  {
    icon: Rocket,
    value: "2025",
    label: "Tecnologia de Ponta",
  },
];

export function NumbersSection() {
  return (
    <section
      id="numbers"
      className="w-full py-12 md:py-24 lg:py-32 bg-card"
    >
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
              A Diferença em Números
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
              Nossos resultados falam por si. Veja o impacto que geramos para
              nossos parceiros.
            </p>
          </div>
        </FadeIn>
        <FadeIn className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="flex flex-col items-center justify-center p-6 text-center shadow-lg rounded-2xl transition-transform duration-300 hover:scale-105"
            >
              <CardContent className="p-0 flex flex-col items-center justify-center">
                <metric.icon className="w-12 h-12 mb-4 text-primary" />
                <p className="text-4xl font-bold font-headline">
                  {metric.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {metric.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}