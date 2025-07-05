import { newSpecPage } from '@stencil/core/testing';
import { UIYStack } from '../ui-ystack';

describe('ui-ystack', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UIYStack],
      html: `<ui-ystack></ui-ystack>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-ystack>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-ystack>
    `);
  });
});
