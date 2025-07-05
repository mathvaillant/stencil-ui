import { Component, Host, h } from '@stencil/core';

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
