'use client';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';
import { UiButton as UiButtonElement, defineCustomElement as defineUiButton } from "stencil-ui-core-library/dist/components/ui-button.js";
import { UiFieldsetOption as UiFieldsetOptionElement, defineCustomElement as defineUiFieldsetOption } from "stencil-ui-core-library/dist/components/ui-fieldset-option.js";
import { UiFieldset as UiFieldsetElement, defineCustomElement as defineUiFieldset } from "stencil-ui-core-library/dist/components/ui-fieldset.js";
import { UiIcon as UiIconElement, defineCustomElement as defineUiIcon } from "stencil-ui-core-library/dist/components/ui-icon.js";
import { UiInput as UiInputElement, defineCustomElement as defineUiInput } from "stencil-ui-core-library/dist/components/ui-input.js";
import { UiLabel as UiLabelElement, defineCustomElement as defineUiLabel } from "stencil-ui-core-library/dist/components/ui-label.js";
import { UiLogo as UiLogoElement, defineCustomElement as defineUiLogo } from "stencil-ui-core-library/dist/components/ui-logo.js";
import { UiMenu as UiMenuElement, defineCustomElement as defineUiMenu } from "stencil-ui-core-library/dist/components/ui-menu.js";
import { UiModal as UiModalElement, defineCustomElement as defineUiModal } from "stencil-ui-core-library/dist/components/ui-modal.js";
import { UiSelect as UiSelectElement, defineCustomElement as defineUiSelect } from "stencil-ui-core-library/dist/components/ui-select.js";
import { UiSidebar as UiSidebarElement, defineCustomElement as defineUiSidebar } from "stencil-ui-core-library/dist/components/ui-sidebar.js";
import { UiTabContext as UiTabContextElement, defineCustomElement as defineUiTabContext } from "stencil-ui-core-library/dist/components/ui-tab-context.js";
import { UiTabList as UiTabListElement, defineCustomElement as defineUiTabList } from "stencil-ui-core-library/dist/components/ui-tab-list.js";
import { UiTabPanel as UiTabPanelElement, defineCustomElement as defineUiTabPanel } from "stencil-ui-core-library/dist/components/ui-tab-panel.js";
import { UiTab as UiTabElement, defineCustomElement as defineUiTab } from "stencil-ui-core-library/dist/components/ui-tab.js";
import { UiTable as UiTableElement, defineCustomElement as defineUiTable } from "stencil-ui-core-library/dist/components/ui-table.js";
import { UiTextarea as UiTextareaElement, defineCustomElement as defineUiTextarea } from "stencil-ui-core-library/dist/components/ui-textarea.js";
import { UiTooltip as UiTooltipElement, defineCustomElement as defineUiTooltip } from "stencil-ui-core-library/dist/components/ui-tooltip.js";
import { UiTypography as UiTypographyElement, defineCustomElement as defineUiTypography } from "stencil-ui-core-library/dist/components/ui-typography.js";
import { UiXstack as UiXstackElement, defineCustomElement as defineUiXstack } from "stencil-ui-core-library/dist/components/ui-xstack.js";
import { UiYstack as UiYstackElement, defineCustomElement as defineUiYstack } from "stencil-ui-core-library/dist/components/ui-ystack.js";
export const UiButton = createComponent({
    tagName: 'ui-button',
    elementClass: UiButtonElement,
    react: React,
    events: {},
    defineCustomElement: defineUiButton
});
export const UiFieldset = createComponent({
    tagName: 'ui-fieldset',
    elementClass: UiFieldsetElement,
    react: React,
    events: {},
    defineCustomElement: defineUiFieldset
});
export const UiFieldsetOption = createComponent({
    tagName: 'ui-fieldset-option',
    elementClass: UiFieldsetOptionElement,
    react: React,
    events: {},
    defineCustomElement: defineUiFieldsetOption
});
export const UiIcon = createComponent({
    tagName: 'ui-icon',
    elementClass: UiIconElement,
    react: React,
    events: {},
    defineCustomElement: defineUiIcon
});
export const UiInput = createComponent({
    tagName: 'ui-input',
    elementClass: UiInputElement,
    react: React,
    events: {},
    defineCustomElement: defineUiInput
});
export const UiLabel = createComponent({
    tagName: 'ui-label',
    elementClass: UiLabelElement,
    react: React,
    events: {},
    defineCustomElement: defineUiLabel
});
export const UiLogo = createComponent({
    tagName: 'ui-logo',
    elementClass: UiLogoElement,
    react: React,
    events: {},
    defineCustomElement: defineUiLogo
});
export const UiMenu = createComponent({
    tagName: 'ui-menu',
    elementClass: UiMenuElement,
    react: React,
    events: { onClose: 'close' },
    defineCustomElement: defineUiMenu
});
export const UiModal = createComponent({
    tagName: 'ui-modal',
    elementClass: UiModalElement,
    react: React,
    events: { onClose: 'close' },
    defineCustomElement: defineUiModal
});
export const UiSelect = createComponent({
    tagName: 'ui-select',
    elementClass: UiSelectElement,
    react: React,
    events: {},
    defineCustomElement: defineUiSelect
});
export const UiSidebar = createComponent({
    tagName: 'ui-sidebar',
    elementClass: UiSidebarElement,
    react: React,
    events: {},
    defineCustomElement: defineUiSidebar
});
export const UiTab = createComponent({
    tagName: 'ui-tab',
    elementClass: UiTabElement,
    react: React,
    events: { onTabChange: 'tabChange' },
    defineCustomElement: defineUiTab
});
export const UiTabContext = createComponent({
    tagName: 'ui-tab-context',
    elementClass: UiTabContextElement,
    react: React,
    events: { onTabChange: 'tabChange' },
    defineCustomElement: defineUiTabContext
});
export const UiTabList = createComponent({
    tagName: 'ui-tab-list',
    elementClass: UiTabListElement,
    react: React,
    events: {},
    defineCustomElement: defineUiTabList
});
export const UiTabPanel = createComponent({
    tagName: 'ui-tab-panel',
    elementClass: UiTabPanelElement,
    react: React,
    events: {},
    defineCustomElement: defineUiTabPanel
});
export const UiTable = createComponent({
    tagName: 'ui-table',
    elementClass: UiTableElement,
    react: React,
    events: {},
    defineCustomElement: defineUiTable
});
export const UiTextarea = createComponent({
    tagName: 'ui-textarea',
    elementClass: UiTextareaElement,
    react: React,
    events: {},
    defineCustomElement: defineUiTextarea
});
export const UiTooltip = createComponent({
    tagName: 'ui-tooltip',
    elementClass: UiTooltipElement,
    react: React,
    events: {},
    defineCustomElement: defineUiTooltip
});
export const UiTypography = createComponent({
    tagName: 'ui-typography',
    elementClass: UiTypographyElement,
    react: React,
    events: {},
    defineCustomElement: defineUiTypography
});
export const UiXstack = createComponent({
    tagName: 'ui-xstack',
    elementClass: UiXstackElement,
    react: React,
    events: {},
    defineCustomElement: defineUiXstack
});
export const UiYstack = createComponent({
    tagName: 'ui-ystack',
    elementClass: UiYstackElement,
    react: React,
    events: {},
    defineCustomElement: defineUiYstack
});
//# sourceMappingURL=components.js.map