import type { Meta, StoryObj } from '@storybook/react';
import { InputGroup } from '.';

const meta: Meta<typeof InputGroup> = {
  title: 'components/shared/InputGroup',
  component: InputGroup,
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Input Group',
  },
};
