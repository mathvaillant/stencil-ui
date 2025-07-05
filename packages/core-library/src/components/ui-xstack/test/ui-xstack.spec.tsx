import { newSpecPage } from '@stencil/core/testing';
import { UIXStack } from '../ui-xstack';

describe('ui-xstack', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UIXStack],
      html: `<ui-xstack></ui-xstack>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-xstack>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-xstack>
    `);
  });
});
