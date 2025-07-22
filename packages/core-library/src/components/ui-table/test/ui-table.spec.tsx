import { newSpecPage } from '@stencil/core/testing';
import { UITable } from '../ui-table';

describe('ui-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UITable],
      html: `<ui-table></ui-table>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-table>
    `);
  });
});
