import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button'; // adjust the path as needed

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    hoverColor: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
    radius: { control: 'text' },
    shadow: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Click Me',
    backgroundColor: '#007BFF',
    color: '#ffffff',
    hoverColor: '#0056b3',
    width: '150px',
    height: '40px',
    radius: '5px',
    shadow: '0px 2px 5px rgba(0,0,0,0.2)',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    label: 'Disabled Button',
  },
};
