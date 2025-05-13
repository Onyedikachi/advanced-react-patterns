Factory Method is a creational pattern. It is all about flexible object creation.
it is also known as the Virtual Constructure.

The factory method is a creational design pattern that defines an interface or abstract method for creating an object, but lets subsclasses decide which class to actually instanctiate.

ie. A base class or interface declares a factory method for producing some product object, and the subclasses override this method to create specific concrete products

Thispattern pushes the decision of which exact object to create out of the client code and into specialized creator classes

## Key parts of the Factory Method
- Creator: An abstract class which declares the factory method
- A product interface or abstract class 
- Mutliple ConcreteProduct implmentations. For each ConcreteProduct type there is a corresponding ConcreteCreator classthat overides the factory method to instantiate the product.

The creator's code and the client treatsthe product abstractly vida the Product interface, without knowing the exact subclass

Object creation is delegated to subclasses. The base crator class doesn't know exactly what the concrete product will be produced. it just defines the method that asks for a product. Subclasses provide the implementationfor thatmethod, therby deterimingthe actual product class. The inversion of control in objectcreation gives the pattern its flexibility

## Analogy from Real life.
Imagine a large pizza franchise with stores in New York and Chicago. Both cities make cheeze pizza, but New York style pizza is thin crust, while Chicage style is deep dish. The franchase decides to provide a unified online ordering system. You call a single orderPizza("cheeze"), and depending on the store(new york or chicago) is fulfilling the order, you get a thin crust or a deep dish pizza. From the customer's perspective, they just ordered a cheeze pizza; they don't know or care which exact class of pizza they got- that's decided by the store.

In this analogy, this pizza store acts like the Creator, and orderPizza uses a factory metho, createPizza interally. The Product is the pizza (a base class or interface Pizza). The NewYorkStore overrides createPizaa("vheeze") to return a NYStyleCheezePiza,while ChicagoStore returns a ChicagoStypleCheesepizza.

## When to Use the Factory Method Pattern
- When you don't know beforehand what exact types of objects you'll need i.e you nned
to defer decision on which concrete implementation later on
- When you want to avoid tight coupling to concrete classes
- When you want to follow open/closedprinciple for object creation
- When designing frameworksor libraries
- When you need slight variations in object cration. When you want to do extra steps when creating an object

Skip factory method when objec creation is simle and unlikely to change 