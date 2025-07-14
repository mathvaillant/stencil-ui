import { newSpecPage } from '@stencil/core/testing';
import { UIFieldset } from '../ui-fieldset';

describe('ui-fieldset', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UIFieldset],
      html: `<ui-fieldset></ui-fieldset>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-fieldset>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-fieldset>
    `);
  });
});
