import * as React from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Hook otimizado para detectar dispositivos móveis.
 * Usa apenas matchMedia.matches para evitar reflow forçado
 * causado por leituras de window.innerWidth.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    // Usar mql.matches em vez de window.innerWidth para evitar reflow
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };
    
    // Inicializar com mql.matches (não causa reflow)
    onChange(mql);
    
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
