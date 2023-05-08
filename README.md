# fmt-it

A format string tool.

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
