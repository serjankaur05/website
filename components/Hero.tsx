"use client";
import { useEffect, useRef } from "react";

const TAGS = [
  "constraint programming",
  "data pipelines",
  "optimization algorithms",
  "analytics dashboards",
  "developer tooling",
  "systems design",
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subtle particle/node animation in the background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < 40; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(200,240,102,${0.04 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(200,240,102,0.15)";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 2rem",
        maxWidth: "860px",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      {/* Background canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, paddingTop: "80px" }}>
        {/* Status indicator */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "2.5rem",
            fontSize: "12px",
            fontFamily: "var(--font-mono)",
            color: "var(--text-tertiary)",
            letterSpacing: "0.08em",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--accent)",
              boxShadow: "0 0 8px var(--accent)",
              animation: "pulse 2s infinite",
            }}
          />
          CS @ WESTERN UNIVERSITY · 2023–2027
          <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
        </div>

        {/* Name */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            color: "var(--text-secondary)",
            marginBottom: "1rem",
            letterSpacing: "0.04em",
          }}
        >
          Serjan Kaur
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 68px)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            margin: "0 0 1.5rem",
            color: "var(--text-primary)",
          }}
        >
          I build systems{" "}
          <br />
          that{" "}
          <span
            style={{
              color: "var(--accent)",
              fontWeight: 400,
            }}
          >
            solve real problems.
          </span>
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "17px",
            color: "var(--text-secondary)",
            maxWidth: "520px",
            lineHeight: 1.7,
            margin: "0 0 3rem",
            fontWeight: 300,
          }}
        >
          CS student at Western University. I build automation tools, data-driven systems,
          and developer infrastructure — and write about ML, neuroscience, and the places
          technology gets interesting.
        </p>

        {/* Tag cloud */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "3.5rem",
          }}
        >
          {TAGS.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text-tertiary)",
                border: "1px solid var(--border)",
                padding: "4px 10px",
                borderRadius: "3px",
                letterSpacing: "0.04em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              fontFamily: "var(--font-mono)",
              background: "var(--accent)",
              color: "#0a0a0a",
              textDecoration: "none",
              padding: "10px 22px",
              borderRadius: "4px",
              fontWeight: 500,
              letterSpacing: "0.02em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            View projects
          </a>
          <a
            href="mailto:serjankaur@gmail.com"
            style={{
              fontSize: "14px",
              color: "var(--text-secondary)",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
            }
          >
            serjankaur@gmail.com →
          </a>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: "absolute",
            bottom: "-10vh",
            left: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "50px",
              background: "linear-gradient(to bottom, var(--border), transparent)",
              marginLeft: "4px",
            }}
          />
          <span
            className="mono"
            style={{ fontSize: "10px", color: "var(--text-tertiary)", letterSpacing: "0.1em" }}
          >
            SCROLL
          </span>
        </div>
      </div>
    </section>
  );
}
