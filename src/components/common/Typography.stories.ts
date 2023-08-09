import { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: "Typography",
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    content: "Default",
  },
};

export const H1: Story = {
  args: {
    content: "H1",
    as: "h1",
  },
};

export const H2: Story = {
  args: {
    content: "H2",
    as: "h2",
  },
};

export const H3: Story = {
  args: {
    content: "H3",
    as: "h3",
  },
};

export const H4: Story = {
  args: {
    content: "H4",
    as: "h4",
  },
};

export const H5: Story = {
  args: {
    content: "H5",
    as: "h5",
  },
};

export const H6: Story = {
  args: {
    content: "H6",
    as: "h6",
  },
};
