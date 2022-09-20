# What are JavaScript promises?

Promises, by definition, are objects that encapsulate the result of an asynchronous operation. They are a much cleaner alternative to callbacks and enable working with async code in a much cleaner and more readable way.

A promise can take on one of three states:
**Pending**, **fulfilled**, or **rejected**. Let’s explore them in more detail.

A promise is initially **pending**. Once its result has been reached, and it is either **resolved** or **rejected**, it is said to be **settled**. If the promise was successful, i.e. it resolved to a value, it is said to be **fulfilled**.

Consider the following example:

```js
const myPromise = new Promise((resolve, reject) => {
  let value;
  let errors = false;
  setTimeout(() => {
    if (errors) {
      reject('An error occured.');
    }

    value = 5;
    resolve(value);
  }, 1000);
});

myPromise.then(
  (value) => console.log(value),
  (reason) => console.error(reason)
);

// logs (after 1 second):
// 5
```

As you can tell, the `Promise` constructor takes a callback function as an argument, which in turn receives two other callbacks, `resolve` and `reject`. Promises can either be resolved with a **value**, or rejected with a **reason**. To resolve a promise, we simply call the `resolve` callback and provide the value to be passed on. To reject, we call the `reject` callback, and pass in the reason for the rejection.

The `.then()` block that follows will be called **asynchronously** after the promise has been resolved or rejected. It takes in two (optional) callback arguments -- the first for the resolved case, and the second for the rejected case.
In our example, the promise has been resolved with the value `5` after one second. This event fired the first callback in the `.then()` block, which received the value `5` as an argument. The value can then be accessed in the function body.

Another example, this time of a rejected promise, can be seen here:

```js
const myPromise = new Promise((resolve, reject) => {
  let value;
  let errors = false;

  setTimeout(() => {
    errors = true;
    if (errors) {
      reject('An error occured.');
    }
    value = 5;
    resolve(value);
  }, 1000);
});

myPromise.then(
  (value) => console.log(value),
  (reason) => console.error(reason)
);

// logs (after one second):
// 'An error occured.'
```

This time, since `errors` was set to `true`, the promise has been rejected. This event triggered the second callback and the reason for the rejection was logged to the console.

# then().catch(): an alternative syntax

To improve readability, we can replace the rejection callback inside the `.then` block with a `.catch` block.

The previous example can also be rewritten as follows:

```js
const myPromise = new Promise((resolve, reject) => {
  let value;
  let errors = false;

  setTimeout(() => {
    errors = true;
    if (errors) {
      reject('An error occured.');
    }
    value = 5;
    resolve(value);
  }, 1000);
});

myPromise
  .then((value) => console.log(value))
  .catch((reason) => console.error(reason));

// logs (after one second):
// 'An error occured.'
```

This results in the exact same output, but improves readability.

Alternatively, we can only handle rejected promises with the `.catch` block:

```js
const myPromise = new Promise((resolve, reject) => {
  let value;
  let errors = false;

  setTimeout(() => {
    errors = true;
    if (errors) {
      reject('An error occured.');
    }
    value = 5;
    resolve(value);
  }, 1000);
});

myPromise.catch((reason) => console.error(reason));

// logs (after one second):
// 'An error occured.'
```

Which is equivalent to:

```js
const myPromise = new Promise((resolve, reject) => {
  let value;
  let errors = false;

  setTimeout(() => {
    errors = true;
    if (errors) {
      reject('An error occured.');
    }
    value = 5;
    resolve(value);
  }, 1000);
});

myPromise.then(undefined, (reason) => console.error(reason));

// logs (after one second):
// 'An error occured.'
```

This basic introduction has provided you with tools required to get started with promises. However, promises have much more built into them than we covered. If you want to learn more, refer to the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
