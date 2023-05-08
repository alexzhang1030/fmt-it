import type { AllowingInput, FmtFn } from '../types'

function _pipeCore(value: AllowingInput) {
  return {
    then: (fn: FmtFn) => {
      return _pipeCore(fn(value))
    },
    get: () => value,
  }
}

/**
 * @description combine multiple format functions
 * @example
 * ```ts
 * const camelCaseAndPluralize = (input: AllowingInput, count: number) => pipe(input)
 *   .then(input => camelCase(input))
 *   .then(res => pluralize(res, count))
 *
 * camelCaseAndPluralize(input, 2).get() // => 'twoApples'
 * ```
 */
export function pipeFmt(value: AllowingInput) {
  return _pipeCore(value)
}
