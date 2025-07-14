import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-select',
  styleUrl: 'ui-select.scss',
  shadow: false,
})
export class UISelect {
  @Prop() fieldId?: string;
  @Prop() name?: string;

  render() {
    return (
      <select id={this.fieldId} name={this.name}>
        <slot />
      </select>
    );
  }
}
