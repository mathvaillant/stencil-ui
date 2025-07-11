import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-typography',
  styleUrl: 'ui-typography.scss',
  shadow: true,
})
export class UITypography {
  /**
   * The variant of the typography element.
   * Can be one of 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' or 'p'.
   */
  @Prop() variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' = 'h1';

  render() {
    return (
      <this.variant>
        <slot />
      </this.variant>
    );
  }
}
