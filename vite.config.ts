import { default as react } from "@vitejs/plugin-react";
import { default as reactSWC } from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

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
