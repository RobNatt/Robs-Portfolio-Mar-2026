"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface DottedGlowBackgroundProps {
  className?: string;
  gap?: number;
  radius?: number;
  color?: string;
  darkColor?: string;
  glowColor?: string;
  darkGlowColor?: string;
  colorLightVar?: string;
  colorDarkVar?: string;
  glowColorLightVar?: string;
  glowColorDarkVar?: string;
  opacity?: number;
  backgroundOpacity?: number;
  speedMin?: number;
  speedMax?: number;
  speedScale?: number;
}

export function DottedGlowBackground({
  className,
  gap = 12,
  radius = 2,
  color = "rgba(0,0,0,0.7)",
  darkColor,
  glowColor = "rgba(0, 170, 255, 0.85)",
  darkGlowColor,
  colorLightVar,
  colorDarkVar,
  glowColorLightVar,
  glowColorDarkVar,
  opacity = 0.6,
  backgroundOpacity = 0,
  speedMin = 0.4,
  speedMax = 1.3,
  speedScale = 1,
}: DottedGlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resolveColor = (fallback: string, varName?: string) => {
      if (!varName) return fallback;
      const resolved = getComputedStyle(container).getPropertyValue(varName.trim()).trim();
      return resolved || fallback;
    };

    const isDark =
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark");

    let dotColor = isDark
      ? resolveColor(darkColor ?? color, colorDarkVar)
      : resolveColor(color, colorLightVar);
    let glowColorResolved = isDark
      ? resolveColor(darkGlowColor ?? glowColor, glowColorDarkVar)
      : resolveColor(glowColor, glowColorLightVar);

    let rafId: number;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const dots: { x: number; y: number; phase: number; speed: number }[] = [];

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots.length = 0;
      const cols = Math.ceil(width / gap) + 2;
      const rows = Math.ceil(height / gap) + 2;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * gap,
            y: j * gap,
            phase: Math.random() * Math.PI * 2,
            speed: speedMin + Math.random() * (speedMax - speedMin),
          });
        }
      }
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    const draw = (t: number) => {
      const { width, height } = container.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = opacity;

      if (backgroundOpacity > 0) {
        const gradient = ctx.createRadialGradient(
          width / 2,
          height / 2,
          0,
          width / 2,
          height / 2,
          Math.max(width, height) / 2
        );
        gradient.addColorStop(0, "rgba(0,0,0,0)");
        gradient.addColorStop(1, `rgba(0,0,0,${backgroundOpacity})`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      const time = t * 0.001 * speedScale;

      for (const dot of dots) {
        const pulse = (Math.sin(time * dot.speed + dot.phase) + 1) / 2;
        const alpha = 0.3 + pulse * 0.7;

        if (alpha > 0.4) {
          ctx.shadowColor = glowColorResolved;
          ctx.shadowBlur = 8 + 12 * pulse;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.globalAlpha = opacity * alpha;
        ctx.fillStyle = dotColor;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [
    gap,
    radius,
    color,
    darkColor,
    glowColor,
    darkGlowColor,
    colorLightVar,
    colorDarkVar,
    glowColorLightVar,
    glowColorDarkVar,
    opacity,
    backgroundOpacity,
    speedMin,
    speedMax,
    speedScale,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ display: "block" }}
      />
    </div>
  );
}

export default DottedGlowBackground;
