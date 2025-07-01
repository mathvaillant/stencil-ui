import { newE2EPage } from '@stencil/core/testing';

describe('ui-typography', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-typography></ui-typography>');

    const element = await page.find('ui-typography');
    expect(element).toHaveClass('hydrated');
  });
});
