import { newSpecPage } from '@stencil/core/testing';
import { UITypography } from '../ui-typography';

describe('ui-typography', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UITypography],
      html: `<ui-typography></ui-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-typography>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-typography>
    `);
  });
});
