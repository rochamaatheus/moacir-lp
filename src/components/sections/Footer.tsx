import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUp,
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">
                    MC
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Moacir</h3>
                  <p className="text-background/70">
                    Consultor Empresarial Especialista
                  </p>
                </div>
              </div>

              <p className="text-background/80 mb-6 leading-relaxed max-w-md">
                Transformando negócios há mais de 15 anos. Especialista em
                estratégias de crescimento que geram resultados reais e
                sustentáveis.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="text-accent" size={18} />
                  <span className="text-background/80">(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-accent" size={18} />
                  <span className="text-background/80">
                    moacir@consultoria.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-accent" size={18} />
                  <span className="text-background/80">
                    São Paulo, SP - Atendimento Nacional
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Navegação</h4>
              <nav className="space-y-3">
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="block text-background/80 hover:text-accent transition-colors"
                >
                  Início
                </button>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="block text-background/80 hover:text-accent transition-colors"
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="block text-background/80 hover:text-accent transition-colors"
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="block text-background/80 hover:text-accent transition-colors"
                >
                  Portfólio
                </button>
                <button
                  onClick={() => scrollToSection('depoimentos')}
                  className="block text-background/80 hover:text-accent transition-colors"
                >
                  Depoimentos
                </button>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="block text-background/80 hover:text-accent transition-colors"
                >
                  Contato
                </button>
              </nav>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Serviços</h4>
              <nav className="space-y-3">
                <div className="text-background/80">
                  Estratégia de Crescimento
                </div>
                <div className="text-background/80">Otimização de Vendas</div>
                <div className="text-background/80">
                  Consultoria Estratégica
                </div>
                <div className="text-background/80">Análise de Performance</div>
                <div className="text-background/80">Automação de Processos</div>
                <div className="text-background/80">Mentoria Executiva</div>
              </nav>
            </div>
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-background/70">Siga-nos:</span>
              <a
                href="https://linkedin.com/in/moacir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-accent transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://instagram.com/moacir.consultor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-accent transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://youtube.com/moacir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-accent transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-background/80 hover:text-accent transition-colors"
            >
              <span>Voltar ao Topo</span>
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-background/60">
              © 2025 Moacir Consultoria. Todos os direitos reservados.
            </div>

            <div className="flex items-center space-x-6 text-background/60">
              <div>Política de Privacidade</div>
              <div>Termos de Uso</div>
              <div>CNPJ: 00.000.000/0001-00</div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-background/60">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Certificado ICF</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>MBA pela FGV</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>15+ Anos de Experiência</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>200+ Empresas Atendidas</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Garantia de Satisfação</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
