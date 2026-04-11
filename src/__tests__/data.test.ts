// src/__tests__/data.test.ts
import { describe, it, expect } from "vitest";
import { projects, education, stats, techPills, navLinks } from "@/data/portfolio";

describe("projects data", () => {
  it("has at least one project", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("every project has required fields", () => {
    projects.forEach((p) => {
      expect(p.id).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.icon).toBeTruthy();
      expect(Array.isArray(p.tags)).toBe(true);
    });
  });

  it("every tag has a label and valid color", () => {
    const validColors = ["blue", "green", "teal", "pink", "cream", "default"];
    projects.forEach((p) => {
      p.tags.forEach((tag) => {
        expect(tag.label).toBeTruthy();
        expect(validColors).toContain(tag.color);
      });
    });
  });
});

describe("education data", () => {
  it("has at least one entry", () => {
    expect(education.length).toBeGreaterThan(0);
  });

  it("every education entry has required fields", () => {
    education.forEach((e) => {
      expect(e.id).toBeTruthy();
      expect(e.period).toBeTruthy();
      expect(e.title).toBeTruthy();
      expect(e.institution).toBeTruthy();
      expect(Array.isArray(e.subjects)).toBe(true);
      expect(e.subjects.length).toBeGreaterThan(0);
    });
  });
});

describe("stats data", () => {
  it("has exactly 4 stats", () => {
    expect(stats).toHaveLength(4);
  });

  it("every stat has a value and label", () => {
    stats.forEach((s) => {
      expect(s.value).toBeTruthy();
      expect(s.label).toBeTruthy();
      expect(s.bg).toBeTruthy();
    });
  });
});

describe("techPills data", () => {
  it("includes all required technologies", () => {
    const labels = techPills.map((p) => p.label);
    expect(labels).toContain("React");
    expect(labels).toContain("Next.js");
    expect(labels).toContain("TypeScript");
    expect(labels).toContain("Tailwind CSS");
    expect(labels).toContain("Astro");
    expect(labels).toContain("Vitest");
  });
});

describe("navLinks data", () => {
  it("all links start with #", () => {
    navLinks.forEach((link) => {
      expect(link.href.startsWith("#")).toBe(true);
    });
  });

  it("all links have a label", () => {
    navLinks.forEach((link) => {
      expect(link.label).toBeTruthy();
    });
  });
});
