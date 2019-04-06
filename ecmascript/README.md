
# The difference between ECMAScript prototype and OOP.
In a class-based object-oriented language, in general, state is carried by instances, methods are carried by classes, and inheritance is only of structure and behaviour.
In ECMAScript, the state and methods are carried by objects, and structure, behaviour, and state are all inherited.

***Q***: What is the debounce and throttle in javascript?

***A***:
The debounce is that triggers an action when the end of status changed and ignores any triggers before the end.\
The throttle is that limit the amount of the actions triggered in some time.

***Q***: what is the callback in javascript?
***A***:
It's a function and passed into a function which called that is higher-order function. Because the functions are object, and then a function can take a function as arguments.\
simply put: the callback is a function after another function finished the execution.

***Q***: what is the promise?
***A***:
> A promise represents the eventual result of an asynchronous operation. It is a placeholder into which the successful result value or reason for failure will materialize.

***Q***: what it the async/await?
***A***:
The async can be called a sugar of Generator, any function follow the async will return a Promise. \
The await meet after async function executed, it will get the result from return right now and keeps holding until the asynchronous operation finished, then reach the next statement.

***Q***: what is the difference between function declaration and function expression?
***A***:
Function declaration is that `function funcName() {}`, then this function will be hoisting.\
Function expression is that `const funcName = function() {}`, then a variable set as pointer.\

