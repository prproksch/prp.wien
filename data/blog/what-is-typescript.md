---
title: 'What is TypeScript'
date: '2023-01-10'
tags: ['tutorial', 'typescript', 'coding', 'programming']
draft: false
summary: 'TypeScript is a superset of JavaScript that adds programming paradigms, like static typing to the language. It can make our code easier to read, understand and debug.'
---

# Overview

TypeScript is a programming language that is a super set of JavaScript, which means that all JavaScript code is valid TypeScript code. However, TypeScript adds a few additional features that can make your code easier to read, understand, and debug.

One of the key features of TypeScript is type checking, like the name indicates. JavaScript allows variables to hold any type of value, but in TypeScript, you should specify the type of a variable. This helps to catch mistakes early on, as the TypeScript compiler will give you an error if you try to store data of a different type in the variable.

For example, if you have a variable hello that is meant to hold a string, you can specify its type like this:

```typescript
let hello: string = world
```

There are the same types in TypeScript as in JavaScript, like <strong>string</strong>, <strong>number</strong>, <strong>boolean</strong>, and <strong>object</strong>.
However, TypeScript also has a few additional types that provide more information about the data that is stored in a variable.

## Number

Is any numeric value, including integers and floating point values.

```typescript
let x: number = 5
let y: number = 3.14
let z: number = 0xff // hexadecimal notation
```

## String

Is a string of text. You can use single or double quotes to define a string, or you can use template literals (strings that are enclosed in backticks) to include expressions in your string.

```typescript
let name: string = 'John'
let greeting: string = 'Hello, ' + name
let template: string = `The value of x is ${x}.`
```

## Boolean

Is either true or false.

```typescript
let isTrue: boolean = true
let isFalse: boolean = false
```

## Array

Is an ordered list of values. You can specify the type of values that the array will hold using type syntax like this: let arr: number[] = [1, 2, 3].

```typescript
let arr: number[] = [1, 2, 3]
let arr: Array<number> = [1, 2, 3]
let names: Array<string> = ['John', 'Jane', 'Jimmy']
let mixed: Array<number | string> = [1, 'two', 3]
```

## Tuple

Is a fixed-size array where each element has a specific type. You can specify the type of each element in the tuple using type syntax like this: let tuple: [string, number] = ['hello', 5]. This type is used when you know the exact number of elements in an array, and the type of each element.

```typescript
let person: [string, number] = ['Hello', 1337]
```

## Enum

Is used to define a set of named constants. You can use enums to make your code more readable and easier to maintain. For example, you can use an enum to represent the colors in a rainbow, or the days of the week.

```typescript
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green
```

## Any

This type is used to denote a value that can be of any type. It can be useful when you are working with values that come from an untyped source, like a JSON API. However, using any can defeat the purpose of using TypeScript, so it should be used sparingly. If you find yourself using any often, you should consider using a different approach to your current problem.

```typescript
let value: any = 'hello'
value = 5
value = true
```

## Void

This type represents the absence of a value. It is commonly used as the return type of functions that do not return a value. It is not recommended to use void for undefined variables, as it can lead to unexpected behavior.

```typescript
function sayHello(): void {
  console.log('Hello!')
}
```

## Null and Undefined

These types are used to denote the absence of a value. They are commonly used as the return type of functions that do not return a value. Null means that the variable has been explicitly set to its value, while undefined means that the variable has not been set to anything yet.

```typescript
let x: number = null
let y: number = undefined
```

I hope this helps give you a better understanding of the different types available in TypeScript!
Be sure to check out the next article in this series.

Thanks for reading!
