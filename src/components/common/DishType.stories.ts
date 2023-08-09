import type { Meta, StoryObj } from "@storybook/react";

import DishType from "./DishType";

const meta: Meta<typeof DishType> = {
  component: DishType,
  title: "DishType",
};

export default meta;

type Story = StoryObj<typeof DishType>;

export const Default: Story = {
  args: {
    content: "Default",
  },
};

export const Active: Story = {
  args: {
    content: "Active",
    active: true,
  },
};
