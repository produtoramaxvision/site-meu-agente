import { lazy, Suspense } from "react";
import HeroSection from "@/components/sections/HeroSection";
import LogosSection from "@/components/sections/LogosSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { AboutProduct } from "@/components/about/AboutProduct";

// Lazy loading dos componentes pesados para melhorar performance
const AgentsSection = lazy(() => import("@/components/sections/AgentsSection"));
const ProductShowcaseSection = lazy(() => import("@/components/sections/ProductShowcaseSection"));
const WhatsappExamples = lazy(() => import("@/components/about/WhatsappExamples").then(module => ({ default: module.WhatsappExamples })));
const PricingSection = lazy(() => import("@/components/sections/PricingSection"));
const FeaturesSection = lazy(() => import("@/components/sections/FeaturesSection"));
const ResponsibleAI = lazy(() => import("@/components/about/ResponsibleAI").then(module => ({ default: module.ResponsibleAI })));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection"));
const FaqSection = lazy(() => import("@/components/sections/FaqSection"));
const FinalCTASection = lazy(() => import("@/components/sections/FinalCTASection"));

// Skeleton loader para feedback visual durante carregamento
const SectionSkeleton = () => (
  <div className="w-full py-12 animate-pulse">
    <div className="container mx-auto px-4">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
        ))}
      </div>
    </div>
  </div>
);
import {
  createSoftwareApplicationSchema,
  createOrganizationSchema,
} from "@/lib/seo";

const SECTION_LINKS = [
  { id: "visao-geral", label: "Visão geral" },
  { id: "agentes-ia", label: "Agentes de IA" },
  { id: "casos-uso", label: "Casos de uso" },
  { id: "plataforma", label: "Plataforma" },
  { id: "planos", label: "Planos" },
  { id: "seguranca", label: "Segurança" },
  { id: "duvidas", label: "Dúvidas" },
] as const;

const scrollToSection = (id: (typeof SECTION_LINKS)[number]["id"]) => {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;

  // OTIMIZAÇÃO: Usar scrollIntoView nativo com scroll-margin-top no CSS
  // Isso evita getBoundingClientRect e reflow forçado
  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Index = () => {
  return (
    <>
      <SEO
        title="Meu Agente – Agentes de IA no WhatsApp para Automatizar Seu Negócio"
        description="Transforme seu WhatsApp em uma equipe de Agentes de IA trabalhando 24/7. Atendimento automatizado, SDR virtual, gestão financeira, relatórios e muito mais. Comece grátis!"
        keywords={[
          "agentes de ia",
          "automação whatsapp",
          "chatbot whatsapp",
          "ia para empresas",
          "sdr virtual",
          "atendimento automatizado",
          "whatsapp business",
          "automação de vendas",
        ]}
        canonicalUrl="/"
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [
            createSoftwareApplicationSchema(),
            createOrganizationSchema(),
          ],
        }}
      />
      <main className="relative overflow-hidden bg-gradient-to-b from-background via-surface/40 to-background">
        {/* Background global sutil */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-subtle-10 blur-3xl" />
          <div className="absolute top-1/3 -right-40 h-80 w-80 rounded-full bg-brand-700/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl" />
        </div>

        {/* HERO + confiança inicial */}
        <section id="inicio" className="relative z-10">
        <HeroSection />
        <LogosSection />
        </section>

        {/* Navegação de capítulos da landing (sticky) */}
        <section className="sticky top-[72px] z-30 border-y border-border/60 bg-background/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between gap-4">
              <p className="hidden md:block text-xs font-medium text-text-muted">
                Navegue pelos destaques da página
              </p>
              <div className="flex w-full md:w-auto items-center gap-2 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {SECTION_LINKS.map((link) => (
                  <Button
                    key={link.id}
                    type="button"
                    size="sm"
                    variant="outline"
                    className="whitespace-nowrap rounded-full border-border/60 bg-surface/80 text-xs sm:text-sm font-medium text-text-muted hover:text-text hover:border-accent hover:bg-surface-2 transition-all"
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capítulo 1 – Visão geral da plataforma & Como funciona */}
        <div id="visao-geral" className="relative z-10">
          <Suspense fallback={<SectionSkeleton />}>
            <ProductShowcaseSection />
          </Suspense>
          <AboutProduct />
          <HowItWorksSection />
        </div>

        {/* Capítulo 2 – Agentes e casos de uso */}
        <div id="agentes-ia" className="relative z-10">
          <Suspense fallback={<SectionSkeleton />}>
            <AgentsSection />
          </Suspense>
        </div>
        <div id="casos-uso" className="relative z-10">
          <Suspense fallback={<SectionSkeleton />}>
            <WhatsappExamples />
          </Suspense>
        </div>

        {/* Capítulo 3 – Plataforma e integrações */}
        <div id="plataforma" className="relative z-10">
          <Suspense fallback={<SectionSkeleton />}>
            <FeaturesSection />
          </Suspense>
        </div>

        {/* Capítulo 4 – Segurança e prova social */}
        <div id="seguranca" className="relative z-10">
          <Suspense fallback={<SectionSkeleton />}>
            <ResponsibleAI />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <TestimonialsSection />
          </Suspense>
        </div>

        {/* Capítulo 5 – Planos, FAQ e CTA final */}
        <div id="planos" className="relative z-10">
          <Suspense fallback={<SectionSkeleton />}>
            <PricingSection />
          </Suspense>
        </div>
        <div id="duvidas" className="relative z-10">
          <Suspense fallback={<SectionSkeleton />}>
            <FaqSection />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <FinalCTASection />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Index;
