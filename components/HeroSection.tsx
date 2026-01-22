import React, { useState, useEffect } from "react";
import { ChevronRight, Cpu, Zap, Target, Rocket } from "lucide-react";

const HeroSection: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");

  // Define text parts for dual-color logic
  const part1 = "> MENOS TAREAS MANUALES, ";
  const part2 = "MÁS RENTABILIDAD.";
  const fullText = part1 + part2;

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      // Logic to slice text from 0 to current index
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 50); // Fast, snappy speed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20 overflow-hidden">
      {/* --- BACKGROUND LAYERS (STATIC) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Matrix GIF - Static Container (GIF plays internally) */}
        <div className="absolute inset-0 bg-matrix bg-cover bg-center bg-no-repeat opacity-20 mix-blend-screen"></div>

        {/* Layer 2: Gradient Overlay (Stays static to ground the content) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B1121_90%)]"></div>

        {/* Layer 3: Grid Pattern - Static */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 mix-blend-overlay"></div>

        {/* --- BOTTOM TRANSITION FADE --- */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#020617] z-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-30 max-w-[90rem] w-full mx-auto text-center space-y-10 lg:space-y-12">
        {/* Status Bar */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-slate-700/50 bg-midnight/80 backdrop-blur-md text-slate-300 font-mono font-normal text-xs md:text-sm mb-2 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <span
            className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"
            style={{ animationDuration: "0.8s" }}
          ></span>
          <span className="tracking-wider">SISTEMA EN LÍNEA: v2.0.24</span>
        </div>

        {/* GRUPO IMPACTO: Main Title */}
        <div className="flex flex-col items-center justify-center">
          <h1
            className="font-inter font-black text-white tracking-tighter uppercase leading-[0.9] 
                           text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl
                           lg:whitespace-nowrap drop-shadow-2xl max-w-full 
                           transition-all duration-300 ease-out hover:-translate-y-2 hover:drop-shadow-[0_20px_30px_rgba(255,101,46,0.2)] cursor-default select-none"
          >
            GÉNESIS, TU{" "}
            <span className="text-neon inline-block"> AGENCIA DIGITAL</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="min-h-[3rem] flex justify-center items-center px-4">
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-mono tracking-wider uppercase leading-relaxed drop-shadow-md">
            <span className="text-slate-300 opacity-90 font-medium">
              {displayedText.slice(0, part1.length)}
            </span>
            <span className="text-neon font-bold">
              {displayedText.slice(part1.length)}
            </span>
            <span className="animate-pulse ml-1 inline-block w-2 h-5 md:w-3 md:h-6 bg-neon align-middle"></span>
          </p>
        </div>

        {/* --- Power-Up Bar --- */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 px-8 py-6 bg-slate-900/40 border border-white/5 rounded-2xl sm:rounded-full backdrop-blur-md mx-auto w-fit mt-8 hover:bg-slate-900/60 hover:border-white/10 transition-all duration-300 shadow-2xl">
          <div className="flex items-center gap-3 group select-none hover:scale-105 transition-transform duration-300">
            <Zap
              className="w-5 h-5 text-emerald-400 animate-pulse drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]"
              style={{ animationDuration: "3s" }}
            />
            <span className="font-inter font-bold text-sm text-slate-200 tracking-wide uppercase group-hover:text-emerald-300 transition-colors">
              AGENTES IA 24/7
            </span>
          </div>

          <div className="hidden sm:block w-px h-5 bg-white/10"></div>

          <div className="flex items-center gap-3 group select-none hover:scale-105 transition-transform duration-300">
            <Target
              className="w-5 h-5 text-cyan-400 animate-pulse drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              style={{ animationDuration: "3s" }}
            />
            <span className="font-inter font-bold text-sm text-slate-200 tracking-wide uppercase group-hover:text-cyan-300 transition-colors">
              SOPORTE CONTINUO
            </span>
          </div>

          <div className="hidden sm:block w-px h-5 bg-white/10"></div>

          <div className="flex items-center gap-3 group select-none hover:scale-105 transition-transform duration-300">
            <Rocket
              className="w-5 h-5 text-purple-400 animate-pulse drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
              style={{ animationDuration: "3s" }}
            />
            <span className="font-inter font-bold text-sm text-slate-200 tracking-wide uppercase group-hover:text-purple-300 transition-colors">
              SETUP RÁPIDO
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 pt-8 pb-12">
          <button
            onClick={() =>
              document
                .getElementById("contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative inline-flex items-center justify-center px-10 py-5 font-inter font-bold text-base text-white bg-neon border border-neon hover:bg-white hover:text-black hover:border-white transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[1px] hover:translate-y-[1px] rounded-sm tracking-wide"
          >
            <span className="mr-2 group-hover:animate-spin">
              <Cpu size={20} />
            </span>
            SOLICITAR AUDITORÍA
          </button>

          <button
            onClick={() =>
              document
                .getElementById("servicios")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative inline-flex items-center justify-center px-10 py-5 font-inter font-bold text-base text-white bg-transparent border border-slate-600 hover:bg-slate-800 hover:border-slate-400 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(100,100,100,0.5)] hover:shadow-[2px_2px_0px_0px_rgba(100,100,100,0.8)] hover:translate-x-[1px] hover:translate-y-[1px] rounded-sm tracking-wide"
          >
            VER SERVICIOS
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
