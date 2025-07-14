import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-textarea',
  styleUrl: 'ui-textarea.scss',
  shadow: false,
})
export class UITextarea {
  @Prop() fieldId?: string;
  @Prop() name?: string;
  @Prop() value?: string;
  @Prop() disabled?: boolean;
  @Prop() readOnly?: boolean;
  @Prop() required?: boolean;
  @Prop() placeholder?: string;
  @Prop() maxlength?: number;
  @Prop() minlength?: number;
  @Prop() rows?: number;

  render() {
    return (
      <textarea
        id={this.fieldId}
        name={this.name}
        value={this.value}
        disabled={this.disabled}
        readOnly={this.readOnly}
        required={this.required}
        placeholder={this.placeholder}
        maxlength={this.maxlength}
        minlength={this.minlength}
        rows={this.rows}
      />
    );
  }
}
