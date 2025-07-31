import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'core-library',
  globalStyle: 'src/global.css',
  plugins: [sass()],
  devServer: {
    openBrowser: true,
    reloadStrategy: 'pageReload',
  },
  outputTargets: [
    {
      type: 'docs-json',
      file: './docs/docs.json',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    reactOutputTarget({
      outDir: '../react-library/lib/components',
    }),
    vueOutputTarget({
      componentCorePackage: 'core-library',
      proxiesFile: '../vue-library/lib/components.ts',
    }),
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: [{ src: '**/*.html' }, { src: '**/*.css' }],
    },
  ],
  testing: {
    browserHeadless: 'shell',
  },
  extras: {
    enableImportInjection: true,
  },
};
