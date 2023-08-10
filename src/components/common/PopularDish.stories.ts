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
    name: "Biryani",
    image:
      "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
  },
};

export const Active: Story = {
  args: {
    name: "Biryani",
    image:
      "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
    active: true,
  },
};
