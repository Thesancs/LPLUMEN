import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { FadeIn } from "./fade-in";

const portfolioItems = [
  {
    category: "Segurança Física Avançada",
    title: "Projeto Estratégico Personalizado",
    description: "Mapeamento completo de vulnerabilidades",
    imageUrl: "https://picsum.photos/seed/strategic-project/600/400",
    imageHint: "blueprint drawing",
  },
  {
    category: "Segurança Física Avançada",
    title: "Sistema de Câmeras Inteligentes",
    description: "Monitoramento IP com análise comportamental",
    imageUrl: "https://picsum.photos/seed/smart-cameras/600/400",
    imageHint: "security camera",
  },
  {
    category: "Segurança Física Avançada",
    title: "Controle de Acesso Biométrico",
    description: "Reconhecimento facial + digital + cartão",
    imageUrl: "https://picsum.photos/seed/biometric-access/600/400",
    imageHint: "fingerprint scan",
  },
  {
    category: "Proteção Digital Corporativa",
    title: "Cyber Security Barriers",
    description: "Firewall físico contra invasões digitais",
    imageUrl: "https://picsum.photos/seed/cyber-security/600/400",
    imageHint: "digital security",
  },
  {
    category: "Infraestrutura Inteligente",
    title: "Rede Estruturada Gigabit",
    description: "Internet de alta performance sem oscilações",
    imageUrl: "https://picsum.photos/seed/structured-network/600/400",
    imageHint: "server room",
  },
  {
    category: "Automação & Energia Inteligente",
    title: "Smart Home/Office",
    description: "Controle total via app móvel",
    imageUrl: "https://picsum.photos/seed/smart-home/600/400",
    imageHint: "smart home app",
  },
];

const categories = [
  "Segurança Física Avançada",
  "Proteção Digital Corporativa",
  "Infraestrutura Inteligente",
  "Automação & Energia Inteligente",
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
              Portfolio Completo de Proteção
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Oferecemos uma gama completa de serviços para garantir uma
              fortaleza digital para sua empresa.
            </p>
          </div>
        </FadeIn>
        <FadeIn className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-headline font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center">
                {category.replace(/&/g, "&amp;")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems
                  .filter((item) => item.category === category)
                  .map((item) => (
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
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
