import { Component, Host, h } from '@stencil/core';

/**
 * `ui-ystack` is a component for rendering a vertical stack of elements.
 * It can be used to align items in a column with customizable spacing and alignment.
 */
@Component({
  tag: 'ui-ystack',
  styleUrl: 'ui-ystack.scss',
  shadow: true,
})
export class UIYStack {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
