import { Component, h } from '@stencil/core';

/**
 * `ui-tab-list` is a component for rendering a list of tabs.
 * It serves as a container for individual `ui-tab` components.
 */
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
