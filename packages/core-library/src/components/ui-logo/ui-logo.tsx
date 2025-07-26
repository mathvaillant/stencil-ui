import { Component, getAssetPath, h, Prop } from '@stencil/core';

/**
 * `ui-logo` is a component for rendering a logo image.
 * It allows customization of the logo's width and height.
 */
@Component({
  tag: 'ui-logo',
  styleUrl: 'ui-logo.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class UILogo {
  /**
   * The width of the logo image.
   * Default is 100 pixels.
   */
  @Prop() width?: HTMLImageElement['width'] = 100;

  /**
   * The height of the logo image.
   * Default is 100 pixels.
   */
  @Prop() height?: HTMLImageElement['height'] = 100;

  render() {
    return (
      <img
        width={this.width}
        height={this.height}
        src={getAssetPath('assets/logo.png')}
        alt="UI Logo"
      />
    );
  }
}
