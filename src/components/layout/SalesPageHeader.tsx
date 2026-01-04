import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { AnimatedThemeToggler } from "@/components/AnimatedThemeToggler";

interface SalesPageHeaderProps {
  onNavigate: (id: string) => void;
}

const SalesPageHeader = ({ onNavigate }: SalesPageHeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Início", id: "inicio" },
    { name: "Como Funciona", id: "como-funciona" },
    { name: "Resultados", id: "resultados" },
    { name: "Planos", id: "pricing" },
    { name: "FAQ", id: "faq" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => onNavigate("inicio")}
              className="flex items-center gap-2"
            >
              <img
                src="/meuagente_logo_transparente-preto.png"
                alt="Meu Agente"
                width="1000"
                height="1000"
                className="h-16 sm:h-20 w-auto dark:hidden"
                // @ts-ignore
                fetchpriority="high"
              />
              <img
                src="/meuagente_logo_transparente-branco.png"
                alt="Meu Agente"
                width="1000"
                height="1000"
                className="h-16 sm:h-20 w-auto hidden dark:block"
                // @ts-ignore
                fetchpriority="high"
              />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-medium text-text-muted hover:text-text transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Removed Theme Toggler, Login and Start Free buttons as requested */}
          </div>

          {/* Mobile header actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="p-2 rounded-lg hover:bg-surface-2 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6 text-text" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-border/50 py-4 space-y-2 animate-fade-in"
          >
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-text-muted hover:text-text hover:bg-surface-2 rounded-lg transition-colors"
              >
                {item.name}
              </button>
            ))}
            {/* Removed mobile menu buttons as requested */}
          </div>
        )}
      </nav>
    </header>
  );
};

export default SalesPageHeader;
