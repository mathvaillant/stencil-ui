import { newSpecPage } from '@stencil/core/testing';
import { UITooltip } from '../ui-tooltip';

describe('ui-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UITooltip],
      html: `<ui-tooltip></ui-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-tooltip>
    `);
  });
});
