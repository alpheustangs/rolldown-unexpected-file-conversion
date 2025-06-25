import { defineConfig } from "rolldown";

export default defineConfig({
    input: "src/index.ts",
    output: [
        {
            format: "esm",
            entryFileNames: "[name].mjs",
            preserveModules: true,
        },
        {
            format: "cjs",
            entryFileNames: "[name].js",
            preserveModules: true,
        }
    ],
});
