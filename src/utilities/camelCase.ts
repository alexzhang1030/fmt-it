import _camelCase from 'camelcase'
import type { AllowingInput } from '../types'

/**
 * @example
 * ```ts
 * camelCase('foo-bar') // => 'fooBar'
 * ```
 * @allowingInput
 *  - `foo-bar`
 *  - `foo_bar`
 *  - `foo bar`
 *  - `fooBar`
 *  - `foo Bar`
 *  - `Foo bar`
 * @poweredBy
 * [camelcase](https://www.npmjs.com/package/camelcase)
 */
export function camelCase(input: AllowingInput) {
  return _camelCase(input)
}
