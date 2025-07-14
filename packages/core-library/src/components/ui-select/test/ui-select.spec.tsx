import { newSpecPage } from '@stencil/core/testing';
import { UISelect } from '../ui-select';

describe('ui-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UISelect],
      html: `<ui-select></ui-select>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-select>
    `);
  });
});
