import { Component, Element, Prop, State, h } from '@stencil/core';

/**
 * `ui-tab-panel` is a component for rendering a tab panel within a tab context.
 * It displays content associated with a specific tab.
 * The panel is shown when the corresponding tab is active.
 */
@Component({
  tag: 'ui-tab-panel',
  styleUrl: 'ui-tab.scss',
  shadow: false,
})
export class UITabPanel {
  @Element() host: HTMLUiTabElement;
  private context: HTMLUiTabContextElement | null = null;
  private observer: MutationObserver | undefined;

  /**
   * the value of the tab panel, used to identify it within the tab context.
   * This should match the value of the corresponding `ui-tab` component.
   */
  @Prop({ reflect: true, mutable: true }) value: string;

  @State() contextId: string = '';
  @State() contextValue: string = '';

  componentWillLoad() {
    this.context = this.host.closest('ui-tab-context');

    if (this.context) {
      this.contextId = this.context.getAttribute('data-context-id') || '';

      if (typeof MutationObserver !== 'undefined') {
        this.syncValueFromContext();
        this.observer = new MutationObserver(this.syncValueFromContext.bind(this));
        this.observer.observe(this.context, {
          attributes: true,
          attributeFilter: ['value'],
        });
      }
    }
  }

  disconnectedCallback() {
    this.observer?.disconnect();
  }

  private syncValueFromContext() {
    this.contextValue = this.context.getAttribute('value') || '';
  }

  render() {
    const isActive = this.contextValue === this.value;

    return (
      <div
        role="tabpanel"
        id={`tabpanel-${this.contextId}-${this.value}`}
        aria-labelledby={`tab-${this.contextId}-${this.value}`}
        aria-hidden={!isActive}
        hidden={!isActive}
        class={{ active: isActive }}
      >
        <slot />
      </div>
    );
  }
}
