# Koa?
Koa is still a framework for node.js, aims to be smaller, more expressive, and more robust foundation for web applications and APIs.

As we know, node.js uses "Single Threaded Event Loop Model" architecture to handle multiple concurrent clients. So the words like "NodeJS is single-threaded" is a half truth.

Actually NodeJS is event-driven and single-threaded with background workers.

Koa depends on NodeJS features, not only the event-loop and also async function like yield, async, await etc.

Koa1.x use the keyword `yield` and Middleware architecture.

Koa2.x?

# The yield keyword
The `yield` keyword is used to pause and resume a generator function.

The `yield` keyword pauses generator function execution and the value of the expression following the `yield` keyword is returned to the generator's caller. It can be thought of as a generator-based version of the return keyword.

That is the why the code in koa

    function* (ctx, next) {
        ...

        return next();
    }

next to next can do something as description.

# Middleware
The generator and `yield` make this architecture dose work.

# Reference
[How Node.Js Single Thread mechanism Work ? Understanding Event Loop in NodeJs](https://codeburst.io/how-node-js-single-thread-mechanism-work-understanding-event-loop-in-nodejs-230f7440b0ea)
[Middleware](https://www.wikiwand.com/en/Middleware)
[yield](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)
[function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
