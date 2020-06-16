# The `new` operator

Follow the ecma document, the `new` operator can work with `NewExpression` always, but the propduction of the `NewExpression` is difference between ecma5.1 and ecma6.

## NewExpression and MemberExpression

* ECAMScript 5.1 NewExpression

```
MemberExpression :
  
    PrimaryExpression
    FunctionExpression
    MemberExpression [ Expression  ]
    MemberExpression . IdentifierName
    new MemberExpression Arguments

NewExpression :

    MemberExpression
    new NewExpression
```

* ECAMScript 6 NewExpression

```
MemberExpression[Yield] :
  PrimaryExpression[?Yield]
  MemberExpression[?Yield] [ Expression[In, ?Yield]  ]
  MemberExpression[?Yield] . IdentifierName
  MemberExpression[?Yield] TemplateLiteral[?Yield]
  SuperProperty[?Yield]
  MetaProperty
  new MemberExpression[?Yield] Arguments[?Yield]

NewExpression[Yield] :
  MemberExpression[?Yield]
  new NewExpression[?Yield]
```

Obviously, the yield or a promise is the new content in the ecma6.

## The interesting process of new operator

* ECAMScript 5.1

```
The production NewExpression : new NewExpression is evaluated as follows:

    1. Let ref be the result of evaluating NewExpression.
    2. Let constructor be GetValue(ref).
    3. If Type(constructor) is not Object, throw a TypeError exception.
    4. If constructor does not implement the [[Construct]] internal method, throw a TypeError exception.
    5. Return the result of calling the [[Construct]] internal method on constructor, providing no arguments (that is, an empty list of arguments).

The production MemberExpression : new MemberExpression Arguments is evaluated as follows:

    1. Let ref be the result of evaluating MemberExpression.
    2. Let constructor be GetValue(ref).
    3. Let argList be the result of evaluating Arguments, producing an internal list of argument values.
    4. If Type(constructor) is not Object, throw a TypeError exception.
    5. If constructor does not implement the [[Construct]] internal method, throw a TypeError exception.
    6. Return the result of calling the [[Construct]] internal method on constructor, providing the list argList as the argument values.
```

* ECAMScript 6

```
NewExpression : new NewExpression

    1. Return EvaluateNew(NewExpression, empty).

MemberExpression : new MemberExpression Arguments

    1. Return EvaluateNew(MemberExpression, Arguments).

The abstract operation EvaluateNew with arguments constructProduction, and arguments performs the following steps:

    1. Assert: constructProduction is either a NewExpression or a MemberExpression.
    2. Assert: arguments is either empty or an Arguments production.
    3. Let ref be the result of evaluating constructProduction.
    4. Let constructor be GetValue(ref).
    5. ReturnIfAbrupt(constructor).
    6. If arguments is empty, let argList be an empty List.
    7. Else,
        a. Let argList be ArgumentListEvaluation of arguments.
        b. ReturnIfAbrupt(argList).
    8. If IsConstructor (constructor) is false, throw a TypeError exception.
    9. Return Construct(constructor, argList).
```

Follow the document above, the new operator of the ecma6 have the same process to handle the NewExpression and MemberExpression. In the meantime, ecma5 takes two ways.
The obvious difference is that the ecma6 asserts the `constructProduction is either a NewExpression or a MemberExpression` and `arguments is either empty or an Arguments production`.

## Constructor
The definition of the constructor is same in the ecma5 and ecma6. That is a factor to explain that the process of `to implement inheritance and shared properties` is same in ECAMScript.

# Conclusion
The `class` is always a strict mode so it should have the assertions, and the constructor is `function object that creates and initializes objects`.

# References
* [ECAMScript 2015 Class Definition](https://262.ecma-international.org/6.0/#sec-class-definitions)
* [ECAMScript 2011 new operator](https://262.ecma-international.org/5.1/#sec-11.2.2)
* [Understanding the ECMAScript spec, part 2 #MemberExpression](https://v8.dev/blog/understanding-ecmascript-part-2#memberexpression)
* [Context Free Grammar](https://www.wikiwand.com/en/Context-free_grammar)
* [ECMAScript 2015 construct](https://262.ecma-international.org/6.0/#sec-constructor)
* [ECMAScript 2011 construct](https://262.ecma-international.org/5.1/#sec-4.3.4)
