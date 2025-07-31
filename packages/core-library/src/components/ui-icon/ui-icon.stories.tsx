import { Meta, StoryObj } from '@storybook/web-components';
import { UIIcon } from './ui-icon';
import { icons } from './icons';

const meta: Meta<UIIcon> = {
  title: 'Components/Icon',
  component: 'ui-icon',
  render: props => {
    const icon = document.createElement('ui-icon');
    Object.assign(icon, props);
    return icon;
  },
  argTypes: {
    name: {
      options: Object.keys(icons),
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<UIIcon>;

export const IconStory: Story = {
  name: 'Icon',
  args: { name: 'user' },
};
