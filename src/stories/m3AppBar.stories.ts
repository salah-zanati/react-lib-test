import type { Meta, StoryObj } from "@storybook/react";
import AppBar from "../Components/AppBar";


const meta = {
  title: "M3Appbar",
  component: AppBar,
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
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: ["AppBar"],
  },
};
