import { Meta, StoryObj } from '@storybook/web-components';
import { UIFieldset } from './ui-fieldset';

type UIFieldsetComponent = UIFieldset & { children?: string };

const meta: Meta<UIFieldsetComponent> = {
  title: 'Components/Fieldset',
  component: 'ui-fieldset',
};

export default meta;
type Story = StoryObj<UIFieldsetComponent>;

export const Checkbox: Story = {
  render: () => `
    <ui-fieldset>
      <ui-label as="legend">Languages</ui-label>

      <ui-fieldset-option 
        type="checkbox"
        name="can-speak-english"
        label="English"
        value="english"
      ></ui-fieldset-option>  

      <ui-fieldset-option 
        type="checkbox"
        name="can-speak-spanish"
        label="Spanish"
        value="spanish"
      ></ui-fieldset-option>

      <ui-fieldset-option 
        type="checkbox"
        name="can-speak-french"
        label="French"
        value="french"
      ></ui-fieldset-option>
    </ui-fieldset>
  `,
};

export const Radio: Story = {
  render: () => `
      <ui-fieldset>
        <ui-label as="legend">I agree to the terms and conditions</ui-label>

        <ui-fieldset-option 
          type="radio"
          name="terms"
          label="Yes"
          value="agree"
        ></ui-fieldset-option>

        <ui-fieldset-option 
          type="radio"
          name="terms"
          label="No"
          value="disagree"
        ></ui-fieldset-option>
      </ui-fieldset>
    `,
};
