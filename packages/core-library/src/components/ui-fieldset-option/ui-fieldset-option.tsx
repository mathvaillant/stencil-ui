import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-fieldset-option',
  styleUrl: 'ui-fieldset-option.scss',
  shadow: false,
})
export class UIFieldsetOption {
  @Prop() type?: 'radio' | 'checkbox' = 'radio';
  @Prop() name!: string;
  @Prop() value!: string;
  @Prop() label!: string;

  @Prop() checked?: boolean;
  @Prop() required?: boolean;

  render() {
    return (
      <ui-label>
        <input type={this.type} name={this.name} value={this.value} checked={this.checked} required={this.required} />
        {this.label}
      </ui-label>
    );
  }
}
