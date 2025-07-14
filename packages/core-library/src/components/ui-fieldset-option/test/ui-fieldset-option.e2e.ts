import { newE2EPage } from '@stencil/core/testing';

describe('ui-fieldset-option', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-fieldset-option></ui-fieldset-option>');

    const element = await page.find('ui-fieldset-option');
    expect(element).toHaveClass('hydrated');
  });
});
