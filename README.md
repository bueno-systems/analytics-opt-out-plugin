# analytics-opt-out-plugin

[![Npm package version](https://img.shields.io/npm/v/@bueno-systems/analytics-opt-out-plugin)](https://www.npmjs.com/package/@bueno-systems/analytics-opt-out-plugin) [![Release workflow](https://img.shields.io/github/workflow/status/bueno-systems/analytics-opt-out-plugin/Release/main)](https://github.com/bueno-systems/analytics-opt-out-plugin/actions/workflows/release.yml)

A simple plugin for disabling event delivery in @segment/analytics-next.

## Installation

```shell
npm install --save @bueno-systems/analytics-opt-out-plugin
# or
yarn add @bueno-systems/analytics-opt-out-plugin
```

💡 TypeScript types are included, requires `typescript@>=4.5`

## Usage

```ts
import { OptOutPlugin } from '@bueno-systems/analytics-opt-out-plugin'

AnalyticsBrowser.load({
  writeKey: 'ABCD',
  plugins: [
    new OptOutPlugin({
      optOut: true
    })
  ]
})
```
