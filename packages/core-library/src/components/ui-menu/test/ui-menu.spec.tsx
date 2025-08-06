import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { UIMenu } from '../ui-menu';
import { UIMenuItem } from '../ui-menu.types';

describe('Menu Component', () => {
  async function renderMenu(items?: UIMenuItem[]) {
    return newSpecPage({
      components: [UIMenu],
      template: () => (
        <ui-menu
          open={false}
          data={
            items || [
              {
                id: 'item1',
                label: 'Item 1',
                icon: 'notification',
                onClick: () => console.log('Item 1 clicked'),
              },
              {
                id: 'item2',
                label: 'Item 2',
                icon: 'settings',
                onClick: () => console.log('Item 2 clicked'),
              },
              {
                id: 'item3',
                label: 'Item 3',
                icon: 'delete',
                onClick: () => console.log('Item 3 clicked'),
              },
              {
                id: 'item4',
                label: 'Item 4',
                icon: 'edit',
                onClick: () => console.log('Item 4 clicked'),
              },
              {
                id: 'item5',
                label: 'Item 5',
                icon: 'menu',
                onClick: () => console.log('Item 5 clicked'),
              },
            ]
          }
        >
          <button id="trigger" />
        </ui-menu>
      ),
    });
  }

  describe('When Clicking on a trigger', () => {
    it('should toggle the menu visibility', async () => {
      const { root, rootInstance, waitForChanges } = await renderMenu();

      const list = root.shadowRoot.querySelector('ul[role="menu"]') as HTMLUListElement;
      expect(list.style.display).toBe('none');

      const button = root.querySelector('#trigger') as HTMLButtonElement;
      button.addEventListener('click', () => (rootInstance.open = true));
      button.click();

      await waitForChanges();

      expect(list.style.display).toBe('block');
    });
  });

  describe('When clicking on the first option', () => {
    it('should call the onClick handler for Item 1 and close menu', async () => {
      const onClickMock = jest.fn();

      const { root, waitForChanges } = await renderMenu([
        {
          id: 'item1',
          label: 'Item 1',
          icon: 'notification',
          onClick: onClickMock,
        },
      ]);

      const button = root.querySelector('#trigger') as HTMLButtonElement;
      button.click();

      await waitForChanges();

      const item = root.shadowRoot.querySelector(
        'li[role="menuitem"] button',
      ) as HTMLLIElement;

      item.click();

      await waitForChanges();

      expect(onClickMock).toHaveBeenCalled();

      const list = root.shadowRoot.querySelector('ul[role="menu"]') as HTMLUListElement;
      expect(list.style.display).toBe('none');
    });
  });
});
