import { type BuildOptions } from './types/config'
import type { Configuration as DevServeConfiguration } from 'webpack-dev-server'

export function buildDevServer (options: BuildOptions): DevServeConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}
