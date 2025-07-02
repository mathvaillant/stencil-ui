import { newE2EPage } from '@stencil/core/testing';

describe('ui-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-logo></ui-logo>');

    const element = await page.find('ui-logo');
    expect(element).toHaveClass('hydrated');
  });
});
