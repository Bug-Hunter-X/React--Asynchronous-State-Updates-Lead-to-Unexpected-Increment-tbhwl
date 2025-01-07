# React Asynchronous State Update Bug

This repository demonstrates a common bug in React applications involving asynchronous state updates.  When using `setCount` or similar state update functions, React batches these updates.  If you make multiple calls within a short time-frame, only the last one will be processed, leading to unexpected behavior and potential data loss. This example shows how two consecutive `setCount` calls incorrectly only increment by one instead of two.

## Bug

The `bug.js` file demonstrates the problem where the increment function does not increment by two, despite two calls to `setCount`. This is caused by the fact that React batches state updates and only the last update is applied.

## Solution

The `bugSolution.js` demonstrates the solution. The solution uses functional updates to ensure that the previous state is correctly taken into account. This means that updates will always be based on the most current value of the state. This approach avoids the issue of asynchronous updates.