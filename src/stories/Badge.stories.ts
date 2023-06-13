import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Badge',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Badge',
  },
};
