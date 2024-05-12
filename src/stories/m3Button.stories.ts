import type { Meta, StoryObj } from "@storybook/react";
import { M3Button } from "../Views";

const meta = {
  title: "M3button",
  component: M3Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      source: { type: "code" },
    },
  },
  args: {},
} satisfies Meta<typeof M3Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "outlined",
    size: "medium",
    children: "Button",
  },
};
