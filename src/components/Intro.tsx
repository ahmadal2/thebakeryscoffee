import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import type { CSSProperties } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}


const DURATION_MS = 2700;
const EASE = [0.4, 0, 0.2, 1] as const;

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  const onCompleteRef = useRef(onComplete);
  const completedRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Counter animation
  useEffect(() => {
    let raf: number;
    let start: number | null = null;

    const tick = (now: number) => {
      if (start === null) start = now;
      const elapsed = now - start;
      const p = Math.min((elapsed / DURATION_MS) * 100, 100);
      setProgress(p);

      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        if (!completedRef.current) {
          completedRef.current = true;
          setTimeout(() => onCompleteRef.current(), 400);
        }
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);



  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#120A04",
        overflow: "hidden",
      }}
    >
      {/* Keyframes */}
      <style>{`
        @keyframes ls-steam1 {
          0%,100%{opacity:0;transform:translateY(0) scaleX(1)}
          50%{opacity:.7;transform:translateY(-28px) scaleX(1.3)}
        }
        @keyframes ls-steam2 {
          0%,100%{opacity:0;transform:translateY(0) scaleX(1)}
          50%{opacity:.5;transform:translateY(-22px) scaleX(.8)}
        }
        @keyframes ls-steam3 {
          0%,100%{opacity:0;transform:translateY(0) scaleX(1)}
          50%{opacity:.6;transform:translateY(-30px) scaleX(1.1)}
        }
        @keyframes ls-pour {
          0%{height:0;opacity:0} 10%{opacity:1} 60%{height:180px;opacity:1} 100%{height:180px;opacity:1}
        }
        @keyframes ls-fillCup {
          0%,35%{height:0;y:190} 80%,100%{height:55px;y:135}
        }
        @keyframes ls-fadeIn {
          from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)}
        }
        @keyframes ls-ripple {
          0%{r:0;opacity:.6} 100%{r:18;opacity:0}
        }
        @keyframes ls-dropFall {
          0%{opacity:0;cy:70} 60%{opacity:1} 100%{opacity:0;cy:140}
        }
        @keyframes ls-sway {
          0%,100%{transform:rotate(-1deg)} 50%{transform:rotate(1deg)}
        }
      `}</style>

      {/* TOP-LEFT — Brand label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        style={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          fontSize: "11px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#C4A882",
          fontFamily: "inherit",
        }}
      >
        Coffee
      </motion.div>

      {/* CENTER — SVG + rotating word */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >


        {/* Coffee SVG animation */}
        <svg
          width="260"
          height="240"
          viewBox="0 0 320 300"
          style={{ overflow: "visible", display: "block" }}
        >
          {/* Coffee pot — sways */}
          <g style={{ animation: "ls-sway 2s ease-in-out infinite", transformOrigin: "210px 45px" }}>
            <ellipse cx="210" cy="42" rx="28" ry="12" fill="#3B2A1A" />
            <rect x="182" y="30" width="56" height="30" rx="6" fill="#3B2A1A" />
            <rect x="230" y="26" width="22" height="8" rx="4" fill="#5C3D22" />
            <ellipse cx="210" cy="60" rx="28" ry="8" fill="#2A1C10" />
          </g>

          {/* Pour stream */}
          <rect
            x="203"
            y="62"
            width="8"
            rx="4"
            style={{
              fill: "#5C3420",
              transformOrigin: "203px 62px",
              animation: "ls-pour 2.5s ease-out 0.3s forwards",
              height: 0,
            } as CSSProperties}
          />

          {/* Drop particles */}
          <circle cx="207" cy="70" r="3" fill="#5C3420" opacity="0"
            style={{ animation: "ls-dropFall 2.5s ease-in 0.4s infinite" }} />
          <circle cx="210" cy="70" r="2" fill="#7A4830" opacity="0"
            style={{ animation: "ls-dropFall 2.5s ease-in 0.7s infinite" }} />

          {/* Cup */}
          <path d="M140 150 L155 220 Q160 230 175 230 L205 230 Q220 230 225 220 L240 150 Z" fill="#1A0F08" />
          <path d="M238 165 Q258 165 258 185 Q258 205 238 205"
            stroke="#1A0F08" strokeWidth="10" fill="none" strokeLinecap="round" />
          <ellipse cx="190" cy="234" rx="60" ry="10" fill="#0D0602" />

          {/* Liquid fill */}
          <clipPath id="ls-cupClip">
            <path d="M142 150 L157 218 Q162 228 175 228 L205 228 Q218 228 223 218 L238 150 Z" />
          </clipPath>
          <rect
            x="142" y="90" width="98" height="140"
            fill="#6B3A1F"
            clipPath="url(#ls-cupClip)"
            style={{
              animation: "ls-fillCup 2.5s ease-out 0.5s forwards",
              height: 0,
            } as CSSProperties}
          />

          {/* Surface sheen */}
          <ellipse cx="190" cy="155" rx="40" ry="7" fill="#9B5E35" opacity="0"
            style={{ animation: "ls-fadeIn 0.5s ease-out 2.5s forwards" }} />

          {/* Ripples */}
          <circle cx="190" cy="155" r="0" stroke="#C8844A" strokeWidth="1.5" fill="none" opacity="0"
            style={{ animation: "ls-ripple 1.2s ease-out 2.8s infinite" }} />
          <circle cx="190" cy="155" r="0" stroke="#C8844A" strokeWidth="1" fill="none" opacity="0"
            style={{ animation: "ls-ripple 1.2s ease-out 3.1s infinite" }} />

          {/* Steam */}
          <g opacity="0" style={{ animation: "ls-fadeIn 0.4s 3s forwards" }}>
            <path d="M172 145 Q168 130 172 118 Q176 106 172 94"
              stroke="#C4A882" strokeWidth="2.5" fill="none" strokeLinecap="round"
              style={{ animation: "ls-steam1 2.2s ease-in-out 3.2s infinite" }} />
            <path d="M190 142 Q186 126 190 113 Q194 100 190 88"
              stroke="#C4A882" strokeWidth="2.5" fill="none" strokeLinecap="round"
              style={{ animation: "ls-steam2 2s ease-in-out 3.5s infinite" }} />
            <path d="M208 145 Q204 129 208 116 Q212 103 208 90"
              stroke="#C4A882" strokeWidth="2.5" fill="none" strokeLinecap="round"
              style={{ animation: "ls-steam3 2.4s ease-in-out 3.3s infinite" }} />
          </g>
        </svg>
      </div>

      {/* BOTTOM-RIGHT — Counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2.5rem",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(3.5rem, 9vw, 7rem)",
          color: "#F5ECD7",
          lineHeight: 1,
          tabularNums: "tabular-nums",
          fontVariantNumeric: "tabular-nums",
          userSelect: "none",
        } as CSSProperties}
      >
        {Math.round(progress).toString().padStart(3, "0")}
      </motion.div>

      {/* BOTTOM EDGE — Progress bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "rgba(31,24,16,0.5)",
        }}
      >
        <motion.div
          style={{
            height: "100%",
            transformOrigin: "left",
            background: "linear-gradient(90deg, #C4A882 0%, #A07848 100%)",
            boxShadow: "0 0 8px rgba(196,168,130,0.4)",
            scaleX: progress / 100,
          }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
    </div>
  );
}
