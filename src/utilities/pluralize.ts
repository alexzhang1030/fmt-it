import _pluralize from 'pluralize'
import type { AllowingInput } from '../types'

/**
 * @example
 * ```ts
 * pluralize('apple') // => 'apples'
 * ```
 * @poweredBy
 * [pluralize](https://www.npmjs.com/package/pluralize)
 */
export function pluralize(input: AllowingInput, count = 1) {
  return _pluralize(input, count)
}
