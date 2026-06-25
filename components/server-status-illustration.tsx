"use client";

import { useEffect, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
type PulseState = "active" | "warning" | "idle";

interface LedBarProps {
  delay?: string;
  color?: string;
}

interface ServerRowProps {
  leds: Array<{ color: "blue" | "gray" | "white" }>;
  animationDelay?: string;
  lineDelay?: string;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Single LED indicator bar (the vertical pill shapes) */
function LedBar({ delay = "0s", color = "#426be4" }: LedBarProps) {
  return (
    <div
      className="relative w-[9px] h-[26px] rounded-full overflow-hidden"
      style={{ backgroundColor: color }}
    >
      {/* Animated shimmer sweep */}
      <div
        className="absolute inset-0 -translate-y-full animate-led-sweep"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
          animationDelay: delay,
        }}
      />
    </div>
  );
}

/** Three horizontal text lines inside a server panel */
function TextLines({ delay = "0s" }: { delay?: string }) {
  return (
    <div className="flex flex-col gap-[6px]">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="h-[3px] rounded-full bg-[#090814] animate-pulse-slow"
          style={{
            width: i === 0 ? "120px" : i === 1 ? "95px" : "110px",
            animationDelay: `${parseFloat(delay) + i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}

/** One server rack panel */
function ServerPanel({ leds, animationDelay = "0s", lineDelay = "0s" }: ServerRowProps) {
  return (
    <div
      className="relative flex items-center gap-4 px-5 py-4 rounded-lg border border-[#090814]
                 bg-white/30 backdrop-blur-sm
                 animate-panel-in"
      style={{ animationDelay }}
    >
      {/* LED cluster */}
      <div className="flex gap-[6px] shrink-0">
        {leds.map((led, i) => (
          <LedBar
            key={i}
            color={
              led.color === "blue"
                ? "#426be4"
                : led.color === "gray"
                ? "#f2f2f2"
                : "#ffffff"
            }
            delay={`${i * 0.18}s`}
          />
        ))}
      </div>

      {/* Text lines */}
      <TextLines delay={lineDelay} />

      {/* Subtle right-side glow when active */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#426be4]/70 animate-ping-slow" />
    </div>
  );
}

/** Blue circle node with animated checkmark */
function StatusNode({
  pulseDelay = "0s",
  visible = true,
}: {
  pulseDelay?: string;
  visible?: boolean;
}) {
  return (
    <div
      className={`relative w-[50px] h-[50px] rounded-full bg-[#426be4] flex items-center justify-center
                  shadow-lg shadow-[#426be4]/40
                  transition-all duration-700
                  ${visible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
    >
      {/* Ripple ring */}
      <div
        className="absolute inset-0 rounded-full border-2 border-[#426be4]/50 animate-ripple"
        style={{ animationDelay: pulseDelay }}
      />
      {/* Checkmark SVG */}
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 stroke-white fill-none animate-draw-check"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ animationDelay: pulseDelay }}
      >
        <polyline points="4 13 9 18 20 7" />
      </svg>
    </div>
  );
}

/** Animated connector line */
function ConnectorLine({
  horizontal = true,
  delay = "0s",
}: {
  horizontal?: boolean;
  delay?: string;
}) {
  return (
    <div
      className={`
        bg-[#3f3d56] rounded-full origin-left animate-line-grow
        ${horizontal ? "h-[2px] w-[60px]" : "w-[2px] h-[100px]"}
      `}
      style={{ animationDelay: delay }}
    />
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function ServerStatusIllustration() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* ── Keyframes injected via a <style> tag ── */}
      <style>{`
        @keyframes panelIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }
        @keyframes lineGrowY {
          from { transform: scaleY(0); opacity: 0; }
          to   { transform: scaleY(1); opacity: 1; }
        }
        @keyframes ripple {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes drawCheck {
          from { stroke-dashoffset: 40; opacity: 0; }
          to   { stroke-dashoffset: 0;  opacity: 1; }
        }
        @keyframes ledSweep {
          0%   { transform: translateY(120%); }
          50%  { transform: translateY(-20%); }
          100% { transform: translateY(120%); }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
        @keyframes pingSlow {
          0%   { transform: translate(-50%,-50%) scale(1); opacity: 0.8; }
          75%  { transform: translate(-50%,-50%) scale(2); opacity: 0; }
          100% { transform: translate(-50%,-50%) scale(2); opacity: 0; }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }

        .animate-panel-in   { animation: panelIn  0.6s cubic-bezier(.22,1,.36,1) both; }
        .animate-line-grow  { animation: lineGrow 0.5s cubic-bezier(.22,1,.36,1) both; }
        .animate-line-grow-y{ animation: lineGrowY 0.5s cubic-bezier(.22,1,.36,1) both; }
        .animate-ripple     { animation: ripple  2s ease-out infinite; }
        .animate-draw-check { stroke-dasharray: 40; animation: drawCheck 0.5s ease both; }
        .animate-led-sweep  { animation: ledSweep  2.4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulseSlow 2.8s ease-in-out infinite; }
        .animate-ping-slow  { animation: pingSlow  2.2s ease-out infinite; }
        .animate-float      { animation: floatUp   3.6s ease-in-out infinite; }
      `}</style>

      {/* ── Outer wrapper ── */}
      <div
        className={`
          flex flex-col items-center justify-center gap-6 p-10
          transition-opacity duration-700
          ${mounted ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* ── Top row: node → line → node → line → node ── */}
        <div className="flex items-center gap-3 animate-float">
          <StatusNode pulseDelay="0s" visible={mounted} />
          <ConnectorLine delay="0.3s" />
          <StatusNode pulseDelay="0.3s" visible={mounted} />
          <ConnectorLine delay="0.5s" />
          <StatusNode pulseDelay="0.6s" visible={mounted} />
        </div>

        {/* ── Vertical line down to panels ── */}
        <div
          className="w-[2px] h-[40px] bg-[#3f3d56] rounded-full origin-top animate-line-grow-y"
          style={{ animationDelay: "0.7s" }}
        />

        {/* ── Server panels ── */}
        <div className="flex flex-col gap-4 w-full max-w-[380px] animate-float" style={{ animationDelay: "0.2s" }}>
          <ServerPanel
            leds={[
              { color: "blue" },
              { color: "blue" },
              { color: "blue" },
              { color: "blue" },
            ]}
            animationDelay="0.8s"
            lineDelay="1s"
          />

          <ServerPanel
            leds={[
              { color: "blue" },
              { color: "blue" },
              { color: "gray" },
              { color: "blue" },
            ]}
            animationDelay="1.0s"
            lineDelay="1.2s"
          />

          <ServerPanel
            leds={[
              { color: "blue" },
              { color: "blue" },
              { color: "blue" },
              { color: "white" },
            ]}
            animationDelay="1.2s"
            lineDelay="1.4s"
          />
        </div>

        {/* ── Status label ── */}
      </div>
    </>
  );
}
