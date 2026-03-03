import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, swal: "readonly" } },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  {
    ignores: [
      "node_modules",
      "smart-login-system/js/bootstrap.bundle.js",
      "smart-login-system/js/sweetalert.min.js",
    ],
  },
]);
