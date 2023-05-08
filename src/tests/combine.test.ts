import { expect, test } from 'vitest'
import { pipeFmt } from '../helper'
import { pluralize } from '../utilities/pluralize'
import { camelCase } from '../utilities/camelCase'

test('combine camelCase and pluralize', () => {
  const testCases = [
    ['two apple', 'twoApples'],
    ['two news', 'twoNews'],
    ['two-apple', 'twoApples'],
  ]
  const camelCaseAndPluralize = (input: string, count = 1) => pipeFmt(input)
    .then(input => camelCase(input))
    .then(res => pluralize(res, count))

  testCases.forEach(([input, expected]) => {
    expect(camelCaseAndPluralize(input, 2).get()).toBe(expected)
  })
})
