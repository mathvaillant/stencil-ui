import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { UITabContext } from '../ui-tab-context';
import { UITabList } from '../ui-tab-list';
import { UITab } from '../ui-tab';
import { UITabPanel } from '../ui-tab-panel';

global.MutationObserver = class {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords(): MutationRecord[] {
    return [];
  }
};

describe('Tabs Component', () => {
  async function renderTabs() {
    return newSpecPage({
      components: [UITabContext, UITabList, UITab, UITabPanel],
      template: () => (
        <ui-tab-context value="1">
          <ui-tab-list>
            <ui-tab value="1" label="Tab 1"></ui-tab>
            <ui-tab value="2" label="Tab 2"></ui-tab>
            <ui-tab value="3" label="Tab 3"></ui-tab>
            <ui-tab value="4" label="Tab 4"></ui-tab>
            <ui-tab value="5" label="Tab 5"></ui-tab>
          </ui-tab-list>
          <ui-tab-panel value="1">Content for Tab 1</ui-tab-panel>
          <ui-tab-panel value="2">Content for Tab 2</ui-tab-panel>
          <ui-tab-panel value="3">Content for Tab 3</ui-tab-panel>
          <ui-tab-panel value="4">Content for Tab 4</ui-tab-panel>
          <ui-tab-panel value="5">Content for Tab 5</ui-tab-panel>
        </ui-tab-context>
      ),
    });
  }

  describe('Given a value 1 to the tab context', () => {
    it('it should show the tab and panel with value 1 as active', async () => {
      const { root } = await renderTabs();

      const activeTab = root.querySelector('button[role="tab"].active');
      const activePanel = root.querySelector('div[role="tabpanel"]');

      const activeTabId = activeTab?.getAttribute('id');
      const activePanelId = activePanel?.getAttribute('id');

      expect(activeTab).toBeDefined();
      expect(activeTab.textContent).toBe('Tab 1');
      expect(activeTab.getAttribute('aria-selected')).not.toBeNull();
      expect(activeTab.getAttribute('aria-controls')).toBe(activePanelId);

      expect(activePanel).toBeDefined();
      expect(activePanel.textContent).toBe('Content for Tab 1');
      expect(activePanel.getAttribute('aria-labelledby')).toBe(activeTabId);
      expect(activePanel.getAttribute('aria-hidden')).toBeFalsy();
    });
  });

  describe('When selecting a tab', () => {
    it('it should update the active tab, panel and fire tabChange event', async () => {
      const mockTabChange = jest.fn();
      const { root, waitForChanges } = await renderTabs();

      const tabElements = root.querySelectorAll('button[role="tab"]');
      const [tab1, tab2] = Array.from(tabElements) as HTMLButtonElement[];

      root.addEventListener('tabChange', mockTabChange);

      expect(root.getAttribute('value')).toBe('1');
      expect(tab1).toHaveClass('active');

      tab2.click();
      await waitForChanges();
      expect(mockTabChange).toHaveBeenCalledTimes(1);
      expect(root.getAttribute('value')).toBe('2');
    });
  });
});
