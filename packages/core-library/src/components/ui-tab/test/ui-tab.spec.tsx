import { newSpecPage } from '@stencil/core/testing';
import { UITab } from '../ui-tab';

describe('ui-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UITab],
      html: `<ui-tab></ui-tab>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-tab>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-tab>
    `);
  });
});
