import { Component, h } from '@stencil/core';

@Component({
  tag: 'ui-tab-list',
  styleUrl: 'ui-tab.scss',
  shadow: false,
})
export class UITabList {
  render() {
    return (
      <div role="tablist" aria-orientation="horizontal">
        <slot />
      </div>
    );
  }
}
