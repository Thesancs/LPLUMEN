import Image from "next/image";
import {
  BrainCircuit,
  ShieldEllipsis,
  Users,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "./fade-in";

const differentiators: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: BrainCircuit,
    title: "Tecnologia de Ponta",
    description:
      "Utilizamos IA e as ferramentas mais avançadas para prever e neutralizar ameaças antes que elas aconteçam.",
  },
  {
    icon: Users,
    title: "Especialistas Dedicados",
    description:
      "Nossa equipe é formada por veteranos da cibersegurança, prontos para serem uma extensão do seu time.",
  },
  {
    icon: ShieldEllipsis,
    title: "Soluções Sob Medida",
    description:
      "Não acreditamos em soluções de prateleira. Cada estratégia é única, desenhada para o seu desafio específico.",
  },
];

export function WhyLumenSection() {
  return (
    <section
      id="why-lumen"
      className="w-full py-12 md:py-24 lg:py-32 bg-card"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <FadeIn>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                Nossos Diferenciais
              </div>
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Por Que a Lumen é Diferente?
              </h2>
              <ul className="grid gap-6 mt-6">
                {differentiators.map((item) => (
                  <li key={item.title} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <item.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold font-headline">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn>
            <Image
              src="https://picsum.photos/seed/why-lumen/800/800"
              alt="Equipe de especialistas em segurança analisando dados"
              data-ai-hint="team meeting"
              width={800}
              height={800}
              className="mx-auto aspect-square overflow-hidden rounded-2xl object-cover"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
