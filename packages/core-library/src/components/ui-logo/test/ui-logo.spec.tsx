import { newSpecPage } from '@stencil/core/testing';
import { UILogo } from '../ui-logo';

describe('ui-logo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UILogo],
      html: `<ui-logo></ui-logo>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-logo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-logo>
    `);
  });
});
