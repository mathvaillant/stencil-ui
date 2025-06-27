import { Plugin } from "vue";
import { defineCustomElements } from "core-library/loader";

export const ComponentLibrary: Plugin = {
	async install() {
		defineCustomElements();
	},
};
