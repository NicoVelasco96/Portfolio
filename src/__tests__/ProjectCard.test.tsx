// src/__tests__/ProjectCard.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/types";

const mockProject: Project = {
  id: "test-project",
  title: "Test Project",
  description: "A project for testing purposes.",
  icon: "🧪",
  iconBg: "bg-accent-green1/50",
  tags: [
    { label: "React", color: "blue" },
    { label: "TypeScript", color: "blue" },
  ],
  href: "https://example.com",
};

describe("ProjectCard", () => {
  it("renders the project title", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("Test Project")).toBeTruthy();
  });

  it("renders the project description", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("A project for testing purposes.")).toBeTruthy();
  });

  it("renders the project icon", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("🧪")).toBeTruthy();
  });

  it("renders all tags", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("React")).toBeTruthy();
    expect(screen.getByText("TypeScript")).toBeTruthy();
  });

  it("renders the project link", () => {
    render(<ProjectCard project={mockProject} />);
    const link = screen.getByText("Ver proyecto ↗");
    expect(link).toBeTruthy();
  });
});
