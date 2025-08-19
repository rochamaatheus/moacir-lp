import { ExternalLink, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import successCase1 from '@/assets/success-case-1.jpg';
import successCase2 from '@/assets/success-case-2.jpg';
import successCase3 from '@/assets/success-case-3.jpg';

const PortfolioSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cases = [
    {
      image: successCase1,
      title: 'Grupo Atlas Transportes',
      sector: 'Consultoria Financeira & Crédito',
      challenge:
        'Empresa de logística com dificuldades em acessar linhas de crédito e fluxo de caixa desorganizado',
      solution:
        'Estruturação completa de crédito e reorganização do planejamento financeiro',
      results: [
        'Conquista de R$ 2,5 milhões em linhas de crédito aprovadas',
        'Redução de 35% no custo com juros bancários',
        'Aumento de 220% na liquidez em 10 meses',
        'Fluxo de caixa positivo já no 3º mês após a reestruturação',
      ],
      timeline: '10 meses',
      investment: 'R$ 30.000',
      roi: '700%',
    },
    {
      image: successCase2,
      title: 'Construtora Horizonte',
      sector: 'Consultoria Tributária & Patrimonial',
      challenge:
        'Alta carga tributária e ausência de estruturação patrimonial para proteção de ativos',
      solution:
        'Consultoria tributária com planejamento fiscal e criação de holding patrimonial',
      results: [
        'Redução de 28% da carga tributária anual',
        'Economia de R$ 1,2 milhão em impostos no primeiro ano',
        'Patrimônio protegido e reorganizado em estrutura societária eficiente',
        'Posicionamento mais sólido frente a investidores',
      ],
      timeline: '12 meses',
      investment: 'R$ 55.000',
      roi: '950%',
    },
    {
      image: successCase3,
      title: 'Rede Belleza Cosméticos',
      sector: 'Consultoria Comercial & Estratégica',
      challenge:
        'Rede de lojas com vendas estagnadas e baixa presença no digital',
      solution:
        'Consultoria estratégica e comercial com foco em omnichannel e expansão digital',
      results: [
        'Crescimento de 400% no faturamento online',
        'Ticket médio aumentou de R$ 120 para R$ 310',
        'LTV dos clientes subiu em 160%',
        'Expansão de 12 para 28 lojas físicas com modelo integrado ao digital',
      ],
      timeline: '8 meses',
      investment: 'R$ 40.000',
      roi: '1100%',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-6">
            Casos de <span className="text-gradient">Sucesso Reais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos projetos que transformaram empresas comuns em
            líderes de mercado. Resultados reais, clientes reais.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="space-y-16">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-slide-up ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-auto rounded-2xl shadow-professional group-hover:shadow-xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-300"></div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              >
                <div className="mb-4">
                  <div className="inline-block bg-accent/10 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {caseStudy.sector}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {caseStudy.title}
                  </h3>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    Desafio:
                  </h4>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    Solução:
                  </h4>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-4">
                    Resultados:
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-start space-x-3"
                      >
                        <TrendingUp
                          className="text-success flex-shrink-0 mt-1"
                          size={16}
                        />
                        <span className="text-muted-foreground text-sm">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-card rounded-lg border border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">
                      {caseStudy.timeline}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Timeline
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">
                      {caseStudy.investment}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Investimento
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">
                      {caseStudy.roi}
                    </div>
                    <div className="text-xs text-muted-foreground">ROI</div>
                  </div>
                </div>

                <Button
                  onClick={scrollToContact}
                  className="btn-outline-hero group"
                >
                  Quero Resultados Assim
                  <ExternalLink
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={16}
                  />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="bg-hero-gradient rounded-2xl p-12 text-center text-primary-foreground">
            <h3 className="text-3xl font-semibold mb-4">
              Pronto Para Ser o Próximo Caso de Sucesso?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Agende uma consulta gratuita e descubra como podemos transformar
              seu negócio também.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Agendar Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
