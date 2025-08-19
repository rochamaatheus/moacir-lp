import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import consultantHero from '@/assets/consultant-hero.png';

const HeroSection = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('sobre');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="absolute inset-0">
        <img
          src="/assets/bg-office.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 mt-6">
                <TrendingUp size={16} />
                <span>Resultados Comprovados</span>
              </div>

              <h1 className="text-hero text-gradient mb-6">
                Transforme Seu Negócio em Uma
                <span className="block">Máquina de Vendas</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Consultoria empresarial personalizada que já ajudou mais de 200
                empresas a aumentarem sua receita em até{' '}
                <strong className="text-accent">300%</strong> em 12 meses.
              </p>

              {/* Key Benefits */}
              <div className="mb-8 space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-success" size={20} />
                  <span className="text-foreground">
                    Estratégias comprovadas no mercado
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-success" size={20} />
                  <span className="text-foreground">
                    Acompanhamento personalizado
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-success" size={20} />
                  <span className="text-foreground">
                    Resultados em 90 dias ou menos
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToContact}
                  className="btn-hero flex items-center space-x-2"
                >
                  <span>Agendar Consulta Gratuita</span>
                  <ArrowRight size={20} />
                </Button>

                <Button onClick={scrollToAbout} className="btn-outline-hero">
                  Conhecer Mais
                </Button>
              </div>

              {/* Social Proof */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl font-bold text-accent">200+</div>
                    <div>Empresas Atendidas</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl font-bold text-accent">15</div>
                    <div>Anos de Experiência</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl font-bold text-accent">98%</div>
                    <div>Clientes Satisfeitos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image - só aparece em telas grandes */}
          <div className="hidden lg:block animate-slide-up h-full">
            <div className="relative w-full h-full">
              {/* IMAGEM: ocupa 100% */}
              <img
                src={consultantHero}
                alt="Moacir - Consultor Empresarial"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Floating Stats Cards */}
              <div className="absolute top-8 -right-4 bg-card rounded-lg p-4 shadow-lg border border-border">
                <div className="text-2xl font-bold text-accent">300%</div>
                <div className="text-sm text-muted-foreground">
                  Aumento médio
                </div>
                <div className="text-sm text-muted-foreground">de receita</div>
              </div>

              <div className="absolute bottom-8 -left-4 bg-card rounded-lg p-4 shadow-lg border border-border">
                <div className="text-2xl font-bold text-primary">90</div>
                <div className="text-sm text-muted-foreground">Dias para</div>
                <div className="text-sm text-muted-foreground">
                  primeiros resultados
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
