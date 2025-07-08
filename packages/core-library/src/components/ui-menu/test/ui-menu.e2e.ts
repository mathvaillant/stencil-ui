import { newE2EPage } from '@stencil/core/testing';

describe('ui-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-menu></ui-menu>');

    const element = await page.find('ui-menu');
    expect(element).toHaveClass('hydrated');
  });
});
