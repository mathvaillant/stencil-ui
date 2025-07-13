import { newSpecPage } from '@stencil/core/testing';
import { UIInput } from '../ui-input';

describe('ui-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UIInput],
      html: `<ui-input></ui-input>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-input>
    `);
  });
});
