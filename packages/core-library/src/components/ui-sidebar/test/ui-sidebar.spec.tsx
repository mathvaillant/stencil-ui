import { newSpecPage } from '@stencil/core/testing';
import { UISidebar } from '../ui-sidebar';

describe('ui-sidebar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UISidebar],
      html: `<ui-sidebar></ui-sidebar>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-sidebar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-sidebar>
    `);
  });
});
