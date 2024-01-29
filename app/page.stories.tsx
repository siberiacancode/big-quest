import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui';

const meta: Meta<typeof Button> = {
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button>Button</Button>
};
