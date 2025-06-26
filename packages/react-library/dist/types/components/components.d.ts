import type { StencilReactComponent } from '@stencil/react-output-target/runtime';
import { MyComponent as MyComponentElement } from "core-library/dist/components/my-component.js";
export type MyComponentEvents = NonNullable<unknown>;
export declare const MyComponent: StencilReactComponent<MyComponentElement, MyComponentEvents>;
