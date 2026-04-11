// src/__tests__/utils.test.ts
import { describe, it, expect } from "vitest";
import { getTagClasses, cn } from "@/lib/utils";
import type { TagColor } from "@/types";

describe("getTagClasses", () => {
  it("returns blue classes for 'blue' color", () => {
    const result = getTagClasses("blue");
    expect(result).toContain("text-[#2a5078]");
  });

  it("returns pink classes for 'pink' color", () => {
    const result = getTagClasses("pink");
    expect(result).toContain("text-[#7a2840]");
  });

  it("returns green classes for 'green' color", () => {
    const result = getTagClasses("green");
    expect(result).toContain("text-[#1a5028]");
  });

  it("returns teal classes for 'teal' color", () => {
    const result = getTagClasses("teal");
    expect(result).toContain("text-[#1a5040]");
  });

  it("returns cream classes for 'cream' color", () => {
    const result = getTagClasses("cream");
    expect(result).toContain("text-[#7a5010]");
  });

  it("returns default classes for 'default' color", () => {
    const result = getTagClasses("default");
    expect(result).toContain("text-[#3a5040]");
  });

  it("returns a non-empty string for all valid colors", () => {
    const colors: TagColor[] = ["blue", "green", "teal", "pink", "cream", "default"];
    colors.forEach((color) => {
      expect(getTagClasses(color)).toBeTruthy();
    });
  });
});

describe("cn", () => {
  it("joins class strings", () => {
    expect(cn("a", "b", "c")).toBe("a b c");
  });

  it("filters out falsy values", () => {
    expect(cn("a", false, null, undefined, "b")).toBe("a b");
  });

  it("returns empty string when all values are falsy", () => {
    expect(cn(false, null, undefined)).toBe("");
  });

  it("handles a single class", () => {
    expect(cn("only")).toBe("only");
  });
});
