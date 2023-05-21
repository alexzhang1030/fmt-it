import { expect, test } from 'vitest'
import {
  addSpace, camelCase, pascalCase, pluralize, singularize,
} from '../'

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

test('addSpace', () => {
  const testCases = [
    ['fooBar', 'foo Bar'],
    ['FooBarBaz', 'Foo Bar Baz'],
  ]
  testCases.forEach(([input, expected]) => {
    expect(addSpace(input)).toBe(expected)
  })
})

test('pascalCase', () => {
  const testCases = [
    ['foo_bar', 'FooBar'],
    ['foo-bar', 'FooBar'],
    ['fooBar', 'FooBar'],
  ]
  testCases.forEach(([input, expected]) => {
    expect(pascalCase(input)).toBe(expected)
  })
})
