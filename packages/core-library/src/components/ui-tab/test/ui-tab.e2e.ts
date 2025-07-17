import { newE2EPage } from '@stencil/core/testing';

describe('ui-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-tab></ui-tab>');

    const element = await page.find('ui-tab');
    expect(element).toHaveClass('hydrated');
  });
});
