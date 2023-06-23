import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary: Story = {
  args: {
    type: 'number',
    isReadOnly: false,
    value: 0,
  },
};

export const Secondary: Story = {
  args: {
    type: 'number',
    isReadOnly: true,
    value: 200,
  },
};
