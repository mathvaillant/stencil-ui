import { newSpecPage } from '@stencil/core/testing';
import { UIFieldsetOption } from '../ui-fieldset-option';

describe('ui-fieldset-option', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UIFieldsetOption],
      html: `<ui-fieldset-option></ui-fieldset-option>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-fieldset-option>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-fieldset-option>
    `);
  });
});
