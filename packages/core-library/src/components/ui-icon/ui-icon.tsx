import { Component, Prop, h } from '@stencil/core';
import { IconName, icons } from './icons';

@Component({
  tag: 'ui-icon',
  styleUrl: 'ui-icon.scss',
  shadow: true,
})
export class UIIcon {
  /**
   * The name of the icon to render.
   */
  @Prop() name!: IconName;

  render() {
    if (!this.name || !icons[this.name]) return null;

    return (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d={icons[this.name]}></path>
      </svg>
    );
  }
}
