import { newSpecPage } from '@stencil/core/testing';
import { UILabel } from '../ui-label';

describe('ui-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UILabel],
      html: `<ui-label></ui-label>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-label>
    `);
  });
});
