import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-input',
  styleUrl: 'ui-input.scss',
  shadow: false,
})
export class UIInput {
  @Prop() fieldId?: string;
  @Prop() name?: string;
  @Prop() type?: HTMLInputElement['type'] = 'text';
  @Prop() value?: string;
  @Prop() disabled?: boolean;
  @Prop() readOnly?: boolean;
  @Prop() required?: boolean;
  @Prop() placeholder?: string;
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
