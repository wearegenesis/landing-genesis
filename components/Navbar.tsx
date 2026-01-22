import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Terminal } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "SERVICIOS", href: "#servicios" },
    { name: "PROCESO", href: "#metodo" },
    { name: "CONTACTO", href: "#contacto" },
  ];

  // --- LÓGICA DE SCROLL SUAVE ---
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>,
    href: string,
  ) => {
    e.preventDefault(); // Evita el salto brusco por defecto

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // 1. Cierra el menú móvil si está abierto
      setIsMenuOpen(false);

      // 2. Realiza el scroll suave
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Función extra para subir arriba del todo al clicar el logo
  const scrollToTop = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Main Navbar Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-slate-950/90 to-transparent backdrop-blur-[2px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo Section - Ahora hace scroll suave al inicio */}
            <div
              onClick={scrollToTop}
              className="flex-shrink-0 flex items-center gap-4 cursor-pointer group z-50 relative"
            >
              <span className="font-pixel text-lg md:text-xl text-white tracking-widest group-hover:text-neon transition-colors duration-300 block">
                GÉNESIS
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)} // <--- APLICADO AQUÍ
                    className="relative group font-pixel text-xs text-slate-300 hover:text-neon transition-colors duration-200 px-3 py-2 cursor-pointer"
                  >
                    <span className="opacity-0 group-hover:opacity-100 absolute left-0 text-neon transition-opacity duration-200">
                      [
                    </span>
                    {link.name}
                    <span className="opacity-0 group-hover:opacity-100 absolute right-0 text-neon transition-opacity duration-200">
                      ]
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden z-50 relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-neon hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,101,46,0.8)] focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Abrir menú</span>
                {isMenuOpen ? (
                  <div className="flex items-center gap-2 px-3 py-1 bg-neon/10 border border-neon rounded-sm">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
                      CERRAR
                    </span>
                    <X className="block h-5 w-5" />
                  </div>
                ) : (
                  <Menu className="block h-8 w-8" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* FULLSCREEN MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#020617] md:hidden flex flex-col animate-in fade-in duration-200">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent pointer-events-none"></div>

          {/* Top Decoration Line */}
          <div className="absolute top-24 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* Menu Content Container */}
          <div className="flex-grow flex flex-col justify-center px-6 sm:px-8 relative z-10 pt-20">
            {/* System Header */}
            <div className="mb-8 flex items-center gap-2 opacity-50 pl-2">
              <Terminal size={14} className="text-neon" />
              <span className="font-mono text-xs text-neon tracking-[0.2em] uppercase">
                SYSTEM_NAVIGATION // ROOT
              </span>
            </div>

            {/* Links List - Clean & Professional */}
            <div className="flex flex-col w-full">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)} // <--- APLICADO AQUÍ TAMBIÉN
                  className="group relative flex items-center gap-6 py-5 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors duration-300 px-2 cursor-pointer"
                >
                  {/* Animated Indicator Line (Left Border) */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-neon group-hover:h-3/4 transition-all duration-300 ease-out rounded-r-full"></div>

                  {/* Index Number */}
                  <span className="font-mono text-xs sm:text-sm text-slate-600 group-hover:text-neon transition-colors duration-300 pl-2 group-hover:pl-4">
                    0{index + 1}
                  </span>

                  {/* Main Text - Clean Inter Medium (Normal Letter) */}
                  <span className="font-inter font-medium text-2xl sm:text-3xl text-slate-200 group-hover:text-white transition-colors duration-300 tracking-tight">
                    {link.name}
                  </span>

                  {/* Hover Arrow */}
                  <ChevronRight className="ml-auto w-5 h-5 sm:w-6 sm:h-6 text-neon opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer / Status Area */}
          <div className="p-8 border-t border-white/5 bg-slate-900/20 backdrop-blur-sm relative z-10">
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                  Status
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="font-inter font-medium text-sm text-slate-300">
                    ONLINE
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="font-pixel text-[10px] text-slate-600 block mb-1">
                  GÉNESIS SYSTEMS
                </span>
                <span className="font-mono text-[10px] text-neon tracking-widest">
                  v2.0.24
                </span>
              </div>
            </div>

            {/* Decorative Bottom Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-neon w-1/3"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
