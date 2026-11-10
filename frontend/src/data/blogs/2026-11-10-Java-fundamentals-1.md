---
title: "Java Fundamentals - Questions"
slug: java-fundamentals-questions
date: 2026-11-10
tags: [Java, Interview]
description: "Fundamentasl of Java for SDET interview preparation"
category: "Software Engineering/interview"
cover_image_url: null


---

## 1. What is the difference between Method Overloading and Method Overriding 
In Java, method **overloading** lets you use the same method name with different parameters. Method **overriding** lets a subclass provide its own implementation of an inherited instance method.

```java 
class Animal {
    void speak() {
        System.out.println("Animal sound");
    }

    void speak(String name) {  // Overloads speak()
        System.out.println("Hello, " + name);
    }
}

class Dog extends Animal {
    @Override
    void speak() {             // Overrides Animal.speak()
        System.out.println("Woof");
    }
}
```

## 2. Explain the concept of Interfaces in Java and why they are important
An interface in Java defines a contract that classes can implement. It tells callers what operations they can use, and each implementing class can decide how those operations work.

## 3. What are the Collections in Java? an example
Collections are frameworks that provides interfaces and classes for storing and working with groups of objects.

| Interface | Use it when                                                   | Common implementation |
| --------- | ------------------------------------------------------------- | --------------------- |
| `List`    | You want items in sequence and allow duplicates               | `ArrayList`           |
| `Set`     | You want unique items                                         | `HashSet`             |
| `Queue`   | You want to hold items for processing, often in arrival order | `ArrayDeque`          |
| `Map`     | You want to look up a value by its key                        | `HashMap`             |

For exmaple:
```java
import java.util.ArrayList;
import java.util.List;

List<String> paymentMethods = new ArrayList<>();
paymentMethods.add("Card");
paymentMethods.add("Wallet");
paymentMethods.add("Card");

System.out.println(paymentMethods); // [Card, Wallet, Card]
System.out.println(paymentMethods.get(1)); // Wallet
```

## 4. Explain Access Modifiers in Java.
Access modifiers control where a class or member can be accessed. For members,
-  `private` limits access to the class,
-  `Default` allows access within the same package, 
-  `protected` also gives subclasses access across packages
-  `public` allows access from other packages.


# Exceptions
## 1. What is an Exception?
An exception is an event that disrupts the normal flow of a program’s execution. In Java, exceptions are objects that represent errors or other exceptional events. Exceptions can occur due to various reasons, such as incorrect user input, network problems, or attempting to access a file that doesn’t exist.

When an exception occurs, it causes the program to terminate abnormally, unless the exception is caught and handled.
## 2. Type of Exceptions
Java defines two main types of exceptions: checked and unchecked exceptions. There is also a third category known as errors.
2.1 Checked Exceptions
These are exceptions that are checked at compile-time. If a method throws a checked exception, it must be either handled within the method using a try-catch block or declared using the throws keyword in the method signature. Failing to do so will result in a compilation error.

e.g. IOExecption, SQLException, FileNotFoundException

2.2 Unchecked Exceptions (Runtime Exceptions)
Unchecked exceptions are not checked at compile-time; they occur at runtime. These exceptions are usually caused by programming mistakes, such as logic errors or improper use of APIs.
- NullPointer Exception
- ArrayIndexOutOfBoundsException
- ArithmeticException

2.3 Errors
Errors are serious problems that are beyond the control of the program. Errors typically represent abnormal conditions, such as running out of memory or a JVM failure. These are not intended to be caught and handled.

Examples of errors:
- StackOverflowError
- OutOfMemoryError
  
## 3. What happens if an exception is not handled?

If an exception is not caught, it propagates up the call stack. If it reaches the JVM without being handled, the program terminates and prints a stack trace.

You should explain stack unwinding and method call hierarchy.


## 4. Explain Exception Handling in Java and how you use it in automation.
In Java, I use try and catch to handle specific exceptions and finally for resource cleanup. In test automation, I catch an exception when I can add useful context or handle it in a meaningful way.
 For example, if a payment API call times out, I can catch the timeout exception and add the test step to the failure message. If the API returns a response, I use an assertion to check the payment status. I use finally for cleanup that needs to happen even if the test fails.


# String 
## 1. What is the difference between String, StringBuilder, and StringBuffer?
A `String` is immutable. Both `StringBuilder` and `StringBuffer` are mutable. I use `StringBuilder` when I need to build a string through repeated appends, such as generating a test report in a loop. `StringBuffer` synchronizes individual operations, which is useful when multiple threads share the same buffer.

