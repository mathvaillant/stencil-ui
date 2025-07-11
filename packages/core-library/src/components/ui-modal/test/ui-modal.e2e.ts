import { newE2EPage } from '@stencil/core/testing';

describe('ui-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-modal></ui-modal>');

    const element = await page.find('ui-modal');
    expect(element).toHaveClass('hydrated');
  });
});
