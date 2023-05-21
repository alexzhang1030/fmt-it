import camelCase from 'camelcase'
import type { AllowingInput } from '../types'

/**
 * @example
 * ```ts
 * pascalCase('foo-bar') // => 'FooBar'
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
export function pascalCase(input: AllowingInput) {
  return camelCase(input, { pascalCase: true })
}
