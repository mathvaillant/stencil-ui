import { arrow, computePosition, flip, offset, shift, autoUpdate } from '@floating-ui/dom';
import { Component, Element, Host, Listen, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'ui-tooltip',
  styleUrl: 'ui-tooltip.scss',
  shadow: true,
})
export class UITooltip {
  @Element() host: HTMLUiTooltipElement;
  private tooltipRef: HTMLParagraphElement;
  private arrowRef: HTMLSpanElement;
  private autoUpdateCleanUp: () => void;

  /**
   * The text to display in the tooltip.
   * This text will be shown when the user hovers over the component.
   *
   * @example
   * <ui-tooltip text="This is a tooltip!"></ui-tooltip>
   */
  @Prop() text!: string;

  @State() isUsingTouch = false;

  disconnectedCallback() {
    this.autoUpdateCleanUp?.();
  }

  @Listen('touchstart')
  onTouchStart() {
    this.isUsingTouch = true;
  }

  private positionTooltip() {
    computePosition(this.host, this.tooltipRef, {
      placement: 'bottom',
      middleware: [offset(6), flip(), shift({ padding: 5 }), arrow({ element: this.arrowRef })],
    }).then(({ x, y, placement, middlewareData }) => {
      Object.assign(this.tooltipRef.style, {
        left: `${x}px`,
        top: `${y}px`,
      });

      // Accessing the data
      const { x: arrowX, y: arrowY } = middlewareData.arrow;

      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[placement.split('-')[0]];

      Object.assign(this.arrowRef.style, {
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [staticSide]: '-4px',
      });
    });
  }

  private show() {
    if (this.isUsingTouch) return this.hide();
    this.tooltipRef.style.display = 'block';
    this.tooltipRef?.showPopover?.();
    this.autoUpdateCleanUp = autoUpdate(this.host, this.tooltipRef, this.positionTooltip.bind(this));
  }

  private hide() {
    this.tooltipRef.style.display = 'none';
    this.tooltipRef?.hidePopover?.();
    this.autoUpdateCleanUp?.();
  }

  render() {
    return (
      <Host onMouseEnter={this.show.bind(this)} onMouseLeave={this.hide.bind(this)}>
        <slot />
        <p ref={ref => (this.tooltipRef = ref)} popover="true" role="tooltip">
          {this.text}
          <span ref={ref => (this.arrowRef = ref)} />
        </p>
      </Host>
    );
  }
}
