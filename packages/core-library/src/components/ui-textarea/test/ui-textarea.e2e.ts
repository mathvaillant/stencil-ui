import { newE2EPage } from '@stencil/core/testing';

describe('ui-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-textarea></ui-textarea>');

    const element = await page.find('ui-textarea');
    expect(element).toHaveClass('hydrated');
  });
});
