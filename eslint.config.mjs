import next from "eslint-config-next";

/** ESLint-configuratie (flat config) voor Next.js 16 met TypeScript. */
const config = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  ...next,
];

export default config;
