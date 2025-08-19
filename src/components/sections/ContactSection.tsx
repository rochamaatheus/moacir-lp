import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    revenue: '',
    service: '',
    challenge: '',
    message: '',
    consent: false,
    // honeypot
    website: '',
  });

  const validateEmail = (v: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const normalizePhone = (v: string) => v.replace(/[^\d]/g, '').slice(0, 13); // BR até 13 dígitos c/ DDI

  const validatePhone = (v: string) => {
    const n = normalizePhone(v);
    // aceita: 10-13 dígitos (ex: 55119..., 1199..., 4999...)
    return n.length >= 10 && n.length <= 13;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot anti-bot
    if (formData.website) return;

    // Validations
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Por favor, preencha Nome, E-mail, Telefone e Mensagem.',
        variant: 'destructive',
      });
      return;
    }
    if (!validateEmail(formData.email)) {
      toast({
        title: 'E-mail inválido',
        description: 'Informe um e-mail válido.',
        variant: 'destructive',
      });
      return;
    }
    if (!validatePhone(formData.phone)) {
      toast({
        title: 'Telefone inválido',
        description: 'Informe um telefone/WhatsApp válido (com DDD).',
        variant: 'destructive',
      });
      return;
    }
    if (!formData.consent) {
      toast({
        title: 'Consentimento necessário',
        description:
          'Você precisa aceitar o tratamento de dados para continuar.',
        variant: 'destructive',
      });
      return;
    }

    // Simula envio
    // Aqui você pode integrar com seu backend (fetch/axios) ou serviço de automação
    // console.log('payload', formData);

    toast({
      title: 'Mensagem enviada!',
      description: 'Retornaremos em até 24 horas úteis. Obrigado!',
      variant: 'default',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      revenue: '',
      service: '',
      challenge: '',
      message: '',
      consent: false,
      website: '',
    });
  };

  const buildWhatsappText = () => {
    const lines = [
      'Olá! Gostaria de uma consulta.',
      `Nome: ${formData.name || '-'}`,
      `Empresa: ${formData.company || '-'}`,
      `E-mail: ${formData.email || '-'}`,
      `Telefone: ${formData.phone || '-'}`,
      `Faturamento: ${formData.revenue || '-'}`,
      `Serviço de interesse: ${formData.service || '-'}`,
      `Desafio principal: ${formData.challenge || '-'}`,
      '',
      `Mensagem: ${formData.message || '-'}`,
    ];
    return encodeURIComponent(lines.join('\n'));
  };

  // Substitua pelo seu número real (com DDI), ex: 5511999999999
  const WHATS_NUMBER = '5511999999999';

  return (
    <section id="contato" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-6">
            Vamos <span className="text-gradient">destravar crédito</span>,
            reduzir <span className="text-gradient">impostos</span> e organizar
            suas <span className="text-gradient">finanças</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Agende uma consulta gratuita e entenda como atuar em{' '}
            <strong>estruturação de crédito</strong>,{' '}
            <strong>consultoria tributária & patrimonial</strong>,{' '}
            <strong>financeira</strong>, <strong>comercial</strong> e{' '}
            <strong>estratégica</strong> — além de serviços rápidos como{' '}
            <strong>certificado digital</strong>,{' '}
            <strong>consultas veiculares</strong> e{' '}
            <strong>consulta de crédito (Serasa)</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-up">
            <div className="card-premium p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Solicite sua consulta gratuita
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={e =>
                        setFormData(s => ({ ...s, name: e.target.value }))
                      }
                      className="form-input"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={e =>
                        setFormData(s => ({ ...s, email: e.target.value }))
                      }
                      className="form-input"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e =>
                        setFormData(s => ({ ...s, phone: e.target.value }))
                      }
                      className="form-input"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <Input
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={e =>
                        setFormData(s => ({ ...s, company: e.target.value }))
                      }
                      className="form-input"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Faturamento Mensal
                    </label>
                    <select
                      name="revenue"
                      value={formData.revenue}
                      onChange={e =>
                        setFormData(s => ({ ...s, revenue: e.target.value }))
                      }
                      className="form-input"
                    >
                      <option value="">Selecione</option>
                      <option value="0-50k">Até R$ 50k</option>
                      <option value="50k-100k">R$ 50k - R$ 100k</option>
                      <option value="100k-500k">R$ 100k - R$ 500k</option>
                      <option value="500k-1m">R$ 500k - R$ 1M</option>
                      <option value="1m+">Acima de R$ 1M</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Serviço de Interesse
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={e =>
                        setFormData(s => ({ ...s, service: e.target.value }))
                      }
                      className="form-input"
                    >
                      <option value="">Selecione</option>
                      <option value="Estruturação de Crédito">
                        Estruturação de Crédito
                      </option>
                      <option value="Consultoria Tributária e Patrimonial">
                        Consultoria Tributária e Patrimonial
                      </option>
                      <option value="Consultoria Comercial">
                        Consultoria Comercial
                      </option>
                      <option value="Consultoria Financeira">
                        Consultoria Financeira
                      </option>
                      <option value="Consultoria Estratégica">
                        Consultoria Estratégica
                      </option>
                      <option value="Certificado Digital">
                        Certificado Digital
                      </option>
                      <option value="Consultas Veiculares">
                        Consultas Veiculares
                      </option>
                      <option value="Consulta de Crédito (Serasa)">
                        Consulta de Crédito (Serasa)
                      </option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Principal Desafio
                  </label>
                  <select
                    name="challenge"
                    value={formData.challenge}
                    onChange={e =>
                      setFormData(s => ({ ...s, challenge: e.target.value }))
                    }
                    className="form-input"
                  >
                    <option value="">Selecione</option>
                    <option value="Aprove crédito com melhor taxa">
                      Aprovar crédito com melhor taxa
                    </option>
                    <option value="Reduzir carga tributária">
                      Reduzir carga tributária
                    </option>
                    <option value="Proteger patrimônio/holding">
                      Proteger patrimônio / estruturar holding
                    </option>
                    <option value="Organizar finanças e caixa">
                      Organizar finanças e caixa
                    </option>
                    <option value="Aumentar vendas e conversão">
                      Aumentar vendas e conversão
                    </option>
                    <option value="Definir estratégia e metas">
                      Definir estratégia e metas
                    </option>
                    <option value="Emitir/renovar certificado digital">
                      Emitir/renovar certificado digital
                    </option>
                    <option value="Realizar consultas veiculares">
                      Realizar consultas veiculares
                    </option>
                    <option value="Consultar crédito (Serasa)">
                      Consultar crédito (Serasa)
                    </option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Conte mais sobre seu negócio e objetivos *
                  </label>
                  <Textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={e =>
                      setFormData(s => ({ ...s, message: e.target.value }))
                    }
                    className="form-input min-h-[120px]"
                    placeholder="Descreva brevemente sua empresa, principais desafios e o que espera alcançar..."
                  />
                </div>

                {/* Consent + Honeypot */}
                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={e =>
                      setFormData(s => ({ ...s, consent: e.target.checked }))
                    }
                    className="mt-1"
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm text-muted-foreground"
                  >
                    Autorizo o tratamento dos meus dados para contato sobre os
                    serviços contratados, conforme a LGPD.
                  </label>
                </div>
                <div className="hidden">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={e =>
                      setFormData(s => ({ ...s, website: e.target.value }))
                    }
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-hero w-full flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Solicitar Consulta Gratuita</span>
                </Button>
              </form>

              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-accent-foreground text-center">
                  <strong>Garantimos:</strong> contato em até 24h úteis •
                  Consulta 100% gratuita • Sem compromisso
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="animate-fade-in">
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="card-premium p-6">
                <h4 className="font-semibold text-foreground mb-6">
                  Contato Direto
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone
                      className="text-primary flex-shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <div className="font-medium text-foreground">
                        Telefone
                      </div>
                      <div className="text-muted-foreground">
                        (11) 99999-9999
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail
                      className="text-primary flex-shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <div className="font-medium text-foreground">E-mail</div>
                      <div className="text-muted-foreground">
                        moacir@consultoria.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin
                      className="text-primary flex-shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <div className="font-medium text-foreground">
                        Localização
                      </div>
                      <div className="text-muted-foreground">São Paulo, SP</div>
                      <div className="text-sm text-muted-foreground">
                        Atendimento nacional
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock
                      className="text-primary flex-shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <div className="font-medium text-foreground">Horário</div>
                      <div className="text-muted-foreground">
                        Seg - Sex: 8h às 18h
                      </div>
                      <div className="text-muted-foreground">WhatsApp 24h</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <ShieldCheck
                      className="text-primary flex-shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <div className="font-medium text-foreground">LGPD</div>
                      <div className="text-muted-foreground">
                        Seus dados são utilizados apenas para contato e
                        proposta.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="card-premium p-6 bg-success/5 border-success/20">
                <div className="text-center">
                  <MessageCircle
                    className="text-success mx-auto mb-4"
                    size={32}
                  />
                  <h4 className="font-semibold text-foreground mb-2">
                    Fale no WhatsApp
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Resposta imediata para dúvidas rápidas
                  </p>
                  <Button
                    onClick={() =>
                      window.open(
                        `https://wa.me/${WHATS_NUMBER}?text=${buildWhatsappText()}`,
                        '_blank',
                      )
                    }
                    className="w-full bg-success text-success-foreground hover:bg-success/90"
                  >
                    Conversar no WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
