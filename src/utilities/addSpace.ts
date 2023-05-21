import type { AllowingInput } from '../types'

/**
 * @example
 * ```ts
 * addSpace('twoApple') // => 'Two Apple'
 * ```
 */
export function addSpace(input: AllowingInput) {
  // copilot: 在每个单词之间添加空格
  return input.replace(/([a-z])([A-Z])/g, '$1 $2')
}
