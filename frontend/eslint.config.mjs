import nextConfig from 'eslint-config-next';
import jsxA11y from 'eslint-plugin-jsx-a11y';

// jsx-a11y recommended is a forcing function for new code — existing violations
// aren't retroactively fixed in this pass, just surfaced as warnings going forward.
const a11yWarnRules = Object.fromEntries(
  Object.entries(jsxA11y.flatConfigs.recommended.rules).map(([rule]) => [rule, 'warn']),
);

const config = [
  ...nextConfig,
  { rules: a11yWarnRules },
];

export default config;
