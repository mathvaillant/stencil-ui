import { computePosition, flip, offset, shift, autoUpdate } from '@floating-ui/dom';
import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { UIMenuItem } from './ui-menu.types';

/**
 * `ui-menu` is a component for rendering a menu with items.
 * It supports positioning and dynamic data binding for menu items.
 */
@Component({
  tag: 'ui-menu',
  styleUrl: 'ui-menu.scss',
  shadow: true,
})
export class UIMenu {
  @Element() host: HTMLUiTooltipElement;
  private menuRef: HTMLUListElement;
  private autoUpdateCleanUp: () => void;

  /**
   * Indicates whether the menu is open or closed.
   * @type {boolean}
   * @default false
   */
  @Prop({ mutable: true, reflect: true }) open: boolean = false;

  /**
   * The menu items to display in the menu.
   * Each item should conform to the UIMenuItem interface.
   * @type {UIMenuItem[]}
   * @default []
   */
  @Prop() data?: UIMenuItem[] = [];

  /**
   * Position relative to the viewport where the menu should be displayed.
   *
   * If not provided, the menu will be positioned automatically based on the host element.
   * @type {{ x: number; y: number } | null}
   * @default null
   */
  @Prop() position?: { x: number; y: number } | null = null;

  /**
   * Event emitted when the menu is closed.
   * @event close
   */
  @Event() close: EventEmitter<void>;

  disconnectedCallback() {
    this.autoUpdateCleanUp?.();
  }

  componentDidRender() {
    if (this.open && this.data.length) this.show();
    else this.hide();
  }

  private positionMenu() {
    if (this.position) {
      Object.assign(this.menuRef.style, {
        position: 'fixed',
        left: `${this.position.x}px`,
        top: `${this.position.y}px`,
      });
    } else {
      computePosition(this.host, this.menuRef, {
        placement: 'bottom-start',
        middleware: [offset(6), flip(), shift({ padding: 5 })],
      }).then(({ x, y }) => {
        Object.assign(this.menuRef.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    }
  }

  private show() {
    this.menuRef.style.display = 'block';
    this.menuRef?.showPopover?.();
    this.autoUpdateCleanUp = autoUpdate(
      this.host,
      this.menuRef,
      this.positionMenu.bind(this),
    );
  }

  private hide() {
    this.menuRef.style.display = 'none';
    this.menuRef?.hidePopover?.();
    this.autoUpdateCleanUp?.();
    this.close.emit();
  }

  private onItemClick(event: MouseEvent, item: UIMenuItem) {
    item?.onClick?.(event);
    this.open = false;
  }

  private renderItem(item: UIMenuItem) {
    return (
      <li role="menuitem" id={item.id}>
        <button onClick={(event: MouseEvent) => this.onItemClick(event, item)}>
          {item.icon && <ui-icon name={item.icon} />}
          {item.label}
        </button>
      </li>
    );
  }

  render() {
    return (
      <Host>
        <slot />
        <ul ref={ref => (this.menuRef = ref)} popover="true" role="menu">
          {this.data.map(item => this.renderItem(item))}
        </ul>
        {this.open && <div class="backdrop" onClick={() => (this.open = false)} />}
      </Host>
    );
  }
}
