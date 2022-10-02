---
title: 'Async-Await in JavaScript'
date: September 13, 2022
---

# What is async-await?

Asynchronous functions (or ‘async’ for short) grew in popularity since they enable us to work with asynchronous operations (traditionally handled with [promises](promises-in-js)) in a way that closely resembles synchronous JavaScript.

Consider the following example of an asynchronous HTTP request using promises:

```js
fetch('http://some-random-api.com/some-endpoint')
  .then((response) => response.json())
  .then((result) => console.log(result));
```

This basic example simply sends a request to the given endpoint, waits for the response to arrive, parses the response body as JSON, and logs the result to the console.

However, once your logic grows and chaining more and more `.then()` and `.catch()` blocks becomes necessary, this approach might quickly become cumbersome and hard to read.

The async-await syntax, added in the ECMAScript 2017 release, comes to solve this issue.
Here is the same example code written with async-await instead of promises. Note that the logic remains the same – async-await is simply syntactic sugar over promises and still utilizes them under the hood.

```js
async function handleRequest() {
  const response = await fetch('http://some-api.com/some-endpoint');
  const result = await response.json();
  console.log(result);
}

// or using an ES6 arrow function:
const handleRequest = async () => {
  const response = await fetch('http://some-api.com/some-endpoint');
  const result = await response.json();
  console.log(result);
};
```

Generally, the `await` keyword can only be used inside `async` functions (except for javaScript modules, which enable a feature called top-level await). The purpose of the `await` keyword is to pause code execution until the promise has been resolved or rejected.
However, you must remember that **async functions still run asynchronously**.

# Error handling with async-await

If the promise to the right of the `await` keyword resolves normally, its value is returned, and code execution continues as usual. But in the case of a rejection, an error is thrown.
We can easily handle these errors with a `try-catch` block:

```js
const catchAsync = async () => {
  try {
    const resulr = await someAsyncOperation(123);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
```

There's much more to learn about async-await, but you now know enough to get started.
