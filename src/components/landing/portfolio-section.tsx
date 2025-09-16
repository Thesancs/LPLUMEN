import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FadeIn } from "./fade-in";

const portfolioItems = [
  {
    title: "Pentest & Análise de Vulnerabilidades",
    description:
      "Simulamos ataques para encontrar e corrigir falhas antes que sejam exploradas.",
    imageUrl: "https://picsum.photos/seed/pentest/600/400",
    imageHint: "cyber security",
  },
  {
    title: "Segurança de Redes e Firewalls",
    description: "Configuração e monitoramento de firewalls de última geração.",
    imageUrl: "https://picsum.photos/seed/firewall/600/400",
    imageHint: "network server",
  },
  {
    title: "Proteção de Endpoints (EDR)",
    description: "Defesa avançada para todos os dispositivos conectados à sua rede.",
    imageUrl: "https://picsum.photos/seed/endpoint/600/400",
    imageHint: "computer screen",
  },
  {
    title: "Consultoria LGPD & Compliance",
    description: "Adequamos seu negócio às regulamentações de proteção de dados.",
    imageUrl: "https://picsum.photos/seed/lgpd/600/400",
    imageHint: "legal documents",
  },
  {
    title: "Monitoramento de Segurança 24/7",
    description:
      "Nossa equipe de especialistas vigia seus sistemas ininterruptamente.",
    imageUrl: "https://picsum.photos/seed/monitoring/600/400",
    imageHint: "data dashboard",
  },
  {
    title: "Treinamento de Conscientização",
    description:
      "Capacitamos sua equipe para ser a primeira linha de defesa contra ataques.",
    imageUrl: "https://picsum.photos/seed/training/600/400",
    imageHint: "team presentation",
  },
];

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="w-full py-12 md:py-24 lg:py-32 bg-background"
    >
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nosso Portfólio Completo
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Oferecemos uma gama completa de serviços para garantir uma
              fortaleza digital para sua empresa.
            </p>
          </div>
        </FadeIn>
        <FadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card
              key={item.title}
              className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <CardHeader className="p-0">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  data-ai-hint={item.imageHint}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl mb-2">
                  {item.title}
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
