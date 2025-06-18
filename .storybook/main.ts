import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import { mockerPlugin } from "@vitest/mocker/node";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@chromatic-com/storybook", "@storybook/addon-vitest"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: (config) => {
    return mergeConfig(config, {
      plugins: [
        mockerPlugin({
          // this filter is needed because otherwise the plugin
          // is transforming code to references globalThis["__vitest_mocker__"]
          // before that reference is being added by registerModuleMocker
          filter: (id) => !id.includes("@vitest/mocker"),
          hoistMocks: {
            hoistedModule: "#vi",
          },
        } as Parameters<typeof mockerPlugin>[0] & {
          filter: (id: string) => boolean;
        }),
      ],
    });
  },
};
export default config;
