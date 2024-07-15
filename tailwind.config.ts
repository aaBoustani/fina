import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
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
          light: '#F5DEB3',   // Beige
          DEFAULT: '#FFC080', // Tangerine
          dark: '#FFA07A',    // Light Salmon (same as primary light)
        },
        accent: {
          light: '#FFC67D',   // Peach
          DEFAULT: '#FF99CC', // Pastel Orange
          dark: '#FF8C69',    // Burnt Orange
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
  plugins: [
    require('flowbite/plugin'),
  ],
};
export default config;
