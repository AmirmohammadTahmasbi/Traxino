/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        yekanbakh: ["YekanBakh", "sans-serif"],
      },
      colors: {
        primary: "#1F2937", // تیره، برای هدر و بک‌گراند اصلی
        secondary: "#F97316", // آبی روشن، لینک‌ها و CTAها
        accent: "#3B82F6", // نارنجی/طلایی برای تاکید و هور
        background: "#111827", // بک‌گراند کل سایت
        textPrimary: "#F9FAFB", // متن اصلی
        textSecondary: "#9CA3AF", // متن ثانویه
      },
    },
  },
  plugins: [],
};
