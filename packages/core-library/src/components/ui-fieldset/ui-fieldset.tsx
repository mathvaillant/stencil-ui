import { Component, h } from '@stencil/core';

/**
 * `ui-fieldset` is a component for rendering a fieldset element.
 * It can be used to group related form controls.
 */
@Component({
  tag: 'ui-fieldset',
  styleUrl: 'ui-fieldset.scss',
  shadow: false,
})
export class UIFieldset {
  render() {
    return (
      <fieldset>
        <slot></slot>
      </fieldset>
    );
  }
}
