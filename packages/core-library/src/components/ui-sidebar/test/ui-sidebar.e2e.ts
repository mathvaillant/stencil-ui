import { newE2EPage } from '@stencil/core/testing';

describe('ui-sidebar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-sidebar></ui-sidebar>');

    const element = await page.find('ui-sidebar');
    expect(element).toHaveClass('hydrated');
  });
});
