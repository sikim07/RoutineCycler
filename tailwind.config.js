/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // class 기반 다크모드 활성화
  theme: {
    extend: {
      colors: {
        // CSS 변수를 활용한 테마 색상
        primary: {
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
        },
        background: {
          primary: "var(--color-background-primary)",
          secondary: "var(--color-background-secondary)",
          tertiary: "var(--color-background-tertiary)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
        },
        border: {
          primary: "var(--color-border-primary)",
          secondary: "var(--color-border-secondary)",
        },
      },
      backgroundColor: {
        "gradient-blue": "var(--gradient-blue)",
        "gradient-green": "var(--gradient-green)",
        "gradient-purple": "var(--gradient-purple)",
      },
    },
  },
  plugins: [],
};
