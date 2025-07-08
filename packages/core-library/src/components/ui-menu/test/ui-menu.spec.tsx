import { newSpecPage } from '@stencil/core/testing';
import { UIMenu } from '../ui-menu';

describe('ui-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UIMenu],
      html: `<ui-menu></ui-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-menu>
    `);
  });
});
