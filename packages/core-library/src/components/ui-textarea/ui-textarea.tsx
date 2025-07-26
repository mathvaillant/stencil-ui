import { Component, Prop, h } from '@stencil/core';

/**
 * `ui-textarea` is a component for rendering a textarea element.
 * It allows customization of the textarea's ID, name, value, and other attributes.
 */
@Component({
  tag: 'ui-textarea',
  styleUrl: 'ui-textarea.scss',
  shadow: false,
})
export class UITextarea {
  /** The ID of the textarea, used for form submission and accessibility. */
  @Prop() fieldId?: string;
  /** Additional properties for the textarea element. */
  @Prop() name?: string;
  /** The value of the textarea, used for form submission. */
  @Prop() value?: string;
  /** Whether the textarea is disabled, preventing user interaction. */
  @Prop() disabled?: boolean;
  /** Whether the textarea is read-only, preventing user input but allowing selection. */
  @Prop() readOnly?: boolean;
  /** Whether the textarea is required for form submission. */
  @Prop() required?: boolean;
  /** Placeholder text displayed when the textarea is empty. */
  @Prop() placeholder?: string;
  /** Maximum number of characters allowed in the textarea. */
  @Prop() maxlength?: number;
  /** Minimum number of characters required in the textarea. */
  @Prop() minlength?: number;
  /** Number of rows in the textarea, controlling its height. */
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
