import { newE2EPage } from '@stencil/core/testing';

describe('ui-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-label></ui-label>');

    const element = await page.find('ui-label');
    expect(element).toHaveClass('hydrated');
  });
});
