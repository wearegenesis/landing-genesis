import React from "react";
import { ScanEye, Code2, Rocket } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "DIAGNÓSTICO",
    subtitle: "AUDITORÍA PROFUNDA",
    // Cambio: Ahora habla de "ecosistema digital", cubriendo Webs y Procesos.
    desc: "Analizamos tu ecosistema actual (Web, CRM y Procesos). Detectamos fugas de rentabilidad y definimos la hoja de ruta técnica para automatizar y escalar.",
    icon: ScanEye,
    // Original Multi-color Theme (PRESERVADO)
    colorClass: "text-cyan-400",
    glowClass: "drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]",
    borderHover: "group-hover:border-cyan-400",
    bgHover: "group-hover:bg-cyan-500/10",
  },
  {
    id: 2,
    title: "DESARROLLO INTEGRAL",
    subtitle: "CONSTRUCCIÓN SEGURA",
    // Cambio: Menciona "activos digitales" (Webs) y "Agentes".
    desc: "Ingeniería a medida. Desarrollamos tus activos digitales (Webs Premium o Agentes IA) y conectamos tus herramientas en un entorno de pruebas seguro.",
    icon: Code2,
    // Original Multi-color Theme (PRESERVADO)
    colorClass: "text-purple-400",
    glowClass: "drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]",
    borderHover: "group-hover:border-purple-400",
    bgHover: "group-hover:bg-purple-500/10",
  },
  {
    id: 3,
    title: "DESPLIEGUE",
    subtitle: "ENTREGA & ESCALADO",
    // Cambio: Enfoque en Retorno de Inversión.
    desc: "Lanzamiento oficial sin fricción. Formamos a tu equipo en las nuevas herramientas y monitorizamos los resultados para asegurar el retorno de inversión.",
    icon: Rocket,
    // Original Multi-color Theme (PRESERVADO)
    colorClass: "text-emerald-400",
    glowClass: "drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]",
    borderHover: "group-hover:border-emerald-400",
    bgHover: "group-hover:bg-emerald-500/10",
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section
      id="metodo"
      className="relative w-full py-24 md:py-32 bg-slate-900 overflow-hidden"
    >
      {/* --- 1. VISUAL SEPARATOR (Top) --- */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent z-20 shadow-[0_0_15px_rgba(255,101,46,0.5)]"></div>

      {/* --- 2. BACKGROUND (Clean Tech) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Radial Light Source - Depth without noise */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] bg-[radial-gradient(circle,rgba(30,41,59,0.8)_0%,rgba(15,23,42,0)_60%)] opacity-50"></div>

        {/* Standard Grid Pattern (No Circuit) */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* --- 3. HEADER --- */}
        <div className="text-center mb-20 md:mb-32">
          <div className="flex items-center justify-center gap-3 mb-4 opacity-90">
            <div className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse"></div>
            <h3 className="font-mono text-sm md:text-base text-neon tracking-[0.3em] uppercase font-bold">
              EL PROTOCOLO GÉNESIS
            </h3>
            <div className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse"></div>
          </div>
          <h2 className="font-inter font-black text-3xl md:text-5xl text-white uppercase tracking-tight relative inline-block drop-shadow-xl">
            NUESTRO PROCESO
          </h2>
        </div>

        {/* --- 4. TIMELINE --- */}
        <div className="relative">
          {/* CONNECTING LINES */}
          {/* Desktop: Base Line */}
          <div className="hidden md:block absolute top-[3.75rem] left-0 w-full h-px bg-slate-700/40"></div>

          {/* Desktop: Central Energy Beam (Only in the middle) */}
          <div className="hidden md:block absolute top-[3.75rem] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-neon/80 to-transparent shadow-[0_0_10px_rgba(255,101,46,0.4)]"></div>

          {/* Mobile: Vertical Line */}
          <div className="md:hidden absolute top-0 bottom-0 left-[2.25rem] w-px bg-slate-700/40"></div>

          {/* STEPS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex md:flex-col items-start md:items-center group"
              >
                {/* ICON NODE - Clean Industrial Style */}
                <div className="flex-shrink-0 relative z-10 mr-6 md:mr-0 md:mb-10">
                  {/* Outer Ring - Dark Slate with specific hover color border */}
                  <div
                    className={`w-[4.5rem] h-[4.5rem] flex items-center justify-center rounded-full bg-[#020617] border border-slate-700 ${step.borderHover} group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500 relative shadow-2xl`}
                  >
                    {/* Inner Circle Fill - Reacts on hover */}
                    <div
                      className={`absolute inset-2 rounded-full bg-slate-900 ${step.bgHover} transition-colors duration-300`}
                    ></div>

                    {/* Icon */}
                    <step.icon
                      size={28}
                      className={`relative z-10 transition-all duration-300 group-hover:scale-110 ${step.colorClass} ${step.glowClass}`}
                    />

                    {/* ID Badge - Clean White/Slate (No Neon) */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-slate-200 border border-slate-400 rounded-full flex items-center justify-center shadow-lg">
                      <span className="font-mono text-[10px] font-bold text-black">
                        0{step.id}
                      </span>
                    </div>
                  </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="pt-2 md:pt-6 md:px-6 md:text-center max-w-sm">
                  <div className="mb-2">
                    <h3
                      className={`font-inter font-black text-xl text-white uppercase tracking-tight group-hover:${step.colorClass} transition-colors duration-300`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-inter font-normal text-base text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
