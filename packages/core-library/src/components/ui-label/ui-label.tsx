import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-label',
  styleUrl: 'ui-label.scss',
  shadow: false,
})
export class UILabel {
  @Prop({ reflect: true }) as?: 'p' | 'label' | 'legend' = 'label';
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
