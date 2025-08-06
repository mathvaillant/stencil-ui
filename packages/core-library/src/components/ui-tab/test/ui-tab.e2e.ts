import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';
import AxeBuilder from '@axe-core/playwright';

const PAGE = '/components/ui-tab/test/ui-tab.e2e.html';

test.describe('Tabs Component', () => {
  test.describe('Given a value 1 to the tab context', () => {
    test('it should show the tab and panel with value 1 as active', async ({ page }) => {
      await page.goto(PAGE);

      await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .disableRules(['landmark-one-main', 'page-has-heading-one', 'region'])
        .analyze()
        .then(({ violations }) => expect(violations).toEqual([]));

      await expect(page).toHaveScreenshot();

      const activeTab = page.locator('button[role="tab"].active');
      const activePanel = page.locator('div[role="tabpanel"].active');

      const activeTabId = await activeTab.getAttribute('id');
      const activePanelId = await activePanel.getAttribute('id');

      expect(await activeTab.isVisible()).toBeTruthy();
      expect(await activeTab.textContent()).toBe('Tab 1');
      expect(await activeTab.getAttribute('aria-selected')).not.toBeNull();
      expect(await activeTab.getAttribute('aria-controls')).toBe(activePanelId);

      expect(await activePanel.isVisible()).toBeTruthy();
      expect(await activePanel.textContent()).toBe('Content for Tab 1');
      expect(await activePanel.getAttribute('aria-labelledby')).toBe(activeTabId);
      expect(await activePanel.getAttribute('aria-hidden')).toBeFalsy();
    });

    test.describe('When clicking on Tab 2', () => {
      test('it should update the active tab and panel to Tab 2', async ({ page }) => {
        await page.goto(PAGE);

        const tab2 = page.locator('button[role="tab"]').nth(1);
        await tab2.click();

        const activeTab = page.locator('button[role="tab"].active');
        const activePanel = page.locator('div[role="tabpanel"].active');

        expect(await activeTab.textContent()).toBe('Tab 2');
        expect(await activePanel.textContent()).toBe('Content for Tab 2');
        expect(await activeTab.getAttribute('aria-selected')).not.toBeNull();
        expect(await activePanel.getAttribute('aria-hidden')).toBeFalsy();
      });
    });
  });
});
