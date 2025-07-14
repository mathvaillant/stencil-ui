import { newE2EPage } from '@stencil/core/testing';

describe('ui-fieldset', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-fieldset></ui-fieldset>');

    const element = await page.find('ui-fieldset');
    expect(element).toHaveClass('hydrated');
  });
});
