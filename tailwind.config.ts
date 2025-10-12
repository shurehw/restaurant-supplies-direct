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
        // Base / Surface
        bg: "#FFFFFF",
        "bg-muted": "#F8FAFC",
        border: "#E2E8F0",

        // Text
        ink: "#0F172A",
        "ink-muted": "#334155",

        // Primary (Blue)
        primary: {
          50: "#EFF6FF",
          600: "#2563EB",
          700: "#1D4ED8",
        },

        // Accent (Orange)
        accent: {
          50: "#FFF7ED",
          500: "#F97316",
          600: "#EA580C",
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
