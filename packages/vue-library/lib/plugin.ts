import { Plugin } from "vue";
import { defineCustomElements } from "stencil-ui-core-library/loader";

export const ComponentLibrary: Plugin = {
	async install() {
		defineCustomElements();
	},
};
