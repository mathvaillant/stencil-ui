import { Component, Prop, h } from '@stencil/core';
import { UIIcon } from '../ui-icon/ui-icon';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.scss',
  shadow: false,
})
export class UIButton {
  /**
   * The variant of the button.
   * Can be 'primary', 'secondary', or 'tertiary'.
   * Defaults to 'primary'.
   */
  @Prop() variant?: 'primary' | 'secondary' | 'tertiary' = 'primary';

  /**
   * Whether the button is disabled.
   * Defaults to false.
   */
  @Prop() disabled: boolean = false;

  /**
   * The name of the icon to render inside the button on the left side.
   * If provided, the button will render an `ui-icon` icon.
   */
  @Prop() iconName?: UIIcon['name'];

  /**
   * The type of the button.
   * Can be 'button', 'submit', or 'reset'.
   * Defaults to 'button'.
   */
  @Prop() type?: 'button' | 'submit' | 'reset' = 'button';

  render() {
    return (
      <button class={this.variant} disabled={this.disabled} type={this.type}>
        {this.iconName && <ui-icon name={this.iconName} />}
        <slot />
      </button>
    );
  }
}
