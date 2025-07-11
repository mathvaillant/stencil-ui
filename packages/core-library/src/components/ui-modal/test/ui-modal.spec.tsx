import { newSpecPage } from '@stencil/core/testing';
import { UIModal } from '../ui-modal';

describe('ui-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UIModal],
      html: `<ui-modal></ui-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-modal>
    `);
  });
});
