import React, { useState, useMemo, useEffect } from "react";
import {
  ArrowRight,
  AlertTriangle,
  Crosshair,
  Plus,
  Minus,
} from "lucide-react";

// --- ANIMATION HOOK ---
function useAnimatedValue(value: number, duration: number = 800) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const startValue = displayValue;
    const endValue = value;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = startValue + (endValue - startValue) * ease;
      setDisplayValue(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value]);

  return displayValue;
}

// --- NEW COMPONENT: QUANTUM STEP CONTROL ---
interface QuantumControlProps {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (val: number) => void;
  label: string;
  unit: string;
}

const QuantumControl: React.FC<QuantumControlProps> = ({
  value,
  min,
  max,
  step = 1,
  onChange,
  label,
  unit,
}) => {
  // Calculate how many "blocks" are active (visual representation)
  const totalSegments = 12;
  const activeSegments = Math.round(
    ((value - min) / (max - min)) * totalSegments,
  );

  const handleIncrement = () => {
    if (value + step <= max) onChange(value + step);
  };

  const handleDecrement = () => {
    if (value - step >= min) onChange(value - step);
  };

  return (
    <div className="flex flex-col gap-1.5 md:gap-3 group">
      {/* Header */}
      <div className="flex justify-between items-end">
        <label className="text-xs md:text-sm font-mono text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">
          {label}
        </label>
        <div className="font-mono text-xl md:text-3xl text-white tracking-tighter">
          {value}
          <span className="text-sm md:text-base text-slate-500 ml-1">
            {unit}
          </span>
        </div>
      </div>

      {/* Visual Interface */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Decrement Button */}
        <button
          onClick={handleDecrement}
          className="w-10 h-10 flex items-center justify-center border border-slate-700 rounded-sm text-slate-400 hover:text-white hover:border-neon hover:bg-neon/10 transition-all active:scale-95 touch-manipulation"
        >
          <Minus size={16} />
        </button>

        {/* The Bar (Segments) */}
        <div
          className="flex-grow flex gap-1 h-8 md:h-12 relative cursor-pointer"
          title="Drag or Click to adjust"
        >
          {/* Hidden Range Input for Dragging functionality */}
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-col-resize touch-manipulation"
          />

          {Array.from({ length: totalSegments }).map((_, i) => {
            const isActive = i < activeSegments;
            return (
              <div
                key={i}
                className={`flex-1 rounded-sm transition-all duration-300 ${
                  isActive
                    ? "bg-neon shadow-[0_0_10px_rgba(255,101,46,0.6)] scale-y-100"
                    : "bg-slate-800 scale-y-75 opacity-50"
                }`}
              ></div>
            );
          })}
        </div>

        {/* Increment Button */}
        <button
          onClick={handleIncrement}
          className="w-10 h-10 flex items-center justify-center border border-slate-700 rounded-sm text-slate-400 hover:text-white hover:border-neon hover:bg-neon/10 transition-all active:scale-95 touch-manipulation"
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
};

const CalculatorSection: React.FC = () => {
  const [frequency, setFrequency] = useState<number>(10);
  const [duration, setDuration] = useState<number>(30);
  const [rate, setRate] = useState<number>(25);
  const [scrollY, setScrollY] = useState(0);

  // Parallax Scroll Listener
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = useMemo(() => {
    const hoursWeekly = (frequency * duration) / 60;
    const hoursMonthly = hoursWeekly * 4.33;
    const moneyMonthly = hoursMonthly * rate;
    return { moneyMonthly };
  }, [frequency, duration, rate]);

  const animatedMoneyMonthly = useAnimatedValue(stats.moneyMonthly);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-32 bg-[#020617] overflow-hidden">
      {/* --- BACKGROUND DECORATION (Dynamic) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Radial Spotlight behind the controls */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[400px] bg-slate-800/40 blur-[100px] rounded-full mix-blend-screen"></div>

        {/* Layer 1: Base Grid - Fixed Attachment for seamless continuity */}
        <div
          className="absolute inset-0 bg-grid-pattern opacity-50 animate-grid-flow-slow bg-fixed"
          style={{
            backgroundPosition: `0px ${scrollY * 0.1}px`,
          }}
        ></div>

        {/* Layer 2: Small Grid - Fixed Attachment */}
        <div
          className="absolute inset-0 bg-grid-small opacity-60 mix-blend-overlay animate-grid-flow bg-fixed"
          style={{
            backgroundPosition: `0px ${scrollY * 0.2}px`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER AREA */}
        <div className="flex flex-col items-start mb-6 md:mb-20">
          <div className="flex items-center gap-2 mb-2 md:mb-4 opacity-100">
            <Crosshair className="w-5 h-5 text-neon animate-spin-slow" />
            <span className="font-mono text-sm md:text-base text-neon uppercase tracking-[0.3em] font-bold">
              IMPACT_ANALYSIS_V2
            </span>
          </div>

          <h2 className="font-inter font-black text-2xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight leading-none drop-shadow-xl">
            ¿CUÁNTO TE CUESTA <br className="hidden md:block" />
            <span className="bg-neon text-black px-2 md:px-3 py-0.5 md:py-1 mx-1 md:mx-2 transform -skew-x-12 inline-block shadow-[2px_2px_0px_rgba(255,255,255,0.2)] md:shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
              <span className="transform skew-x-12 inline-block font-bold">
                NO
              </span>
            </span>
            AUTOMATIZAR?
          </h2>
        </div>

        {/* --- FRAMELESS DASHBOARD --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* LEFT: CONTROLS (Floating directly on grid) */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-10">
            <QuantumControl
              label="Frecuencia (Veces/Semana)"
              unit="x"
              value={frequency}
              min={1}
              max={50}
              onChange={setFrequency}
            />

            {/* Divider Line */}
            <div className="w-full h-px bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 opacity-50 md:opacity-100"></div>

            <QuantumControl
              label="Duración por Tarea"
              unit="min"
              value={duration}
              min={5}
              max={120}
              step={5}
              onChange={setDuration}
            />

            {/* Divider Line */}
            <div className="w-full h-px bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 opacity-50 md:opacity-100"></div>

            <QuantumControl
              label="Coste por Hora"
              unit="€"
              value={rate}
              min={10}
              max={150}
              step={5}
              onChange={setRate}
            />
          </div>

          {/* RIGHT: RESULT (The Monolith) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Decorative brackets - hidden on mobile to save space/clutter */}
            <div className="hidden md:block absolute -top-4 -left-4 w-6 h-6 border-t border-l border-white/20"></div>
            <div className="hidden md:block absolute -bottom-4 -right-4 w-6 h-6 border-b border-r border-white/20"></div>

            {/* Result Container - Static with Hover effect only */}
            <div className="p-6 md:p-10 bg-gradient-to-b from-slate-900/80 to-black/80 backdrop-blur-md border border-white/5 md:border-y md:border-x-0 relative group overflow-hidden rounded-lg md:rounded-none transition-all duration-300 shadow-[0_0_20px_rgba(255,101,46,0.1)] hover:shadow-[0_0_40px_rgba(255,101,46,0.2)]">
              {/* Background Noise/Texture */}
              <div className="absolute inset-0 bg-grid-small opacity-10"></div>

              <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex items-center gap-2 mb-2 md:mb-4">
                  <AlertTriangle size={18} className="text-neon" />
                  {/* UPDATED STYLE FOR VISIBILITY */}
                  <span className="font-mono text-sm md:text-base font-bold text-slate-300 uppercase tracking-widest">
                    DINERO PERDIDO AL MES
                  </span>
                </div>

                <div className="relative mb-6 md:mb-8">
                  {/* Glitch Shadow */}
                  <span className="absolute top-0 left-0.5 font-inter font-black text-5xl sm:text-6xl md:text-7xl text-neon opacity-30 select-none blur-[1px]">
                    {formatCurrency(animatedMoneyMonthly)}
                  </span>
                  <span className="font-inter font-black text-5xl sm:text-6xl md:text-7xl text-white tracking-tighter drop-shadow-2xl">
                    {formatCurrency(animatedMoneyMonthly)}
                  </span>
                </div>

                <button
                  onClick={() =>
                    document
                      .getElementById("contacto")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="w-full group relative overflow-hidden px-6 py-4 md:px-8 md:py-5 bg-white text-black font-inter font-bold text-sm md:text-base tracking-wide uppercase hover:bg-neon hover:text-white transition-all duration-300 rounded-sm"
                >
                  <div className="absolute inset-0 w-full h-full bg-neon/0 group-hover:bg-neon/100 transition-all duration-300 z-0"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    RECUPERAR ESTE DINERO
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </button>
              </div>

              {/* Bottom Red Glow Line - Static */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-neon shadow-[0_0_15px_rgba(255,101,46,0.8)]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
