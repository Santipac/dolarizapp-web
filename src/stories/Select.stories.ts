import type { Meta, StoryObj } from '@storybook/react';

import Select from './Select';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    options: [
      { value: 'ARS', label: 'ARS' },
      { value: 'USD', label: 'USD' },
    ],
    selectValue: 'USD',
  },
};
