import { newE2EPage } from '@stencil/core/testing';

describe('ui-ystack', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-ystack></ui-ystack>');

    const element = await page.find('ui-ystack');
    expect(element).toHaveClass('hydrated');
  });
});
