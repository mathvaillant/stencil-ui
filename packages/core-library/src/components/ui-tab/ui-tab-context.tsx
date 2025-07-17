import { Component, Host, Prop, State, h } from '@stencil/core';
import { v4 as uuid } from 'uuid';

@Component({
  tag: 'ui-tab-context',
  styleUrl: 'ui-tab.scss',
  shadow: false,
})
export class UITabContext {
  @Prop({ reflect: true, mutable: true }) value: string;
  @State() contextId = `tabctx-${uuid()}`;

  render() {
    return (
      <Host data-context-id={this.contextId}>
        <slot></slot>
      </Host>
    );
  }
}
