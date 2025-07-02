import { Component, getAssetPath, h, Prop } from '@stencil/core';

@Component({
  tag: 'ui-logo',
  styleUrl: 'ui-logo.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class UILogo {
  @Prop() width?: HTMLImageElement['width'] = 100;
  @Prop() height?: HTMLImageElement['height'] = 100;

  render() {
    return <img width={this.width} height={this.height} src={getAssetPath('assets/logo.png')} alt="UI Logo" />;
  }
}
