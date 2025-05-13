Singleton is a creational design pattern that restricts a class to one instance and provides global access point to the instance and provides a global access point to that instance.

In other words, no mater how many times you try to create the object, you alway get back the same single instance.

A consturctor private and exporsing a static method or property to gget the sole instance

## Problems it solves
- controlled instantiation or single instance
- global access point: better than flobal vairables that can be overwritten or create namespace pollution.

Singleton makes sure there is a single resource manager and that it's easily accessible

## Advantages of Singleton
- Single instance enforcement
- Global access conveninece
- Lazy initialization
- Controlled access/safety (thread sage access to a shared resource).Note you have to design for thread safety
- Avoids global namespace pollution

## Disadvantages and How to mitigate them
- Hidden Dependencies (Global State)
- Tight coupling- to solve depend on abstractions
- Difficult unit testing -  intect itsinterface to avoid calling the singleton directly
also ensure the singleton has a method to reset or replace its instance
- Lifecycle and Resource Management
- Limited Extensibility
- Violation of Single Responsibility Principle (SRP) 