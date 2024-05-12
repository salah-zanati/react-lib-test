import type { Meta, StoryObj } from "@storybook/react";
import IconButtonView from "../Views/OldComponents/IconButtonView";


const meta = {
  title: "iconButton",
  component: IconButtonView,
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
} satisfies Meta<typeof IconButtonView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
//   args: {
//     children: ["IconButton"],
//   },
};
