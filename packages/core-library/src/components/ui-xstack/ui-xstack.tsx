import { Component, Host, h } from '@stencil/core';

/**
 * `ui-xstack` is a component for rendering a horizontal stack of elements.
 * It can be used to align items in a row with customizable spacing and alignment.
 */
@Component({
  tag: 'ui-xstack',
  styleUrl: 'ui-xstack.scss',
  shadow: true,
})
export class UIXStack {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
