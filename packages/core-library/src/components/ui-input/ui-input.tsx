import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-input',
  styleUrl: 'ui-input.scss',
  shadow: false,
})
export class UIInput {
  /** The ID of the input field */
  @Prop() fieldId?: string;
  /** The name of the input field */
  @Prop() name?: string;
  /** The type of the input field */
  @Prop() type?: HTMLInputElement['type'] = 'text';
  /** The value of the input field */
  @Prop() value?: string;
  /** If the input is disabled */
  @Prop() disabled?: boolean;
  /** If the input is read-only */
  @Prop() readOnly?: boolean;
  /** If the input is required */
  @Prop() required?: boolean;
  /** Placeholder text for the input field */
  @Prop() placeholder?: string;
  /** Autocomplete attribute for the input field */
  @Prop() autocomplete?: string;

  render() {
    return (
      <input
        id={this.fieldId}
        name={this.name}
        type={this.type}
        value={this.value}
        disabled={this.disabled}
        readOnly={this.readOnly}
        required={this.required}
        placeholder={this.placeholder}
        autocomplete={this.autocomplete}
      />
    );
  }
}
