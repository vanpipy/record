# Java learning
it from the java tutorials for JDK 8.

# Language basics
* Variables
    + Instance Variables(Non-Static Fields)
    + Class Variables(Static Fields) `final static int numGears = 6;`
    + Local Variables `init count = 0;`
    + Parameters `public static void main(String[] args)`
    + Naming - it's no different to other code language.
* Operators
* Expressions, Statements, and Blocks
* Control Flow Statements

#### Basic example

    //Operators[+,-,*,/,%...etc] -> Expressions -> Statements -> Blocks | -> Block
    char prefix = 'A';                                                  |
    char body = 'B';                                                    |
    char expression;                                                    |
                                                                        |
    if (boolean) {                                  | -> Statement      |
        expression = prefix + body; | -> Expression |                   |
    }                                               |                   |

    //Control Flow Statement
    if (condition) {
        doSomethingEqualCondition();
    }

    switch(condition) {
        case somethingEqualCondition:
            doSomething();
            break;
        default:
            doDefault();
    }

    while(condition) {
        doSomethingEqualCondition();
    }

    do {
        doSomethingEqualCondition();
    } while(condition)

    for(int i = 0; i < 10; i++) {
        doSomething();
    }

# Classes and Objects

#### Classes

```
    public class Bicycle {

        //three fields
        public int cadence;
        public int gear;
        public int speed;

        //one constructor
        public Bicycle(int startCadence, int startSpeed, int startGear) {
            gear = startgear;
            cadence startcadence;
            speed = startspeed;
        }

        //methods
        public void setCandence(int newValue) {
            cadence = newValue;
        }

        public void setGear(int newValue) {
            gear = newValue;
        }

        public void applyBrade(int decrement) {
            speed -= decrement;
        }

        public void speedUp(int increment) {
            speed += decrement;
        }
    }

    public class MountainBike extends Bicycle {
        ...
    }

```

that is the explaination of `fields, local variables and parameters`.
1. Member variables in a class --- these are called fields.
2. Variables in a method or block of code --- these are called local variables.
3. Variables in method declarations --- these are called parameters.

#### Objects
1. Controling access to member of a Class - public, private, protected, _no modifier_.
2. Understanding Class Members - _static_ and otherside.

```
    public class Bicycle {
        private int cadence;
        ...

        private int id;

        private static int numberOfBicycle = 0;

        private final static int PI = 3.141592653589793; //it can not be changed anymore.

        public Bicycle(int startCadence, int startSpeed, int startGear) {
            cadence = startCadence;
            ...

            id = ++numberOfBicycle;
        }

        public int getID() {
            return id;
        }
    }

    Bicycle.numberOfBicycle; //0

    newBicycle = new Bicycle(0, 0, 0);
    newBicycle.getID(); //1

    Bicycle.numberOfBicycle; //1
```

#### Nested Classes

#### Enum Types

# Annotations
Annotations, a form of metadata, provide data about a program that is not part of the program itself. Annotations hav no direct effect on the operation of the code they annotate.

Annotations have a number of uses, among them:

+ Infomation for the compiler - Annotations can be used by the compiler to detect errors or suppress warnings.
+ Compiler-time and deployment-time processing - Software tools can process annotation infomation to generate code, XML files, and so forth.
+ Runtime processing - Some annotations are availdable to be examined at runtime.

#### The format of an Annotation
The at sign character (@) indicates to the compiler that what follows is an annotation, just like below:
+ @Entity
+ @Override
+ @Author(name = "Jane")
+ @SuppressWarnings("unchecked")
+ ...

#### Where Annotations Can Be Used
Annotations can be applied to declarations: declaration of classes, fields, methods, and other program elements.

```
//Class instance creation expression
new @Interned MyObject();

//Type cast
myString = (@NotNull String) str;

//Implements clause
class UnmodifiedList<T> implements @Readonly List<@Readonly T> { ... }

//Throw exception declaration
void monitorTemperature() throws @Critical TemperatureExcetion { ... }
```

#### Predefined Annotation Types
The Predefined annotation types defined in java.lang are @Deprecated, @Override, @Suppresswarnings, @SafeVarages, @FunctionalInterface. And several meta-annotation types defined in java.lang.annotation. @Retention, @Documented, @Target, @Inherited, @Repeatable.

# Interfaces and Inheritance
+ `Interface` You can read more about interfaces here - what they are for, why you might want to write one, and how to write one.
+ `Inheritance` Describe the way in which you can derive one class from another.

#### Interfaces
An _interface_ is a reference type, similar to a class, that can contain only constants, method signatures, default methods, and nested types.

#### Inheritance
The idea of inheritance is simple but powerful: When you want to create a new class and there is already a class that includes some of the code that you want, you can derive your new class form the existing class, In doing this, you can reuse the fields and methods of the existing class without having to write (and debug!) them yourself.

# Numbers and Strings

#### Numbers
All of the numeric wrapper classes are subclasses of the abstract class Number include Byte, Integer, Double, Short, Float, Long.
```
int number = 40;
```

#### Strings
Strings are objects.
```
char ch = "a";
char[] charArray = { 'a', 'b', 'c', 'd', 'e' };

String greeting = "Hello";
String helloArray = { 'a', 'b', 'c', 'd', 'e' };
String helloString = new String(helloArray);

//creates empty bulider, capacity 16
String sb = new StringBuilder();
sb.append("Greetings");
```

#### Autoboxing and Unboxing
Autoboxing is the automatic conversion that the Java compiler between the primitive types and their corresponding object wrapper classes. For example, converting an _int_ to an _Integer_, a _double_ to a _Double_, and so on. if the conversion goes the other way, this is called _unboxing_.

# Generics
The compiler-time bugs can be detected easier than others, so the Generics add stability to your code by making more of your bugs detectable at compiler time.

Enabling programmer to implement generics glgorithms.

```
//The following code snippet without generics requires casting.
List list = new ArrayList();
list.add("hello");
String s = (String) list.get(0);

//re-write the code upon with using generics, the code does not require casting.
List<String> list = new ArrayList<String>();
list.add("hello");
String s = list.get(0) // no cast
```

# Packages
Packages are a feature of the Java programing language that help you to organize and structure your classes and their relationships to one another.

read [this](https://docs.oracle.com/javase/tutorial/java/package/packages.html) when try to use it.

# Object-Oriented Programing Concepts
It's some good questions for the concepts about OOP.

* What is an Object?
    + Objects are key to understanding object-oriented technology cause the examples exist everywhere, your dog, your bicycle, your television set.
    + Real-world objects share two characteristics: They all have state and behavior. Dogs have state(name, color, breed, hungry) and behavior(barking, fetching, wagging tail). Bicycle also have state(current gear, current pedal cadence, current speed) and behavior(changing gear, changing pedal cadence,applying brakes). Identifying the state and behavior for real-world objects is a great way to begin thinking in terms of object-oriented programing.
* What is a Class?
* What is Inheritance?
* What is an Interface?
* What is a Package?
