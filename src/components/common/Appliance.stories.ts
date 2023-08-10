import { Meta, StoryObj } from "@storybook/react";
import Appliance from "./Appliance";

const meta: Meta<typeof Appliance> = {
  component: Appliance,
  title: "Appliance",
};

export default meta;

type Story = StoryObj<typeof Appliance>;

export const Refrigerator: Story = {
  args: {
    name: "Refrigerator",
    image: "",
  },
};
