import { singular } from 'pluralize'
import type { AllowingInput } from '../types'

/**
 * @example
 * ```ts
 * singularize('apples') // => 'apple'
 * ```
 * @poweredBy
 * [pluralize](https://www.npmjs.com/package/pluralize)
 */
export function singularize(input: AllowingInput) {
  return singular(input)
}
