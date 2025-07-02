import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-icon',
  styleUrl: 'ui-icon.scss',
  shadow: false,
})
export class UIIcon {
  /**
  * The name of the icon to display.
  * This should match the name used in Material Symbols.
  * Available Icon Names can be found here: 
  https://fonts.google.com/icons
  
  * @example
  * <ui-icon name="home"></ui-icon>
  * <ui-icon name="settings"></ui-icon>
  */
  @Prop() name: string;

  render() {
    return <span class="material-symbols-outlined">{this.name}</span>;
  }
}
