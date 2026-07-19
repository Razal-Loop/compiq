"use client";

import React from "react";

// ThemeProvider simplified — no dark/light toggle.
// The site uses a permanent warm-paper light theme.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

// Stub hook retained for any legacy imports, but theme is always "light".
export function useTheme() {
  return {
    theme: "light" as const,
    toggleTheme: () => {},
  };
}
