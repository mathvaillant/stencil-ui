import { Component, Prop, h } from '@stencil/core';

/**
 * `ui-select` is a component for rendering a select dropdown.
 * It allows customization of the select element's ID and name.
 */
@Component({
  tag: 'ui-select',
  styleUrl: 'ui-select.scss',
  shadow: false,
})
export class UISelect {
  /** The ID of the select element */
  @Prop() fieldId?: string;
  /** The name of the select element */
  @Prop() name?: string;

  render() {
    return (
      <select id={this.fieldId} name={this.name}>
        <slot />
      </select>
    );
  }
}
