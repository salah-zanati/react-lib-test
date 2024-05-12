import type { Preview } from "@storybook/react";
import ThemeDecorator from "./decorator";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  (story) => <ThemeDecorator>{story()}</ThemeDecorator>,
];
