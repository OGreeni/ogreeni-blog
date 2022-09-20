---
title: 'Async-Await in JavaScript'
date: September 13, 2022
---

# What is async-await?

Async functions grew in popularity because they enable us to work with asynchronous operations in a way that feels much closer to synchronous JavaScript. Asynchronous functions return a [promise](promises-in-js).

Consider this example of an asynchronous fetch API HTTP request, which returns a promise:

```js
fetch('some-api-endpoint')
  .then((response) => response.json())
  .then((result) => console.log(result));
```

This might seem simple, but once your logic grows and chaining multiple `.then()` and `catch()` blocks becomes necessary, promises might not be the most readable or easiest to work with.

Consider this alternative syntax, which utilizes async-await:

```js
async function myAsyncFunc() {
  const response = await fetch('some-api-endpoint');
  const result = await response.json();
  console.log(result);
}

// or using an ES6 arrow function:
const myAsyncFunc = async () => {
  const response = await fetch('some-api-endpoint');
  const result = await response.json();
  console.log(result);
};
```

Don't be fooled into thinking that this code occurs synchronously. It still utilizes promises under the hood.

In vanilla JavaScript, the `await` keyword can only be used inside `async` functions and can only be used on promises. It halts the function execution until the promise has been resolved or rejected. If it has been resloved, its value is returned, and code execution continues.

# Error handling with async-await

As demonstrated, if a promise resolves normally, the result in returned. In the case of a rejection, however, the error is thrown. We can handle these error with a simple `try-catch` block:

```js
const catchAsync = async () => {
  try {
    const res = await someAsyncOperation(123);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};
```
