import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGradient } from '.';
import IconBankTransfer from '../../../_icons/IconBankTransfer';

const meta = {
  title: 'atoms/buttons/ButtonGradient',
  component: ButtonGradient,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof ButtonGradient>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default button',
    onClick: () => {
      console.log('Default...');
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled button',
    onClick: () => {
      console.log('Disabled...');
    },
  },
};

export const BtnIcon: Story = {
  args: {
    children: <IconBankTransfer />,
    onClick: () => {
      console.log('Disabled...');
    },
  },
};
