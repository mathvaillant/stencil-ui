import { Component, Element, Event, EventEmitter, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'ui-tab',
  styleUrl: 'ui-tab.scss',
  shadow: false,
})
export class UITab {
  @Element() host: HTMLUiTabElement;
  private context: HTMLUiTabContextElement | null = null;
  private observer: MutationObserver | undefined;

  /**
   * the value of the tab, used to identify it within the tab context.
   * This should match the value of the corresponding `ui-tab-panel` component.
   */
  @Prop({ reflect: true, mutable: true }) value: string;

  /**
   * the label of the tab, displayed in the tab list.
   */
  @Prop() label: string;

  @State() contextId: string = '';
  @State() contextValue: string = '';

  @Event() tabChange: EventEmitter<{ value: string }>;

  componentWillLoad() {
    this.context = this.host.closest('ui-tab-context');

    if (this.context) {
      this.contextId = this.context.getAttribute('data-context-id') || '';

      if (typeof MutationObserver !== 'undefined') {
        this.syncValueFromContext();
        this.observer = new MutationObserver(this.syncValueFromContext.bind(this));
        this.observer.observe(this.context, { attributes: true, attributeFilter: ['value'] });
      }
    }
  }

  disconnectedCallback() {
    this.observer?.disconnect();
  }

  private syncValueFromContext() {
    this.contextValue = this.context.getAttribute('value') || '';
  }

  private updateContextValue(newValue: string) {
    if (this.context) this.context.setAttribute('value', newValue);
  }

  private onClick() {
    this.updateContextValue(this.value);
    this.tabChange.emit({ value: this.value });
  }

  render() {
    const isActive = this.contextValue === this.value;

    return (
      <button
        role="tab"
        id={`tab-${this.contextId}-${this.value}`}
        aria-selected={isActive}
        aria-controls={`tabpanel-${this.contextId}-${this.value}`}
        class={{ active: isActive }}
        onClick={this.onClick.bind(this)}
      >
        <span>{this.label}</span>
      </button>
    );
  }
}
