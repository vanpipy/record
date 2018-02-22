# Clojure Flavored JavaScript

## Lambda
The javascript lambda can be arrow function, like `x -> y`. So what is the meaning of the `x -> y`? It is a reflection.

The lambda is a reflection for anything. It called a definition or rule for computing.

The parameter is anything which is number, string, function etc in javascript.

## Higher-order function
The higher-order function accept a function as parameter.

Follow the lambda rule: `f(x, y) = x(y) --> f(x) => (y -> x(y)) --> (y) => x(y)`.

The higher-order function composed by the lambda process, that is explaining the relationship of  algebra expressions and program block.

### Function Currying
The process `f(x, y) = x(y) --> f(x) => (y -> x(y))` called currying. It cost a parameter and return function as result.

### Function Composition
f(x) compose g(x) is g(f(x)).

The Composition Function did not cost data. The function is just waiting data to do something, it's similar to or same to pipe without the function executed order. `compose(f, g)` equal `pipe(g, f)`.

### Transducers
