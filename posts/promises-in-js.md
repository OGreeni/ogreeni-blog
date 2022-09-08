---
title: 'What Are JavaScript Promises?'
date: 'September 6, 2022'
---

Promises, by definition, are objects that encapsulate the result of an asynchronous operation. They are a much cleaner alternative to callbacks, and can prevent the infamous "callback hell".
In the following example, we'll simulate an asynchronous operation using the `setTimeout` function. Realistically, this would be an action like sending a HTTP request.

In JavaScript, a promise can take on one of three states: **Pending**, **fulfilled**, or **rejected**. Let's explore them in more detail.

Once a promise has been initialized it is said to be **pending** until its value has been received.

```js
const myPromise = new Promise((resolve, reject) => {
  let value;
  setTimeout(() => {
    value = 5;
    resolve(value);
  }, 1000);
});

myPromise.then(
  (value) => console.log(value),
  (error) => console.log(error)
);

// logs:
// 5
```

As you can see, the `Promise` constructor takes a callback function as an argument, which in turn receives two other callbacks, `resolve` and `reject`. Promises can either be fulfilled with a _value_, or rejected with a _reason_.
Once a promise has been resolved or rejected, the asynchronous `.then` block is triggered. The `.then` block has two optional arguments -- one for the fulfillment case, and another for the rejection case.
If the promise has been fulfilled, the first (optional) callback is triggered and receives the value as an argument. If the promise is rejected, the second (optional) callback is triggered and receives the reason as an argument. If the second callback is absent, an error is automatically thrown with the reason as a message.

Instead of passing two callback arguments to the `.then` block, you can use an alternative syntax by introducing `.catch`.

The previous example could also be written as:

```js
myPromise
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
```

Or, to only catch rejected promises:

```js
myPromise.catch((error) => console.log(error));

// this is equivalent to:
myPromise.then((undefined, (error) => console.log(error)));
```
