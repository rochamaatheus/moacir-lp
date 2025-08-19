import { useEffect, useRef, useState } from 'react';
import {
  TrendingUp,
  Users,
  Target,
  Zap,
  BarChart3,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

function useSlidesPerView() {
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const mqMd = window.matchMedia('(min-width: 768px)');
    const mqLg = window.matchMedia('(min-width: 1024px)');

    const compute = () => setPerView(mqLg.matches ? 3 : mqMd.matches ? 2 : 1);
    compute();

    mqMd.addEventListener('change', compute);
    mqLg.addEventListener('change', compute);
    return () => {
      mqMd.removeEventListener('change', compute);
      mqLg.removeEventListener('change', compute);
    };
  }, []);

  return perView;
}

const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const perView = useSlidesPerView();
  const [page, setPage] = useState(0);
  const [canScroll, setCanScroll] = useState(false); // p/ mostrar hint

  const services = [
    {
      icon: TrendingUp,
      title: 'Estruturação de Crédito',
      description:
        'Preparamos e conduzimos toda a captação: dossiê bancário, garantias, rating e negociação para aprovar crédito com o menor custo possível.',
      features: [
        'Mapeamento de linhas (BNDES/privadas)',
        'Preparação de documentos e dossiê',
        'Simulações de prazos e garantias',
        'Negociação com bancos',
      ],
      price: 'A partir de R$ 4.900',
    },
    {
      icon: Target,
      title: 'Consultoria Tributária e Patrimonial',
      description:
        'Planejamento fiscal e proteção de ativos com estrutura societária eficiente para reduzir carga tributária e mitigar riscos.',
      features: [
        'Diagnóstico fiscal completo',
        'Escolha de regime e elisão lícita',
        'Holding patrimonial e acordos',
        'Governança e compliance',
      ],
      price: 'A partir de R$ 7.500',
    },
    {
      icon: Users,
      title: 'Consultoria Comercial',
      description:
        'Organizamos seu funil, playbooks e CRM para aumentar conversão, ticket e previsibilidade de vendas.',
      features: [
        'Desenho do funil e SLAs',
        'Playbook e scripts de vendas',
        'Implantação de CRM',
        'Treinamento do time',
      ],
      price: 'A partir de R$ 6.500',
    },
    {
      icon: BarChart3,
      title: 'Consultoria Financeira',
      description:
        'Gestão de caixa, capital de giro e indicadores para uma operação saudável e escalável.',
      features: [
        'Fluxo de caixa 13 semanas',
        'Orçamento e DRE gerencial',
        'Política de crédito & cobrança',
        'KPIs e painéis de performance',
      ],
      price: 'A partir de R$ 5.500',
    },
    {
      icon: Lightbulb,
      title: 'Consultoria Estratégica',
      description:
        'Planejamento estratégico prático (OKRs, metas, roadmap) com rituais de execução e acompanhamento.',
      features: [
        'Diagnóstico e posicionamento',
        'Definição de OKRs e metas',
        'Roadmap trimestral',
        'Rituais de execução',
      ],
      price: 'A partir de R$ 8.500',
    },
    {
      icon: Zap,
      title: 'Certificado Digital',
      description:
        'Emissão e renovação de certificados A1/A3 com validação, agendamento e suporte de ponta a ponta.',
      features: [
        'Tipos A1 e A3',
        'Renovação assistida',
        'Validação e agendamento',
        'Suporte na instalação',
      ],
      price: 'A partir de R$ 249',
    },
    {
      icon: ChevronRight,
      title: 'Consultas Veiculares',
      description:
        'Histórico completo do veículo para compra segura e sem surpresas.',
      features: [
        'Débitos, multas e restrições',
        'Histórico de leilão e sinistros',
        'Dados cadastrais e gravames',
        'Relatório pronto para decisão',
      ],
      price: 'A partir de R$ 49',
    },
    {
      icon: Target,
      title: 'Consulta de Crédito (Serasa)',
      description:
        'Relatórios de crédito CPF/CNPJ, score e pendências para reduzir inadimplência e aprovar com segurança.',
      features: [
        'Score e pendências detalhadas',
        'Relatório CPF/CNPJ',
        'Monitoramento opcional',
        'Orientação para regularização',
      ],
      price: 'A partir de R$ 39',
    },
  ];

  const pages = Math.max(1, Math.ceil(services.length / perView));
  const clamp = (v: number, min: number, max: number) =>
    Math.min(max, Math.max(min, v));

  // --- Ajuste responsivo de page ao mudar perView
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const newPage = clamp(
      Math.floor(el.scrollLeft / el.clientWidth),
      0,
      pages - 1,
    );
    setPage(newPage);
    el.scrollTo({ left: newPage * el.clientWidth, behavior: 'auto' });
  }, [perView]); // eslint-disable-line

  // --- Atualiza "page" com base no scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const p = clamp(
          Math.round(el.scrollLeft / el.clientWidth),
          0,
          pages - 1,
        );
        setPage(p);
      });
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [pages]);

  // --- Verifica se há rolagem horizontal (p/ hint mobile)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const check = () => setCanScroll(el.scrollWidth > el.clientWidth + 1);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [perView, services.length]);

  const go = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const target = clamp(page + dir, 0, pages - 1);
    setPage(target);
    el.scrollTo({ left: target * el.clientWidth, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // --- Cálculo exato do width por slide compensando o gap
  const GAP_PX = 24; // gap-6 = 1.5rem (24px)
  const gapPerCard = perView > 1 ? (GAP_PX * (perView - 1)) / perView : 0;
  const slideBasis = `calc(100%/${perView} - ${gapPerCard}px)`;

  return (
    <section id="servicos" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-section-title mb-4">
            Serviços Que Vão <span className="text-gradient">Revolucionar</span>{' '}
            Seu Negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções personalizadas e comprovadas para empresas que querem sair
            da zona de conforto e alcançar resultados extraordinários.
          </p>
        </div>

        {/* Slider wrapper com breakout controlado */}
        <div
          className="
            relative
            -mx-4 sm:-mx-6 lg:-mx-10    /* quebra leve do container */
            px-4  sm:px-6  lg:px-10     /* compensa as margens negativas */
          "
          style={{ maxWidth: '1400px', marginInline: 'auto' }} // permite 3 cards 100% visíveis
        >
          {/* Arrows */}
          <button
            onClick={() => go(-1)}
            disabled={page === 0}
            className="
              hidden md:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20
              h-12 w-12 rounded-full bg-white/90 backdrop-blur border border-border shadow-lg
              items-center justify-center transition-all
              hover:shadow-xl hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary
              disabled:opacity-40 disabled:cursor-not-allowed
            "
            aria-label="Anterior"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => go(1)}
            disabled={page === pages - 1}
            className="
              hidden md:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20
              h-12 w-12 rounded-full bg-white/90 backdrop-blur border border-border shadow-lg
              items-center justify-center transition-all
              hover:shadow-xl hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary
              disabled:opacity-40 disabled:cursor-not-allowed
            "
            aria-label="Próximo"
          >
            <ChevronRight size={22} />
          </button>

          {/* Track (scrollport) */}
          <div
            ref={scrollRef}
            className="
              flex gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory
              /* IMPORTANTE: dar respiro vertical pro hover não cortar */
              py-6 -my-6
            "
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'ArrowRight') go(1);
              if (e.key === 'ArrowLeft') go(-1);
            }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="shrink-0 snap-start"
                  style={{ flexBasis: slideBasis }} // width exata por view sem cortar
                >
                  <div
                    className="
                      card-premium p-6 md:p-7 lg:p-8 h-full flex flex-col
                      transition-transform duration-300 relative
                      hover:-translate-y-1.5 hover:shadow-xl
                      will-change-transform
                    "
                  >
                    <div className="service-icon mb-5">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-5 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-medium text-foreground mb-2">
                        O que inclui:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((f, i) => (
                          <li
                            key={i}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto border-t border-border pt-5">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-muted-foreground">
                          Investimento:
                        </span>
                        <span className="font-semibold text-accent">
                          {service.price}
                        </span>
                      </div>
                      <Button
                        onClick={scrollToContact}
                        className="w-full btn-outline-hero"
                      >
                        Solicitar Proposta
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots por página */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;
                  setPage(i);
                  el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' });
                }}
                aria-label={`Ir para página ${i + 1}`}
                className={`
                  h-1.5 rounded-full transition-all
                  ${
                    i === page
                      ? 'bg-primary w-8'
                      : 'bg-muted w-5 hover:bg-primary/60'
                  }
                `}
              />
            ))}
          </div>

          {/* Hint de swipe no mobile (só na primeira página e quando há rolagem) */}
          {canScroll && page === 0 && (
            <div className="md:hidden mt-3 flex justify-center">
              <div
                className="
                  text-xs text-muted-foreground inline-flex items-center gap-1.5 px-3 py-1.5
                  rounded-full bg-background/80 border border-border shadow-sm
                  animate-pulse-slow
                "
              >
                <span>Arraste</span>
                <ChevronRight size={14} className="animate-slide-x" />
              </div>
            </div>
          )}
        </div>

        {/* CTA final */}
        <div className="mt-16 text-center bg-card rounded-2xl p-10 md:p-12 shadow-professional animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Não Encontrou o Que Precisa?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Desenvolvo soluções personalizadas para cada negócio. Vamos
            conversar sobre suas necessidades específicas e criar um plano sob
            medida para sua empresa.
          </p>
          <Button
            onClick={() => {
              const el = document.getElementById('contato');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-hero"
          >
            Solicitar Consultoria Personalizada
          </Button>
        </div>
      </div>

      {/* Utilitários de animação */}
      <style>{`
        @keyframes slideX {
          0% { transform: translateX(0); opacity: 0.6; }
          50% { transform: translateX(4px); opacity: 1; }
          100% { transform: translateX(0); opacity: 0.6; }
        }
        .animate-slide-x { animation: slideX 1.4s ease-in-out infinite; }

        /* Defino um pulse próprio (não dependo do Tailwind) */
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow { animation: pulseSlow 2.4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default ServicesSection;
