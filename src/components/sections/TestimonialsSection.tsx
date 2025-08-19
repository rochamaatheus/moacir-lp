import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Juliana Almeida',
      position: 'Diretora Financeira, AgroVale',
      company: 'Setor Agronegócio',
      rating: 5,
      text: 'Conseguimos acessar uma linha de crédito de R$ 5 milhões que estava travada há meses. O Moacir estruturou todo o processo e ainda reduziu nossos custos financeiros em 30%.',
      results: 'R$ 5 milhões em crédito liberado',
    },
    {
      name: 'Roberto Souza',
      position: 'CEO, Construtora Horizonte',
      company: 'Construção Civil',
      rating: 5,
      text: 'Com a consultoria tributária, reduzimos quase 25% da nossa carga de impostos. A economia de mais de R$ 1 milhão no primeiro ano fala por si só.',
      results: 'Economia de R$ 1M em impostos',
    },
    {
      name: 'Fernanda Costa',
      position: 'Fundadora, Rede Belleza',
      company: 'Varejo & Cosméticos',
      rating: 5,
      text: 'A consultoria estratégica mudou nossa visão comercial. Hoje temos uma operação digital robusta e aumentamos em 3x o ticket médio dos nossos clientes.',
      results: 'Ticket médio triplicado',
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-6">
            O Que Nossos <span className="text-gradient">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 200 empresas já transformaram seus negócios conosco. Veja
            alguns depoimentos reais de quem alcançou resultados
            extraordinários.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-testimonial animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="text-accent mb-4" size={32} />

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-accent fill-current"
                    size={16}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Results Highlight */}
              <div className="bg-accent/10 text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium mb-6">
                {testimonial.results}
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.position}
                </div>
                <div className="text-sm text-accent font-medium">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="bg-card rounded-2xl p-12 shadow-professional text-center animate-fade-in">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Resultados Comprovados
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Taxa de Satisfação</div>
            </div>

            <div>
              <div className="text-3xl font-bold text-accent mb-2">300%</div>
              <div className="text-muted-foreground">Aumento Médio</div>
            </div>

            <div>
              <div className="text-3xl font-bold text-accent mb-2">90</div>
              <div className="text-muted-foreground">Dias para Resultados</div>
            </div>

            <div>
              <div className="text-3xl font-bold text-accent mb-2">15</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span>Certificado ICF</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span>MBA pela FGV</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span>15+ Anos de Mercado</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span>Garantia de Resultados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
