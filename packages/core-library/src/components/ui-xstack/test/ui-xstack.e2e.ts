import { newE2EPage } from '@stencil/core/testing';

describe('ui-xstack', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-xstack></ui-xstack>');

    const element = await page.find('ui-xstack');
    expect(element).toHaveClass('hydrated');
  });
});
