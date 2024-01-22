module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-no-unsupported-browser-features',
  ],
  rules: {
    'plugin/no-unsupported-browser-features': [true, {
      ignore: ['rem'],
      browsers: [
        'last 5 safari version',
        'last 5 chrome version',
      ],
      severity: 'warning',
    }],
  },
};
