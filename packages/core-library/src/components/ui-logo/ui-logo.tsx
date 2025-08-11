import { Component, h, Prop, State } from '@stencil/core';

/**
 * `ui-logo` is a component for rendering a logo image.
 * It allows customization of the logo's width and height.
 */
@Component({
  tag: 'ui-logo',
  styleUrl: 'ui-logo.scss',
  shadow: true,
})
export class UILogo {
  private darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

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

  @State() isDarkMode = false;

  componentWillLoad() {
    this.isDarkMode = this.darkModeQuery.matches;
    this.darkModeQuery.addEventListener('change', this.handleColorSchemeChange);
  }

  disconnectedCallback() {
    this.darkModeQuery.removeEventListener('change', this.handleColorSchemeChange);
  }

  handleColorSchemeChange = (e: MediaQueryListEvent) => {
    this.isDarkMode = e.matches;
  };

  private get src() {
    return this.isDarkMode
      ? 'https://iili.io/FLPqzV2.png'
      : 'https://iili.io/FLPquK7.png';
  }

  render() {
    return <img width={this.width} height={this.height} src={this.src} alt="UI Logo" />;
  }
}
