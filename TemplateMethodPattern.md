The Template Method uses inheritance to define the skeleton of an algorithm and lets subclasses customize certain steps.

The Template method is a behavioural design pattern that defines the outline of an algorithm in a base class, allowing subclasses to provide specific implementations for some of the steps.

## How the Template Method Works
- Abstract Base Class: it declares the template method and the abstract or hook operations
- Template method: This method orchestrates the algorithm. It is marked final(non-overrifable) to prevent subclasses from altering the overal sequence

```
void execute(){
    step1();
    step2();
    step3();
}
```
- Primitive Operations(Steps): This steps like 1,2 and 2 are typically abstract methods i.e no implementation in the base class or hook methods( base class provides a defualt or empty implementations). Subclasses must override abstract methods to provide a concrete behaviour, while hook methods are optional to override.


In practice, when you run the algorithm, you instantiate a subclass and call the 
template method. The base Class's template method runs, and as it reaches each step,
it will call the subclass's implementation for that step. The subclass code hooks into the predefined sequence. The design ensures that the overall sequence of actions is fixed the base class, but indiviual steps can vary in the subclasses.

A key aspect of the template method is that it promotes code reuse.
Common code for algorithm's invariant parts lives in base class, while unique behaviour is in subclasses.

## Template Method Vs Strategy Pattern
- Template method is inheritance-based while strategy is composition based
- Template method has fixed algorithm structure while Strategy is swappable
- Template method's base class runs the whole algorithm and controls the sequence, while subclasses provide implementations for certain steps. Onthe other hand the enire algoritm is delegated to the strategy object.
- Template method is ideal when you want variation at some steps, and Strategy when you need a completely differrent algorithms to achieve the same goal and can be choosen interchangeably
- Template method avoid code duplicaiton across multiple algorithm implementations. Howeverif you used strategy in a case where algorithms share a lot of common steps, you might end up duplicaiton that common code in each strategy class.
- Template method is less flexible as it enforces a sequence of steps, strategies gives maximum flexibility

## Real world Analogy
- Makin a hot beverage in known steps: boil water, brew the beverage, pour into cup, add condiments