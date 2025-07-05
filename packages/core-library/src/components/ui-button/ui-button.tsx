import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.scss',
  shadow: true,
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

  render() {
    return (
      <button class={this.variant} disabled={this.disabled}>
        <slot />
      </button>
    );
  }
}
