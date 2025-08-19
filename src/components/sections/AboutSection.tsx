import { Award, Users, TrendingUp, Target } from 'lucide-react';
import consultantAbout from '@/assets/consultant-about.jpg';

const AboutSection = () => {
  const achievements = [
    {
      icon: Users,
      number: '200+',
      label: 'Empresas Transformadas',
    },
    {
      icon: TrendingUp,
      number: 'R$ 50M+',
      label: 'Em Receita Gerada',
    },
    {
      icon: Award,
      number: '15',
      label: 'Anos de Experiência',
    },
    {
      icon: Target,
      number: '98%',
      label: 'Taxa de Sucesso',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src={consultantAbout}
                alt="Moacir - Sobre o Consultor"
                className="w-full h-auto rounded-2xl shadow-professional"
              />

              {/* Badge: overlay dentro da imagem no mobile; fora no lg+ */}
              <div
                className="
        absolute z-10
        bottom-4 right-4              /* mobile/tablet: dentro da imagem */
        sm:bottom-5 sm:right-5
        lg:-bottom-6 lg:-right-6      /* desktop: “saltando” pra fora */
        bg-accent rounded-2xl shadow-xl p-4 sm:p-5 lg:p-6
      "
              >
                <div className="text-2xl sm:text-3xl font-bold text-accent-foreground">
                  15+
                </div>
                <div className="text-accent-foreground font-medium leading-tight">
                  Anos
                </div>
                <div className="text-accent-foreground/80 text-sm leading-tight">
                  Experiência
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-slide-up">
            <div className="mb-6">
              <h2 className="text-section-title">
                Conheça o Especialista que Vai
                <span className="text-gradient block">
                  Revolucionar Seu Negócio
                </span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Sou Moacir, consultor empresarial especializado em transformação
                de negócios. Ao longo de 15 anos, desenvolvi metodologias
                próprias que já geraram mais de
                <strong className="text-accent">
                  {' '}
                  R$ 50 milhões em receita{' '}
                </strong>
                para meus clientes.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      MBA em Gestão Estratégica
                    </h4>
                    <p className="text-muted-foreground">
                      Formação sólida em estratégia empresarial pela FGV
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Certificação Internacional
                    </h4>
                    <p className="text-muted-foreground">
                      Consultor certificado pela International Coach Federation
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Especialista em Vendas B2B
                    </h4>
                    <p className="text-muted-foreground">
                      Metodologia própria para escalar equipes comerciais
                    </p>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground mb-8">
                "Minha missão é transformar empresas em verdadeiras máquinas de
                vendas, criando sistemas previsíveis e escaláveis de
                crescimento."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="text-center animate-fade-in hover-lift"
              >
                <div className="service-icon mx-auto mb-4">
                  <IconComponent size={24} />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
