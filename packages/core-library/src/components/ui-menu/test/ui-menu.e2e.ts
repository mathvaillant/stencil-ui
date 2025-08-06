import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

const PAGE = '/components/ui-menu/test/ui-menu.e2e.html';

test.describe('Menu Componet', () => {
  test.describe('When clicking on a trigger', () => {
    test('should toggle the menu visibility', async ({ page }) => {
      await page.goto(PAGE);

      const trigger = page.locator('#trigger');
      const list = page.locator('ui-menu ul[role="menu"]');

      await expect(list).toHaveCSS('display', 'none');

      await trigger.click();
      await page.waitForChanges();
      await expect(list).toHaveCSS('display', 'block');
    });
  });

  test.describe('When clicking an option', () => {
    test('should close the menu', async ({ page }) => {
      await page.goto(PAGE);

      const trigger = page.locator('#trigger');

      await trigger.click();
      await page.waitForChanges();

      const item = page.locator('ui-menu li[role="menuitem"] button').first();
      await item.click();
      await page.waitForChanges();

      const list = page.locator('ui-menu ul[role="menu"]');
      await expect(list).toHaveCSS('display', 'none');
    });
  });
});
