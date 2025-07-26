import { Component, Event, EventEmitter, h, Method, Prop } from '@stencil/core';

/**
 * `ui-modal` is a component for rendering a modal dialog.
 * It supports opening and closing the modal, and allows for custom header and footer content.
 */
@Component({
  tag: 'ui-modal',
  styleUrl: 'ui-modal.scss',
  shadow: true,
})
export class UIModal {
  private dialogRef: HTMLDialogElement;

  /**
   * Indicates whether the modal is open or closed.
   * @type {boolean}
   * @default false
   */
  @Prop({ mutable: true, reflect: true }) open: boolean = false;

  /**
   * The title of the modal header.
   * This is displayed at the top of the modal.
   * @type {string}
   * @default undefined
   */
  @Prop() headerTitle?: string;

  /**
   * The name of the slot for the footer content.
   * This allows for custom footer content to be passed into the modal.
   * @type {string}
   * @default 'footer-slot'
   */
  @Prop() footerSlotName?: string = 'footer-slot';

  /**
   * Event emitted when the modal is closed.
   * @event close
   */
  @Event() close: EventEmitter<void>;

  componentDidRender() {
    if (this.open) this.showModal();
    else this.closeModal();
  }

  /**
   * Opens the modal dialog.
   * This method is called to display the modal when the `open` property is set to true.
   * It uses the native `showModal` method of the HTMLDialogElement.
   */
  @Method()
  async showModal() {
    this.dialogRef.showModal?.();
    this.open = true;
  }

  /**
   * Closes the modal dialog.
   * This method is called to hide the modal when the `open` property is set to false.
   * It uses the native `close` method of the HTMLDialogElement.
   */
  @Method()
  async closeModal() {
    this.dialogRef.close?.();
    this.open = false;
    this.close.emit();
  }

  render() {
    return (
      <dialog ref={ref => (this.dialogRef = ref)}>
        <header>
          <ui-typography variant="h4">{this.headerTitle}</ui-typography>
          <button onClick={this.closeModal.bind(this)}>
            <ui-icon name="close" />
          </button>
        </header>
        <section>
          <slot />
        </section>
        <footer>
          <slot name={this.footerSlotName} />
        </footer>
      </dialog>
    );
  }
}
