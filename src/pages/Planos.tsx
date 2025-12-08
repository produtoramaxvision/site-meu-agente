import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Check, X, Calculator, ArrowRight, Sparkles, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import NumberFlow from "@number-flow/react";
import confetti from "canvas-confetti";
import SEO from "@/components/SEO";
import { createSoftwareApplicationSchema } from "@/lib/seo";
import { useSubscription } from "@/hooks/use-subscription";
import { cn } from "@/lib/utils";

const Planos = () => {
  const { handleSubscribe, loading } = useSubscription();
  const [hoursPerMonth, setHoursPerMonth] = useState(40);
  const [costPerHour, setCostPerHour] = useState(50);
  const [leadsLost, setLeadsLost] = useState(10);
  
  // Estado para controlar o plano selecionado no Hero
  const [heroPlanId, setHeroPlanId] = useState("lite");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const billingSwitchRef = useRef<HTMLButtonElement | null>(null);

  const handleBillingToggle = (checked: boolean) => {
    setBillingCycle(checked ? "annual" : "monthly");
    if (checked && billingSwitchRef.current) {
      const rect = billingSwitchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x: x / window.innerWidth, y: y / window.innerHeight },
        colors: ["hsl(var(--accent))", "hsl(var(--primary))", "hsl(var(--muted))"],
        ticks: 160,
        gravity: 1.05,
        decay: 0.92,
        startVelocity: 28,
        shapes: ["circle"],
      });
    }
  };

  const formatBRL = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });

  const calculateROI = () => {
    const timeSavings = hoursPerMonth * costPerHour;
    const leadRecovery = leadsLost * 200; // Assuming R$200 per lead
    const totalSavings = timeSavings + leadRecovery;
    return {
      timeSavings,
      leadRecovery,
      totalSavings,
      basicROI: ((totalSavings - 497) / 497 * 100).toFixed(0),
      businessROI: ((totalSavings - 997) / 997 * 100).toFixed(0),
    };
  };

  const roi = calculateROI();

  const PlanFeature = ({ feature }: { feature: { text: string; included: boolean } }) => (
    <li className="flex items-start gap-3">
      {feature.included ? (
        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
      ) : (
        <X className="w-5 h-5 text-text-muted flex-shrink-0 mt-0.5" />
      )}
      <span className={`text-sm ${feature.included ? "text-text" : "text-text-muted"}`}>{feature.text}</span>
    </li>
  );

  const plans = [
    {
      id: "free",
      name: "Free",
      priceMonthly: 0,
      priceAnnual: 0,
      period: "gratuito",
      description: "Explore no app e Chat IA, sem automação externa",
      badge: null,
      features: [
        { text: "Acesso ao app em nuvem + Chat IA", included: true },
        { text: "Agente Financeiro (manual no app)", included: true },
        { text: "Agente Web Search básico (manual/Chat IA)", included: true },
        { text: "Agente de Scrape básico (manual/Chat IA)", included: true },
        { text: "Automação fora do app", included: false },
        { text: "Uso via WhatsApp (áudio/foto)", included: false },
        { text: "Agente de Agendamento", included: false },
        { text: "Exportação CSV/PDF", included: false },
        { text: "Número de WhatsApp próprio", included: false },
        { text: "Suporte prioritário", included: false },
        { text: "Sub-agentes Business/Premium", included: false },
      ],
      cta: "Começar Agora",
      popular: false,
    },
    {
      id: "lite",
      name: "Lite",
      priceMonthly: 97.9,
      priceAnnual: 1076.9,
      period: "/mês",
      description: "Tudo do Free + WhatsApp para finanças e agenda",
      badge: "MAIS POPULAR",
      features: [
        { text: "Tudo do Free (websearch/scrape básicos manual/Chat IA)", included: true },
        { text: "Agente Financeiro no WhatsApp (áudio/foto de comprovantes)", included: true },
        { text: "Agente de Agendamento no WhatsApp (áudio/foto)", included: true },
        { text: "Respostas 24/7 via canal WhatsApp compartilhado", included: true },
        { text: "Exportação CSV/PDF", included: false },
        { text: "Automação fora do app (além do WhatsApp Lite)", included: false },
        { text: "Número de WhatsApp próprio", included: false },
        { text: "Suporte prioritário", included: false },
        { text: "Sub-agentes Business/Premium", included: false },
      ],
      cta: "Contratar Lite",
      popular: true,
    },
    {
      id: "basic",
      name: "Básico",
      priceMonthly: 497,
      priceAnnual: 5467,
      period: "/mês",
      description: "Automação completa via WhatsApp, com exportações",
      badge: null,
      features: [
        { text: "Tudo do Lite + automações via WhatsApp", included: true },
        { text: "Exportação CSV/PDF", included: true },
        { text: "Agente Web Search intermediário", included: true },
        { text: "Agente Scrape intermediário", included: true },
        { text: "Infraestrutura em nuvem Meu Agente", included: true },
        { text: "Agente Agendamento (Calendar/Drive/Tasks)", included: true },
        { text: "Número de WhatsApp próprio", included: false },
        { text: "Implantação inclusa", included: false },
        { text: "Suporte prioritário", included: false },
        { text: "Sub-agentes Business", included: false },
        { text: "Backups automáticos", included: false },
      ],
      cta: "Contratar Básico",
      popular: false,
    },
    {
      id: "business",
      name: "Business",
      priceMonthly: 997,
      priceAnnual: 10967,
      period: "/mês",
      description: "Para empresas em crescimento",
      badge: "MELHOR VALOR",
      features: [
        { text: "Tudo do Básico +", included: true },
        { text: "Número de WhatsApp próprio", included: true },
        { text: "Implantação inclusa", included: true },
        { text: "Suporte prioritário 24/7 (SLA 2h)", included: true },
        { text: "Agente SDR (qualificação + agendamento)", included: true },
        { text: "Agente Marketing (Google Ads)", included: true },
        { text: "Agente Dev (debugging + sugestões)", included: true },
        { text: "Agente Vídeo (Veo 3)", included: true },
        { text: "Integrações Google (opcional, custo adicional)", included: true },
        { text: "Treinamento da IA e Manutenção R$ 149,00/hr, somente quando solicitado", included: true },
      ],
      cta: "Contratar Business",
      popular: false,
    },
    {
      id: "premium",
      name: "Premium",
      priceMonthly: 1497,
      priceAnnual: 16467,
      period: "/mês",
      description: "Tudo do Business + recursos exclusivos",
      badge: null,
      features: [
        { text: "Tudo do Business +", included: true },
        { text: "Agente de Confirmação (diário)", included: true },
        { text: "Agente de Resumo de Grupos", included: true },
        { text: "Agente de Remarketing", included: true },
        { text: "Agente de Follow-up", included: true },
        { text: "Pesquisa/extração avançada", included: true },
        { text: "Backups diários off-site (3-2-1)", included: true },
        { text: "Cota maior Vídeo (Veo 3)", included: true },
        { text: "Prioridade máxima no suporte", included: true },
        { text: "Análises mensais personalizadas", included: true },
        { text: "Treinamento da IA e Manutenção R$ 149,00/hr, somente quando solicitado", included: true },
      ],
      cta: "Contratar Premium",
      popular: false,
    },
  ];

  // Plano ativo no Hero
  const heroPlan = plans.find((plan) => plan.id === heroPlanId) ?? plans[0];
  const heroPlanMissingAdvancedCount = heroPlan.features.filter((feature) => !feature.included).length;
  const heroPriceValue = billingCycle === "monthly" ? heroPlan.priceMonthly : heroPlan.priceAnnual;
  const heroPriceLabel = formatBRL(heroPriceValue ?? 0);

  const onPlanClick = (planId: string) => {
    if (planId === "free") {
      window.open("https://app.meuagente.api.br/?plan=free", "_blank");
    } else {
      handleSubscribe(planId, billingCycle);
    }
  };

  return (
    <>
      <SEO
        title="Planos e Preços – Meu Agente | A partir de R$ 97,90/mês"
        description="Escolha o plano ideal: Free (gratuito, sem automação externa), Lite (R$ 97,90/mês com WhatsApp para finanças/agenda), Básico (R$ 497/mês), Business (R$ 997/mês) ou Premium (R$ 1.497/mês). Compare recursos, calcule ROI e contrate online."
        keywords={[
          "planos meu agente",
          "preços automação whatsapp",
          "plano lite meu agente",
          "agente financeiro whatsapp",
          "quanto custa agente ia",
          "sdr virtual preço",
          "whatsapp business preço",
        ]}
        canonicalUrl="/planos"
        structuredData={createSoftwareApplicationSchema()}
      />
      <div className="min-h-screen bg-background">
        {/* Hero section */}
        <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-hero">
          <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800b_1px,transparent_1px),linear-gradient(to_bottom,#8080800b_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-soft-light">
            <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-text/5 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-text/5 blur-3xl" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] items-center lg:items-stretch">
              <div className="flex flex-col gap-8 lg:h-full lg:justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/70 px-3 py-1 text-xs font-medium text-text-muted mb-4">
                  <Sparkles className="h-3 w-3 icon-accent" />
                  <span>Planos pensados para operação em escala</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gradient mb-6 pb-2 leading-normal">
                  Planos e preços que acompanham o crescimento do seu negócio
                </h1>
                <p className="text-lg sm:text-xl text-text-muted max-w-xl">
                  Compare recursos, calcule o ROI em tempo real e escolha o plano ideal para automatizar sua operação no WhatsApp com agentes de IA.
                </p>
                <div className="grid gap-4 sm:grid-cols-3 max-w-xl text-sm">
                  <div className="rounded-xl border border-border/60 bg-background/70 px-4 py-3 shadow-adaptive hover:shadow-none transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                    <p className="font-semibold text-text mb-1">Sem fidelidade</p>
                    <p className="text-text-muted">Planos mensais com possibilidade de upgrade a qualquer momento.</p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-background/70 px-4 py-3 shadow-adaptive hover:shadow-none transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                    <p className="font-semibold text-text mb-1">Onboarding guiado</p>
                    <p className="text-text-muted">Implantação assistida nos planos Business e Premium.</p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-background/70 px-4 py-3 shadow-adaptive hover:shadow-none transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                    <p className="font-semibold text-text mb-1">Foco em resultado</p>
                    <p className="text-text-muted">Agentes pensados para recuperar leads e aumentar receita.</p>
                  </div>
                </div>
              </div>

              <div className="relative mt-12 lg:mt-0">
                {/* Toggle Flutuante Centralizado no Topo do Card */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <div className="inline-flex items-center gap-3 rounded-full border border-border/60 bg-background px-4 py-1.5 shadow-lg backdrop-blur-xl text-xs sm:text-sm whitespace-nowrap">
                    <span className={cn("font-semibold", billingCycle === "monthly" ? "text-text" : "text-text-muted")}>
                      Mensal
                    </span>
                    <Switch
                      ref={billingSwitchRef as any}
                      checked={billingCycle === "annual"}
                      onCheckedChange={handleBillingToggle}
                      aria-label="Alternar faturamento anual"
                      className="data-[state=checked]:bg-primary"
                    />
                    <div className="flex items-center gap-1">
                      <span className={cn("font-semibold", billingCycle === "annual" ? "text-text" : "text-text-muted")}>
                        Anual
                      </span>
                      <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full leading-none border border-primary/20">
                        1 mês grátis
                      </span>
                    </div>
                  </div>
                </div>

                <Card className="relative overflow-hidden border-border bg-background/80 backdrop-blur-xl p-8 shadow-2xl-adaptive transition-all duration-300">
                  <div className="absolute inset-x-0 -top-32 h-40 bg-gradient-to-b from-text/10 via-text/3 to-transparent pointer-events-none" />
                  
                  <div className="relative flex flex-col gap-6 pt-6">
                    {/* Seletor de Planos */}
                    <div className="flex justify-center mb-4">
                      <div className="flex p-1 bg-surface/50 rounded-full border border-border/50 backdrop-blur-md">
                        {plans.map((plan) => (
                          <button
                            key={plan.id}
                            onClick={() => setHeroPlanId(plan.id)}
                            className={cn(
                              "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                              heroPlanId === plan.id
                                ? "btn-toggle-active"
                                : "text-text-muted hover:text-text hover:bg-surface-2"
                            )}
                          >
                            {plan.name}
                          </button>
                        ))}
                      </div>
                    </div>

                  {/* Header Estável - Altura mínima controlada */}
                  <div className="flex flex-col gap-2 min-h-[88px]">
                    <div className="flex items-start justify-between gap-3 relative">
                      <div className="flex flex-col gap-1 w-full">
                        {/* Label Recomendado - segue badge do plano */}
                        {heroPlan.badge && (
                          <span className="absolute -top-6 left-0 text-[10px] font-bold uppercase tracking-wider badge-highlight px-2 py-0.5 rounded-sm backdrop-blur-sm border animate-in fade-in slide-in-from-bottom-2">
                            {heroPlan.badge}
                          </span>
                        )}
                        
                        {/* Título com margem superior fixa para acomodar o label em todos os casos (ou manter alinhado se absolute) */}
                        <div className="flex items-center justify-between w-full mt-2">
                          <h2 className="text-2xl font-bold text-text transition-all">{heroPlan.name}</h2>
                          
                          {/* Badge flutuante à direita */}
                          <div className="h-6 flex items-center">
                            {heroPlan.badge && (
                              <Badge className="btn-primary-gradient px-4 py-1 font-bold shadow-sm animate-in zoom-in-95 whitespace-nowrap">
                                {heroPlan.badge}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-text-muted max-w-xs h-10 line-clamp-2 leading-relaxed">
                      {heroPlan.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2 min-h-[56px]">
                    <span className="text-4xl font-extrabold text-text tabular-nums tracking-tight flex items-center gap-1">
                      {heroPlan.id === "free" ? (
                        heroPriceLabel
                      ) : (
                        <>
                          <span className="text-xl">R$</span>
                          <NumberFlow
                            value={heroPriceValue ?? 0}
                            format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
                            prefix=""
                            className="text-4xl font-extrabold tracking-tight"
                          />
                        </>
                      )}
                    </span>
                    <span className="text-text-muted">
                      {heroPlan.id !== "free" ? (billingCycle === "monthly" ? "/mês" : "/ano") : ""}
                    </span>
                  </div>

                  <ul className="space-y-2 text-sm min-h-[200px]">
                    {heroPlan.features.slice(0, 7).map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-text animate-in fade-in slide-in-from-bottom-1 duration-300"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {feature.included ? (
                          <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-4 w-4 text-text-muted/50 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={cn("leading-tight", feature.included ? "text-text" : "text-text-muted")}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                    <li className="text-xs text-text-muted pt-1 h-5 flex items-center">
                      {heroPlan.id === "premium" ? (
                        <span>
                          Total de <strong>{heroPlan.features.length}</strong> recursos avançados incluídos.
                        </span>
                      ) : (
                        <span>
                          Este plano deixa de fora{" "}
                          <strong>{heroPlanMissingAdvancedCount}</strong> recursos avançados disponíveis nos planos superiores.
                        </span>
                      )}
                    </li>
                  </ul>

                  <div className="min-h-[48px] flex items-center">
                    <Button
                      className={cn(
                        "w-full group relative overflow-hidden btn-primary-gradient shadow-xl-adaptive hover:shadow-2xl-adaptive",
                        heroPlan.popular ? "" : ""
                      )}
                      onClick={() => onPlanClick(heroPlan.id)}
                      disabled={loading}
                    >
                      {loading ? (
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      ) : null}
                      {heroPlan.cta}
                      {heroPlan.popular && (
                        <>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                        </>
                      )}
                    </Button>
                  </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & comparison */}
        <section className="py-20 sm:py-24 bg-gradient-to-b from-background via-surface/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-10">
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 mb-3 rounded-full border border-border/50 bg-background/70 px-3 py-1 text-xs font-medium text-text-muted"
              >
                <Sparkles className="h-3 w-3 icon-accent" />
                <span>Planos Meu Agente</span>
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3">
                Compare planos por valor, recurso e momento do negócio
              </h2>
              <p className="text-text-muted max-w-2xl">
                Entenda rapidamente o que cada plano oferece, de forma visual e responsiva, inspirado em práticos
                comparativos de SaaS modernos.
              </p>
            </div>

            <Tabs defaultValue="plans" className="w-full">
              <TabsList className="mx-auto mb-12 md:mb-14 flex w-full max-w-md justify-center">
                <TabsTrigger
                  value="plans"
                  className="flex-1 rounded-full text-xs sm:text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-text data-[state=active]:shadow-md data-[state=active]:border border-transparent"
                >
                  Visão por plano
                </TabsTrigger>
                <TabsTrigger
                  value="comparison"
                  className="flex-1 rounded-full text-xs sm:text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-text data-[state=active]:shadow-md data-[state=active]:border border-transparent"
                >
                  Comparação detalhada
                </TabsTrigger>
              </TabsList>

              <TabsContent value="plans">
                {/* Linha 1: Free, Lite, Básico (3 colunas) */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch mb-10">
                  {plans.slice(0, 3).map((plan, index) => (
                    <Card
                      key={index}
                      className={`relative flex flex-col h-full p-8 bg-background border-border/60 shadow-adaptive backdrop-blur-sm transition-all duration-300 ${
                        plan.popular
                          ? "ring-2 ring-text/20 dark:ring-text/30 shadow-xl-adaptive scale-105 hover:shadow-none hover:-translate-y-1 hover:scale-[1.08] z-10"
                          : "hover:shadow-none hover:-translate-y-1 hover:scale-[1.02]"
                      }`}
                    >
                      {plan.badge && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <Badge className="btn-primary-gradient px-4 py-1 font-bold">{plan.badge}</Badge>
                        </div>
                      )}

                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-text mb-2">{plan.name}</h3>
                        <div className="flex items-baseline gap-1 mb-2">
                          {plan.id === "free" ? (
                            <span className="text-4xl font-extrabold text-text">{formatBRL(plan.priceMonthly)}</span>
                          ) : (
                            <>
                              <span className="text-xl text-text">R$</span>
                              <NumberFlow
                                value={billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnual}
                                format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
                                className="text-4xl font-extrabold text-text"
                              />
                            </>
                          )}
                      {plan.id !== "free" && (
                        <span className="text-text-muted">{billingCycle === "monthly" ? "/mês" : "/ano"}</span>
                      )}
                        </div>
                        <p className="text-sm text-text-muted">{plan.description}</p>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <PlanFeature key={featureIndex} feature={feature} />
                        ))}
                      </ul>

                      <Button
                        className={`mt-auto w-full group relative overflow-hidden ${
                          plan.popular ? "btn-primary-gradient shadow-xl-adaptive hover:shadow-2xl-adaptive" : "btn-secondary"
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                        onClick={() => onPlanClick(plan.id)}
                        disabled={loading}
                      >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                        {plan.cta}
                        {!loading && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        )}
                      </Button>
                    </Card>
                  ))}
                </div>

                {/* Linha 2: Business e Premium em cards horizontais */}
                <div className="flex flex-col gap-8 mb-10">
                  {plans.slice(3, 5).map((plan, index) => (
                    <Card
                      key={index}
                      className={`relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 p-8 bg-background border-border/60 shadow-adaptive backdrop-blur-sm transition-all duration-300 ${
                        plan.popular
                          ? "ring-2 ring-text/20 dark:ring-text/30 shadow-xl-adaptive"
                          : "hover:shadow-none hover:-translate-y-1 hover:scale-[1.01]"
                      }`}
                    >
                      {plan.badge && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0">
                          <Badge className="btn-primary-gradient px-4 py-1 font-bold">{plan.badge}</Badge>
                        </div>
                      )}

                      <div className="flex-1 lg:max-w-xs">
                        <h3 className="text-2xl font-bold text-text mb-2">{plan.name}</h3>
                        <div className="flex items-baseline gap-1 mb-2">
                          <span className="text-xl text-text">R$</span>
                          <NumberFlow
                            value={billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnual}
                            format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
                            className="text-4xl font-extrabold text-text"
                          />
                      {plan.id !== "free" && (
                        <span className="text-text-muted">{billingCycle === "monthly" ? "/mês" : "/ano"}</span>
                      )}
                        </div>
                        <p className="text-sm text-text-muted">{plan.description}</p>
                      </div>

                      <div className="flex-1 w-full lg:w-auto lg:border-l lg:border-border/50 lg:pl-8">
                        <h4 className="font-semibold text-sm mb-4 text-text-muted lg:hidden">Recursos inclusos:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <PlanFeature key={featureIndex} feature={feature} />
                          ))}
                        </ul>
                      </div>

                      <div className="w-full lg:w-auto lg:min-w-[200px] flex flex-col gap-4">
                        <Button
                          className={`w-full group relative overflow-hidden ${
                            plan.popular
                              ? "btn-primary-gradient shadow-xl-adaptive hover:shadow-2xl-adaptive"
                              : "btn-secondary"
                          }`}
                          variant={plan.popular ? "default" : "outline"}
                          onClick={() => onPlanClick(plan.id)}
                          disabled={loading}
                          size="lg"
                        >
                          {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                          {plan.cta}
                          {!loading && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                          )}
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <p className="text-text-muted mb-4">
                    Não sabe qual plano escolher?
                  </p>
                  <Button
                    size="lg"
                    className="gap-2 group relative overflow-hidden btn-primary-gradient shadow-xl-adaptive hover:shadow-2xl-adaptive"
                    onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
                  >
                    Falar com Especialista
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="comparison" className="mt-8">
                <Card className="overflow-hidden border-border bg-background shadow-adaptive">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-surface/50 text-text-muted">
                        <tr>
                          <th className="p-4 font-medium min-w-[200px]">Recursos</th>
                          {plans.map((plan) => (
                            <th key={plan.id} className="p-4 font-medium text-center min-w-[140px]">
                              {plan.name}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/50">
                        {plans[4].features.map((feature, idx) => ( // Use Premium features as master list
                          <tr key={idx} className="hover:bg-surface/30 transition-colors">
                            <td className="p-4 text-text font-medium">{feature.text}</td>
                            {plans.map((plan) => {
                              const planFeature = plan.features.find(f => f.text === feature.text);
                              const isIncluded = planFeature?.included;
                              
                              return (
                                <td key={plan.id} className="p-4 text-center">
                                  {isIncluded ? (
                                    <div className="flex justify-center">
                                      <Check className="w-5 h-5 text-success" />
                                    </div>
                                  ) : (
                                    <div className="flex justify-center">
                                      <X className="w-5 h-5 text-text-muted/30" />
                                    </div>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                        <tr className="bg-surface/30">
                          <td className="p-4 font-bold text-text">Preço Mensal</td>
                          {plans.map((plan) => (
                            <td key={plan.id} className="p-4 text-center font-bold text-text">
                              {plan.priceMonthly === 0 ? "Grátis" : formatBRL(plan.priceMonthly)}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Calculadora ROI */}
            <div className="mt-24 max-w-4xl mx-auto">
              <Card className="p-8 border-border bg-surface/30 backdrop-blur-sm">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                    <Calculator className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-text mb-2">Calculadora de ROI</h3>
                  <p className="text-text-muted">
                    Estime quanto você pode economizar automatizando seu atendimento
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <Label>Horas gastas no WhatsApp/mês</Label>
                        <span className="font-mono text-primary font-bold">{hoursPerMonth}h</span>
                      </div>
                      <Slider
                        value={[hoursPerMonth]}
                        onValueChange={([v]) => setHoursPerMonth(v)}
                        max={160}
                        step={1}
                        className="py-2"
                      />
                      <p className="text-xs text-text-muted">Tempo da equipe respondendo mensagens</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <Label>Custo hora/funcionário</Label>
                        <span className="font-mono text-primary font-bold">R$ {costPerHour}</span>
                      </div>
                      <Slider
                        value={[costPerHour]}
                        onValueChange={([v]) => setCostPerHour(v)}
                        max={200}
                        step={5}
                        className="py-2"
                      />
                      <p className="text-xs text-text-muted">Salário + encargos dividido por horas</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <Label>Leads perdidos por demora/mês</Label>
                        <span className="font-mono text-primary font-bold">{leadsLost}</span>
                      </div>
                      <Slider
                        value={[leadsLost]}
                        onValueChange={([v]) => setLeadsLost(v)}
                        max={50}
                        step={1}
                        className="py-2"
                      />
                      <p className="text-xs text-text-muted">Estimativa de oportunidades perdidas</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center space-y-6 bg-background/50 p-6 rounded-xl border border-border/50">
                    <div className="space-y-2">
                      <p className="text-sm text-text-muted">Economia estimada mensal</p>
                      <p className="text-4xl font-extrabold text-success">
                        {formatBRL(roi.totalSavings)}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-border/50">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>ROI no Plano Básico</span>
                          <span className="font-bold text-success">+{roi.basicROI}%</span>
                        </div>
                        <div className="h-2 bg-surface rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-success transition-all duration-500" 
                            style={{ width: `${Math.min(Number(roi.basicROI), 100)}%` }} 
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>ROI no Plano Business</span>
                          <span className="font-bold text-success">+{roi.businessROI}%</span>
                        </div>
                        <div className="h-2 bg-surface rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-success transition-all duration-500" 
                            style={{ width: `${Math.min(Number(roi.businessROI), 100)}%` }} 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* FAQ */}
            <div className="mt-24 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-text text-center mb-8">Perguntas Frequentes</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Posso cancelar a qualquer momento?</AccordionTrigger>
                  <AccordionContent>
                    Sim! Nossos planos mensais não possuem fidelidade. Você pode cancelar ou alterar seu plano quando quiser. Nos planos anuais, o cancelamento encerra a renovação automática.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>O que acontece se eu ultrapassar os limites?</AccordionTrigger>
                  <AccordionContent>
                    Não cobramos multas automáticas. Se sua operação crescer muito, nossa equipe entrará em contato para sugerir o upgrade para um plano mais adequado ao seu volume.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Como funciona a implantação inclusa?</AccordionTrigger>
                  <AccordionContent>
                    Nos planos Business e Premium, um especialista do Meu Agente fará uma reunião de onboarding para configurar sua conta, treinar seus agentes iniciais e integrar com seu WhatsApp.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Preciso de um número novo de WhatsApp?</AccordionTrigger>
                  <AccordionContent>
                    Não necessariamente. Você pode usar seu número atual. Porém, para evitar banimentos e manter profissionalismo, recomendamos usar um número exclusivo para a automação (incluso nos planos Business e Premium).
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Planos;

