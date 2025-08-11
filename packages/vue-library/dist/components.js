import { defineContainer } from '@stencil/vue-output-target/runtime';
export const UiButton = defineContainer('ui-button', undefined, [
    'variant',
    'disabled',
    'iconName',
    'type'
]);
export const UiFieldset = defineContainer('ui-fieldset', undefined);
export const UiFieldsetOption = defineContainer('ui-fieldset-option', undefined, [
    'type',
    'name',
    'value',
    'label',
    'checked',
    'required'
]);
export const UiIcon = defineContainer('ui-icon', undefined, [
    'name'
]);
export const UiInput = defineContainer('ui-input', undefined, [
    'fieldId',
    'name',
    'type',
    'value',
    'disabled',
    'readOnly',
    'required',
    'placeholder',
    'autocomplete'
]);
export const UiLabel = defineContainer('ui-label', undefined, [
    'as',
    'htmlFor'
]);
export const UiLogo = defineContainer('ui-logo', undefined, [
    'width',
    'height'
]);
export const UiMenu = defineContainer('ui-menu', undefined, [
    'open',
    'data',
    'position',
    'close'
], [
    'close'
]);
export const UiModal = defineContainer('ui-modal', undefined, [
    'open',
    'headerTitle',
    'footerSlotName',
    'close'
], [
    'close'
]);
export const UiSelect = defineContainer('ui-select', undefined, [
    'fieldId',
    'name'
]);
export const UiSidebar = defineContainer('ui-sidebar', undefined, [
    'open',
    'items'
]);
export const UiTab = defineContainer('ui-tab', undefined, [
    'value',
    'label',
    'tabChange'
], [
    'tabChange'
]);
export const UiTabContext = defineContainer('ui-tab-context', undefined, [
    'value',
    'tabChange'
], [
    'tabChange'
]);
export const UiTabList = defineContainer('ui-tab-list', undefined);
export const UiTabPanel = defineContainer('ui-tab-panel', undefined, [
    'value'
]);
export const UiTable = defineContainer('ui-table', undefined, [
    'columns',
    'rows',
    'maxWidth',
    'maxHeight',
    'overflow',
    'stickyHeader'
]);
export const UiTextarea = defineContainer('ui-textarea', undefined, [
    'fieldId',
    'name',
    'value',
    'disabled',
    'readOnly',
    'required',
    'placeholder',
    'maxlength',
    'minlength',
    'rows'
]);
export const UiTooltip = defineContainer('ui-tooltip', undefined, [
    'text'
]);
export const UiTypography = defineContainer('ui-typography', undefined, [
    'variant'
]);
export const UiXstack = defineContainer('ui-xstack', undefined);
export const UiYstack = defineContainer('ui-ystack', undefined);
//# sourceMappingURL=components.js.map