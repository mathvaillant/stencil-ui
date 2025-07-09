import { Component, Host, Prop, h } from '@stencil/core';
import { UISidebarItem } from './ui-sidebar.types';

@Component({
  tag: 'ui-sidebar',
  styleUrl: 'ui-sidebar.scss',
  shadow: true,
})
export class UISidebar {
  /**
   * Indicates whether the sidebar is open or closed.
   * @type {boolean}
   * @default false
   */
  @Prop({ mutable: true, reflect: true }) open: boolean = false;

  /**
   * The items to display in the sidebar.
   * @type {UISidebarItem[]}
   * @default []
   */
  @Prop() items: UISidebarItem[] = [];

  private renderItem(item: UISidebarItem) {
    return (
      <li role="menuitem" class={{ active: item.active }}>
        <button onClick={item.onClick}>
          {item.icon && <ui-icon name={item.icon} />}
          {this.open && item.label}
        </button>
      </li>
    );
  }

  render() {
    return (
      <Host>
        <aside class={{ open: this.open }} role="navigation">
          <ui-logo width={50} height={50} />
          <ul role="menu">{this.items.map(item => this.renderItem(item))}</ul>
          <ui-button onClick={() => (this.open = !this.open)} iconName={this.open ? 'previous-double-arrow' : 'next-double-arrow'} />
        </aside>
      </Host>
    );
  }
}
