import { CheckCircle, TrendingUp, Clock, Shield, Zap } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Aumento de 300% na Receita',
      description:
        'Metodologia comprovada que já gerou mais de R$ 50 milhões em receita para nossos clientes.',
      stats: 'Média de crescimento em 12 meses',
    },
    {
      icon: Clock,
      title: 'Resultados em 90 Dias',
      description:
        'Implementação rápida e eficiente que gera os primeiros resultados em menos de 3 meses.',
      stats: 'Tempo médio para primeiros resultados',
    },
    {
      icon: Shield,
      title: 'Garantia de Satisfação',
      description:
        'Se não atingir os resultados acordados, você não paga. 98% dos clientes renovam o contrato.',
      stats: 'Taxa de satisfação dos clientes',
    },
    {
      icon: Zap,
      title: 'Acompanhamento Personalizado',
      description:
        'Suporte direto com o consultor, reuniões semanais e ajustes em tempo real na estratégia.',
      stats: 'Atendimento exclusivo e dedicado',
    },
  ];

  const keyFeatures = [
    'Diagnóstico gratuito e detalhado do seu negócio',
    'Plano de ação customizado para seus objetivos',
    'Implementação assistida com nossa metodologia',
    'Treinamento completo da sua equipe',
    'Monitoramento contínuo de resultados',
    'Ajustes estratégicos mensais',
    'Acesso a ferramentas e templates exclusivos',
    'Suporte direto via WhatsApp',
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-6">
            Por Que Escolher{' '}
            <span className="text-gradient">Nossa Consultoria?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 200 empresas já transformaram seus negócios conosco.
            Descubra os benefícios que fazem a diferença.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="flex items-start space-x-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="service-icon flex-shrink-0">
                  <IconComponent size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="inline-block bg-accent/10 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {benefit.stats}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Features */}
        <div className="bg-card rounded-2xl p-12 shadow-professional animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Features List */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                O Que Você Vai Receber:
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle
                      className="text-success flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Highlight */}
            <div className="bg-hero-gradient rounded-2xl p-8 text-center text-primary-foreground">
              <h4 className="text-2xl font-semibold mb-8">
                Resultados Comprovados
              </h4>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold mb-2">200+</div>
                  <div className="text-primary-foreground/80">
                    Empresas Atendidas
                  </div>
                </div>

                <div>
                  <div className="text-4xl font-bold mb-2">R$ 50M+</div>
                  <div className="text-primary-foreground/80">
                    Receita Gerada
                  </div>
                </div>

                <div>
                  <div className="text-4xl font-bold mb-2">300%</div>
                  <div className="text-primary-foreground/80">
                    Aumento Médio
                  </div>
                </div>

                <div>
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-primary-foreground/80">
                    Clientes Satisfeitos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
