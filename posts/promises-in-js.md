---
title: 'What Are JavaScript Promises?'
date: 'September 12, 2022'
---

Promises, by definition, are objects that encapsulate the result of an asynchronous operation. They are a much cleaner alternative to callbacks, and enable working with **asynchronous operations** in a much leaner and more readable way.

A promise can take on one of three states: **Pending**, **fulfilled**, or **rejected**. Let's explore them in more detail.

Once the promise has been initialized, and its result hasn't been reached, it is said to be **pending**.
Once the result of the promise has been reached, it is said to be **resolved**. If the result was successful, the promise has been **fulfilled**. Otherwise, it has been **rejected**.

With the terminology out of the way, let's look at a basic example. We'll simulate an asynchronous operation using the `setTimeout` function. Realistically, this would be something like waiting on an HTTP request.

```js
const myPromise = new Promise((resolve, reject) => {
  const error = false;
  let value;
  setTimeout(() => {
    value = 5;
    if (error) {
      reject('An error occured.');
    } else {
      resolve(value);
    }
  }, 1000);
});

myPromise.then(
  (value) => console.log(value),
  (error) => console.log(error)
);

// logs:
// 5
```

As you can see, the `Promise` constructor takes a callback function as an argument, which in turn receives two other callbacks, `resolve` and `reject`. Promises can either be resolved with a _value_, or rejected with a _reason_.
In the case our promise was successful, we call the `resolve()` callback and provide the value to be passed on. Otherwise, we provide the reason for the error.
The `.then()` block that comes right after will be called asynchronously, and only _after_ the promise has been resolved or rejected.
It accepts two (optional) callback arguments, the first being for the success case, and the second being for the failed case. The callbacks will receive their respective value/reason as an argument.
An alternative and more common syntax would be to use the `.catch()` block in conjunction with `.then()`.
The previous example could also be written as:

```js
myPromise
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
```

Or, if we'd like to only handle rejected cases:

```js
myPromise.catch((error) => console.log(error));

// equivalent to:
myPromise.then(undefined, (error) => console.log(error));
```

The `.catch()` block is not more than syntactic sugar, and a more readable alternative.
