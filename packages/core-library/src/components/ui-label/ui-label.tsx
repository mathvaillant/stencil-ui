import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-label',
  styleUrl: 'ui-label.scss',
  shadow: false,
})
export class UILabel {
  /**
   * The HTML element to render as.
   * Can be 'p', 'label', or 'legend'.
   */
  @Prop({ reflect: true }) as?: 'p' | 'label' | 'legend' = 'label';

  /**
   * The `for` attribute for the label element.
   * This is only applicable when `as` is 'label'.
   */
  @Prop() htmlFor?: string;

  render() {
    const Tag = this.as;

    return (
      <Tag {...(this.as === 'label' && this.htmlFor ? { htmlFor: this.htmlFor } : {})}>
        <slot />
      </Tag>
    );
  }
}
