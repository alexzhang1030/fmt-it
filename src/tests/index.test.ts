import { expect, test } from 'vitest'
import { camelCase } from '../utilities/camelCase'
import { pluralize } from '../utilities/pluralize'
import { singularize } from '../utilities/singularize'

test('camelCase', () => {
  const testCases = [
    ['foo', 'foo'],
    ['foo bar', 'fooBar'],
    ['foo_bar_baz', 'fooBarBaz'],
    ['FooBarBaz', 'fooBarBaz'],
    ['Foo-Bar-baz', 'fooBarBaz'],
  ]
  testCases.forEach(([input, expected]) => {
    expect(camelCase(input)).toBe(expected)
  })
})

test('pluralize', () => {
  const testCases = [
    ['apple', 'apples'],
    ['news', 'news'],
    ['people', 'people'],
    ['string', 'strings'],
    ['number', 'numbers'],
  ]
  testCases.forEach(([input, expected]) => {
    expect(pluralize(input, 2)).toBe(expected)
  })
})

test('singularize', () => {
  const testCases = [
    ['apples', 'apple'],
    ['news', 'news'],
    ['people', 'person'],
    ['strings', 'string'],
    ['numbers', 'number'],
  ]
  testCases.forEach(([input, expected]) => {
    expect(singularize(input)).toBe(expected)
  })
})
