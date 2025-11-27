import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Como Funciona", href: "/como-funciona" },
    { name: "Planos", href: "/planos" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <img 
                src="/meuagente_logo_transparente-preto.png" 
                alt="Meu Agente" 
                className="h-16 sm:h-20 w-auto"
              />
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-text-muted hover:text-text transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
            >
              Entrar
            </Button>
            <Button
              size="sm"
              className="group relative overflow-hidden bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-800 hover:to-brand-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
            >
              <span>Começar Grátis</span>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-surface-2 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-text" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 space-y-2 animate-fade-in">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-text-muted hover:text-text hover:bg-surface-2 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-4 space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
              >
                Entrar
              </Button>
              <Button
                size="sm"
                className="group relative w-full overflow-hidden bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-800 hover:to-brand-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
              >
                <span>Começar Grátis</span>
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
