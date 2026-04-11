// src/lib/utils.ts
import type { TagColor } from "@/types";

export function getTagClasses(color: TagColor): string {
  const map: Record<TagColor, string> = {
    blue: "bg-accent-blue/30 border-[rgba(90,136,184,0.35)] text-[#2a5078]",
    green: "bg-accent-green1/30 border-[rgba(80,160,100,0.35)] text-[#1a5028]",
    teal: "bg-accent-green2/30 border-[rgba(80,180,140,0.35)] text-[#1a5040]",
    pink: "bg-accent-pink/30 border-[rgba(194,106,133,0.4)] text-[#7a2840]",
    cream: "bg-accent-cream/30 border-[rgba(200,160,80,0.4)] text-[#7a5010]",
    default: "bg-[rgba(200,210,200,0.2)] border-[rgba(100,130,100,0.25)] text-[#3a5040]",
  };
  return map[color];
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
