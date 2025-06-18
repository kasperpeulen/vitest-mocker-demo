import type { Preview } from "@storybook/react-vite";
import { vi } from "#vi";
import { mocked } from "storybook/test";
import { getTodos } from "../src/utils/todos";

vi.mock(import("../src/utils/todos"), { spy: true });

const preview: Preview = {
  beforeEach() {
    mocked(getTodos).mockResolvedValue(["mocked in preview"]);
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
