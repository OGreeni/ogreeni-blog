---
title: "React.memo, useMemo, and useCallback: What's the Difference?"

date: October 3, 2022
---

# What is Memoization?

If you’ve been working with React for a while, you’ve probably heard of the term “Memoization.” Let us define the word and see how it can benefit our app.

Here's a quote from [Wikipedia](https://en.wikipedia.org/wiki/Memoization):

> In computing, memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same input occures again.

Simply put, memoization is the process of remembering the result of an expensive operation instead of calculating it again, which can improve the efficiency of our app.

## React.Memo

React.memo is a feature that comes to help in the memoization of React components.

```js
const MyComponents = (props) => {
  // render JSX baesd on props
};

export default React.memo(MyComponent);
```

As long as the component’s props remain the same, react reuses the result of the last render instead of calculating and rerendering the component.
Note that State and Context changes will still trigger a rerender of the component.

According to the [React docs](https://reactjs.org/docs/react-api.html#reactmemo) themselves, `React.memo` should only be used for performance optimizations, and not to prevent rerenders, as this could lead to bugs.

## The useMemo Hook

useMemo is a hook that enables us to memoize the results of operations inside components, not just the components themselves.

Consider the following example:

```js
import { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [peopleArray, setPeopleArray] = useState([]);

  const expensiveResult = expensiveCalculation(count);

  // ...
};
```

In our current state, `expensiveCalculation` will run on every render, even when `count` doesn't change. For instance, if some event caused changes to our `peopleArray` state, the entire component will rerender, and `expensiveCalculation` will rerun, wasting resources.

This behavior can be prevented with the `useMemo` hook by memoizing the result of `expensiveCalculation`, and only rerunning it when its dependencies change.

```js
import { useState, useMemo } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [peopleArray, setPeopleArray] = useState([]);

  const expensiveResult = useMemo(() => expensiveCalculation(count), [count]);

  // ...
};
```

The second argument is the dependency array, which includes everything our calculation depends on. Every time a value from the dependency array changes, the calculation will rerun to ensure that the result is never stale.

## The useCallback Hook

Our final hook is `useCallback`, which returns a memoized callback function.

```js
import { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    // ...
  };

  // ...

  return <MyChild onClick={handleClick} />;
};
```

Currently, a new `handleClick` function is created on every render of `MyComponent`. And since React checks for reference equality, it appears as though the props of `MyChild` have changed (the "old" `handleClick` doesn't match the "new" `handleClick`), and the component is unnecessarily rerendered.

To prevent that, we can use the `useCallback` hook:

```js
import { useState, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => ,
    // handle click
  []);

  return <MyChild onClick={handleClick} />;
};
```

The first argument of `useCallback` is the function to be created (in our case, a function that handles the click event), and the second argument is the dependency array. Since our function doesn't depend on any external values, the dependency array is empty and `handleClick` will only be created once on mount. Since the function preserves its reference on every rerender, `MyChild` won't be unnecessarily rerendered.
