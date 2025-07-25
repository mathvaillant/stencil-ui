import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-fieldset-option',
  styleUrl: 'ui-fieldset-option.scss',
  shadow: false,
})
export class UIFieldsetOption {
  /** The type of input, either 'radio' or 'checkbox'. Defaults to 'radio'. */
  @Prop() type?: 'radio' | 'checkbox' = 'radio';
  /** The name of the input, used to group radio buttons. */
  @Prop() name!: string;
  /** The value of the input, which is submitted with the form. */
  @Prop() value!: string;
  /** The label text for the input. */
  @Prop() label!: string;

  /** Whether the input is checked by default. */
  @Prop() checked?: boolean;
  /** Whether the input is required for form submission. */
  @Prop() required?: boolean;

  render() {
    return (
      <ui-label>
        <input
          type={this.type}
          name={this.name}
          value={this.value}
          checked={this.checked}
          required={this.required}
        />
        {this.label}
      </ui-label>
    );
  }
}
