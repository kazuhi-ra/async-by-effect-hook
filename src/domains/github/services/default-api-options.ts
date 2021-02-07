import { Options } from 'ky'

export const DEFAULT_API_OPTIONS: Options = {
  prefixUrl: 'https://api.github.com',
  timeout: 7000,
  retry: 2,
}
