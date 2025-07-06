import { newE2EPage } from '@stencil/core/testing';

describe('ui-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-tooltip></ui-tooltip>');

    const element = await page.find('ui-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
