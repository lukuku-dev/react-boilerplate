import { default as react } from "@vitejs/plugin-react";
import { default as reactSWC } from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      // dev specific config
      plugins: [
        react({
          babel: {
            plugins: [
              [
                "babel-plugin-styled-components",
                {
                  displayName: true,
                  fileName: false,
                },
              ],
            ],
          },
        }),
        tsconfigPaths(),
      ],
    };
  } else {
    // command === 'build'
    return {
      // build specific config
      plugins: [reactSWC()],
    };
  }
});
