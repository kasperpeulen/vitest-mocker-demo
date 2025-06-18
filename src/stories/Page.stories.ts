import type { Meta, StoryObj } from "@storybook/react-vite";

import { mocked } from "storybook/test";

import { Page } from "./Page";
import { getTodos } from "../utils/todos";

const meta = {
  title: "Example/Page",
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  beforeEach() {
    mocked(getTodos).mockResolvedValue(["mocked in meta"]);
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OneTodo: Story = {
  beforeEach() {
    mocked(getTodos).mockResolvedValue(["one todo"]);
  },
};

export const SomeTodos: Story = {
  beforeEach() {
    mocked(getTodos).mockResolvedValue(["some", "todos"]);
  },
};
