import {
  type Plugin,
  type Context,
  ContextCancelation
} from '@segment/analytics-next'

interface Options {
  /** Pass `true` to disable all event delivery */
  disableAjs?: boolean
}

/**
 * Enable or disable event delivery for @segment/analytics-next.
 *
 * @example
 * import OptOutPlugin from '@bueno-systems/analytics-opt-out-plugin'
 *
 * AnalyticsBrowser.load({
 *    writeKey: 'ABCD',
 *    plugins: [
 *      new OptOutPlugin({
 *        optOut: session.disableTracking,
 *      }),
 *    ],
 *    cdnURL: 'https://my.proxy.url',
 *  })
 */
export class OptOutPlugin implements Plugin {
  ajsDisabled: boolean
  name: string
  version: string
  type: Plugin['type'] = 'before'

  constructor({ disableAjs = false }: Options) {
    this.name = 'Toggle Event Delivery Plugin'
    this.version = '0.1.0'
    this.ajsDisabled = disableAjs
  }

  async load(): Promise<void> {
    return await Promise.resolve()
  }

  isLoaded(): boolean {
    return true
  }

  alias(ctx: Context): Context {
    return this.gateKeep(ctx)
  }

  identify(ctx: Context): Context {
    return this.gateKeep(ctx)
  }

  group(ctx: Context): Context {
    return this.gateKeep(ctx)
  }

  page(ctx: Context): Context {
    return this.gateKeep(ctx)
  }

  track(ctx: Context): Context {
    return this.gateKeep(ctx)
  }

  /** Cancel event delivery if ajsDisabled flag set to true */
  private gateKeep(ctx: Context): Context {
    if (!this.ajsDisabled) return ctx

    ctx.cancel(
      new ContextCancelation({
        reason: 'AJS Disabled via TogglePlugin',
        retry: false
      })
    )
  }
}
