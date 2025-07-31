import { Meta, StoryObj } from '@storybook/web-components';
import { UITypography } from './ui-typography';

type UITypographyComponent = UITypography & { children?: string };

const meta: Meta<UITypographyComponent> = {
  title: 'Components/Typography',
  component: 'ui-typography',
  render: ({ children, ...props }) => {
    const typography = document.createElement('ui-typography');
    if (children) typography.innerHTML = children;
    Object.assign(typography, props);
    return typography;
  },
  argTypes: {
    variant: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
      control: { type: 'select' },
      table: { defaultValue: { summary: 'h1' } },
    },
  },
};

export default meta;
type Story = StoryObj<UITypographyComponent>;

export const TypographyStory: Story = {
  name: 'Typography',
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};
