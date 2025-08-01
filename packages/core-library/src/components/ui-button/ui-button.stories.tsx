import { Meta, StoryObj } from '@storybook/web-components';
import { UIButton } from './ui-button';
import { icons } from '../ui-icon/icons';

type UIButtonComponent = UIButton & { children?: string };

const meta: Meta<UIButtonComponent> = {
  title: 'Components/Button',
  component: 'ui-button',
  render: ({ children, ...props }) => {
    const button = document.createElement('ui-button');
    if (children) button.innerHTML = children;
    Object.assign(button, props);
    return button;
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
      table: { defaultValue: { summary: 'primary' } },
    },
    disabled: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    iconName: {
      options: Object.keys(icons),
      control: { type: 'select' },
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' },
      table: { defaultValue: { summary: 'button' } },
    },
  },
};

export default meta;
type Story = StoryObj<UIButtonComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
  },
};
