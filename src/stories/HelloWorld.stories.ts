import type { Meta, StoryObj } from '@storybook/react';

import { HelloWorld } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/HelloWorld',
  component: HelloWorld,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  args: {
  },
};