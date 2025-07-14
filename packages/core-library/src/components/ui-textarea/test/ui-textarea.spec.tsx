import { newSpecPage } from '@stencil/core/testing';
import { UITextarea } from '../ui-textarea';

describe('ui-textarea', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UITextarea],
      html: `<ui-textarea></ui-textarea>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-textarea>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-textarea>
    `);
  });
});
