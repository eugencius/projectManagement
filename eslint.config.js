import globals from 'globals';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    linterOptions: {
      noInlineConfig: true,
    },
  },
  {
    rules: {
      'react/prop-types': off,
    },
  },
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
];
