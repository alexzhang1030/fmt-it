import { expect, test } from 'vitest'
import { pipeFmt } from '../helper'
import { addSpace, camelCase, pascalCase, pluralize } from '../'

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

test('combine pascalCase and addSpaces', () => {
  const testCases = [
    ['two_apple', 'Two Apple'],
    ['two-apple-and', 'Two Apple And'],
  ]
  const pascalCaseAndAddSpaces = (input: string) => pipeFmt(input)
    .then(input => pascalCase(input))
    .then(res => addSpace(res))
  testCases.forEach(([input, expected]) => {
    expect(pascalCaseAndAddSpaces(input).get()).toBe(expected)
  })
})
