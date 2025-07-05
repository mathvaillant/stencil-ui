import { Component, Host, h } from '@stencil/core';

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
