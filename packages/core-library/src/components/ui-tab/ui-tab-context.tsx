import { Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { v4 as uuid } from 'uuid';

/**
 * `ui-tab-context` is a component that provides a context for tab navigation.
 * It allows for managing the active tab and emits events when tabs are changed.
 */
@Component({
  tag: 'ui-tab-context',
  styleUrl: 'ui-tab.scss',
  shadow: false,
})
export class UITabContext {
  /** The value of the tab context, used to identify the active tab. */
  @Prop({ reflect: true, mutable: true }) value: string;

  @State() contextId = `tabctx-${uuid()}`;

  /**
   * Event emitted when a `ui-tab` is clicked, providing the value of the tab.
   */
  @Event() tabChange: EventEmitter<{ value: string }>;

  render() {
    return (
      <Host data-context-id={this.contextId}>
        <slot></slot>
      </Host>
    );
  }
}
