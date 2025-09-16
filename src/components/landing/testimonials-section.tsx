import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "./fade-in";

const testimonials = [
  {
    quote:
      "A Lumen transformou nossa abordagem de segurança. A paz de espírito que temos agora não tem preço. A equipe é incrivelmente responsiva e profissional.",
    name: "Ana Clara",
    title: "CEO, InovaTech",
    avatar: "https://picsum.photos/seed/ana/100/100",
  },
  {
    quote:
      "O diagnóstico gratuito foi um divisor de águas. Revelou vulnerabilidades que nem sabíamos que existiam. A implementação foi rápida e sem atritos.",
    name: "Marcos Andrade",
    title: "Diretor de TI, Soluções XYZ",
    avatar: "https://picsum.photos/seed/marcos/100/100",
  },
  {
    quote:
      "Desde que contratamos a Lumen, nosso tempo de inatividade devido a incidentes de segurança foi reduzido a zero. Um parceiro essencial para o nosso crescimento.",
    name: "Juliana Costa",
    title: "Fundadora, E-commerce Rápido",
    avatar: "https://picsum.photos/seed/juliana/100/100",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-50 -z-10"></div>
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Cases de Sucesso
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Veja o que nossos clientes dizem sobre a parceria com a Lumen.
            </p>
          </div>
        </FadeIn>
        <FadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="rounded-2xl shadow-lg p-6 bg-background/60 backdrop-blur-sm border border-white/20 transition-transform duration-300 hover:scale-105"
            >
              <CardContent className="p-0">
                <blockquote className="text-lg mb-4 italic text-foreground">
                  “{testimonial.quote}”
                </blockquote>
                <div className="flex items-center mt-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    data-ai-hint="person portrait"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-bold font-headline">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
