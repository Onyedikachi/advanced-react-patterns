Strategy Pattern is a behavioural design pattern that allowsan algorithm's behaviour to be selected at runtime, without hardcoding all the possibilities in the code.

- you define a family of algorithms, encapsulate each one in a seperate class or strategy and make them interchangeable in your program

## Key pieces of the Strategy pattern
- A Strategy Interface - defines a common method(s) each algorithm must implement.
- A concrete Strategy Classes - each class implements the strategy interface,
providing a different algorithm or behaviour.
- A context class - it uses the strategy.It has a reference to a strategy, and when it needs to perform the algorithm, it calls the strategy's method instead of doing it itself

The context is decoupled, it doesn't need to know which strategy is being used

## The benefits
- Eliminates lengthy conditional logic
- Open for extension, closed for modification
- improved maintainability
- Better testability
- Runtime flexibility(easily add new behaviours, swap algorithms without pain, different context use the same strategy, use configuration to decide which strategy to use)

*Note under the hood you still need a bit of logic to choosewhich strategy to use- but the logic is cleanly seperated. Often a simple factory or dependency injection framework handles the selection.


## State vs Strategy pattern
From studing Strategy and State Patterns the major difference is State pattern has an internal method for switch states(because classes reference context) while the Stragey pattern does not switch strategy internally ( as the strategy class does not reference the context)

## Real life analogy
- A Video streaming service like Netflix implementing different strategies for playing videos - high-definition(HD), stardard definition (SD), low definition (LD). All implementing the Streaming Strategy Interface
- A Card payment service switch methods form Card, Bank Transfer etc

## When the Strategy Pattern is overkill
- few variants or unlikely to change
- low complexity logic
- performance critical inner loops
- team understanding