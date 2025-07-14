import { Component, h } from '@stencil/core';

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
