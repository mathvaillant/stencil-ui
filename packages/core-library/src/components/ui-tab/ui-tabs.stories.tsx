import { Meta, StoryObj } from '@storybook/web-components';
import { UITabContext } from './ui-tab-context';

const meta: Meta<UITabContext> = {
  title: 'Components/Tabs',
  component: 'ui-tab-context',
};

export default meta;
type Story = StoryObj<UITabContext>;

export const Tabs: Story = {
  render: () => `
    <ui-tab-context value="1">
      <ui-tab-list>
        <ui-tab value="1" label="Tab 1"></ui-tab>
        <ui-tab value="2" label="Tab 2"></ui-tab>
        <ui-tab value="3" label="Tab 3"></ui-tab>
        <ui-tab value="4" label="Tab 4"></ui-tab>
        <ui-tab value="5" label="Tab 5"></ui-tab>
      </ui-tab-list>
      <ui-tab-panel value="1">Content for Tab 1</ui-tab-panel>
      <ui-tab-panel value="2">Content for Tab 2</ui-tab-panel>
      <ui-tab-panel value="3">Content for Tab 3</ui-tab-panel>
      <ui-tab-panel value="4">Content for Tab 4</ui-tab-panel>
      <ui-tab-panel value="5">Content for Tab 5</ui-tab-panel>
     </ui-tab-context>
  `,
};
