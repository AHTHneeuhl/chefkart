import type { Meta, StoryObj } from "@storybook/react";

import PopularDish from "./PopularDish";

const meta: Meta<typeof PopularDish> = {
  component: PopularDish,
  title: "PopularDish",
};

export default meta;

type Story = StoryObj<typeof PopularDish>;

export const Default: Story = {
  args: {
    content: "Biryani",
  },
};

export const Active: Story = {
  args: {
    content: "Biryani",
    active: true,
  },
};
