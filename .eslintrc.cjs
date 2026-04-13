module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2020: true,
    node: true 
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'src/components/ui/*.jsx', 'scripts/**'],
  parserOptions: { 
    ecmaVersion: 'latest', 
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: { 
    react: { 
      version: '18.2' 
    },
    'import/resolver': {
      alias: {
        map: [
          ['@', './src']
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  plugins: ['react-refresh', 'import'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-undef': 'error',
    'import/no-unresolved': ['error', { ignore: ['^@radix-ui/', '^react-', 'cmdk', 'vaul', 'embla-', 'recharts', 'input-otp', 'react-resizable-panels'] }],
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['scripts/**/*.js', '*.config.js', '*.config.cjs'],
      env: {
        node: true,
        es2020: true
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'script'
      },
      rules: {
        'no-undef': 'off'
      }
    }
  ]
};
