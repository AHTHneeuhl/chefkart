import { Meta, StoryObj } from "@storybook/react";
import Stat from "./Stat";

const meta: Meta<typeof Stat> = {
  component: Stat,
  title: "Stat",
};

export default meta;

type Story = StoryObj<typeof Stat>;

export const Vegetables: Story = {
  args: {
    name: "Tomato",
    quantity: "10 Pc",
  },
};

export const Spices: Story = {
  args: {
    name: "Coriander",
    quantity: "100 gram",
  },
};
