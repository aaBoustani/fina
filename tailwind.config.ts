import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFA07A',   // Light Salmon
          DEFAULT: '#FF6347', // Tomato
          dark: '#FF4500',    // OrangeRed
        },
        secondary: {
          light: '#90EE90',   // LightGreen
          DEFAULT: '#32CD32', // LimeGreen
          dark: '#228B22',    // ForestGreen
        },
        accent: {
          light: '#FFD700',   // Gold
          DEFAULT: '#FFA500', // Orange
          dark: '#FF8C00',    // DarkOrange
        },
        neutral: {
          light: '#F0F0F0',   // Light Gray
          DEFAULT: '#D3D3D3', // Gray
          dark: '#A9A9A9',    // DarkGray
        },
        text: {
          light: '#4B5563',   // CoolGray 700
          DEFAULT: '#111827', // CoolGray 900
          dark: '#000000',    // Black
        },
        background: {
          light: '#FFFFFF',   // White
          DEFAULT: '#F7F7F7', // Very Light Gray
          dark: '#E5E5E5',    // Light Gray
        },
      },
    },
  },
  plugins: [],
};
export default config;
