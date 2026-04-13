"use client";
import { useEffect } from "react";
import { useApp } from "@/context/AppContext";

export default function RevealObserver() {
  const { isDark } = useApp();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.remove("visible");
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, [isDark]);

  return null;
}