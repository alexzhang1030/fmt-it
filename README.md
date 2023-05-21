# fmt-it

A format string tool.

- [fmt-it](#fmt-it)
  - [Types](#types)
  - [Utilities](#utilities)
    - [1. `camelCase`](#1-camelcase)
    - [2. `pluralize`](#2-pluralize)
    - [3. `singularize`](#3-singularize)
    - [4. `addSpace`](#4-addspace)
    - [5. `pascalCase`](#5-pascalcase)
  - [helper](#helper)
    - [1. `pipeFmt`](#1-pipefmt)

## Types

```ts
export type AllowingInput = string | Readonly<string>
export type FmtFn = (input: AllowingInput, ...args: any[]) => string
```

## Utilities 

### 1. `camelCase`

```ts
function camelCase(input: AllowingInput): string
```

### 2. `pluralize`

```ts
function pluralize(input: AllowingInput, count?: number): string
```

### 3. `singularize`

```ts
function singularize(input: AllowingInput): string
```

### 4. `addSpace`

```ts
function addSpace(input: AllowingInput): string
```

### 5. `pascalCase`

```ts
function pascalCase(input: AllowingInput): string
```

## helper

### 1. `pipeFmt`

```ts
function pipeFmt(value: AllowingInput): {
  then: (fn: FmtFn) => pipeFmt
  get: () => string
}
```

example

```ts
function camelCaseAndPluralize(input: AllowingInput, count: number) {
  return pipe(input)
    .then(input => camelCase(input))
    .then(res => pluralize(res, count))
}

camelCaseAndPluralize(input, 2).get() // => 'twoApples'
```
