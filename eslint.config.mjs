import { browser } from "globals";
import pluginJs from "@eslint/eslint-plugin";
import tseslint from "@typescript-eslint/eslint-plugin";

export default {
  globals: {
    browser
  },
  extends: [
    "plugin:js/recommended",
    "plugin:@typescript-eslint/recommended"
  ]
};
