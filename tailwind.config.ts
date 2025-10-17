import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base / Surface (subtle warm peachy tones)
        bg: "#FFF6EC",
        "bg-muted": "#FFF0E0",
        border: "#FFE4CC",

        // Text
        ink: "#0F172A",
        "ink-muted": "#334155",

        // Brand Colors (from logo)
        brand: {
          blue: "#003D7A",
          "blue-light": "#0052A3",
          "blue-dark": "#002952",
          "blue-50": "#E6EEF7",
          orange: "#FF6B35",
          "orange-light": "#FF8556",
          "orange-dark": "#E55520",
          "orange-50": "#FFF3EE",
        },

        // Legacy aliases (keep for compatibility)
        primary: {
          50: "#E6EEF7",
          600: "#003D7A",
          700: "#002952",
        },

        accent: {
          50: "#FFF3EE",
          500: "#FF6B35",
          600: "#E55520",
        },

        // Feedback
        success: "#059669",
        warning: "#F59E0B",
        error: "#E11D48",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
        heading: [
          "Plus Jakarta Sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
        handwritten: ["var(--font-handwritten)", "cursive"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
      },
      lineHeight: {
        heading: "1.2",
        body: "1.6",
      },
    },
  },
  plugins: [],
} satisfies Config;
