State design pattern is a behavioural software pattern that allows an object
to alter its behaviour when its internal state changes

State design pattern focues on encapsulating states and theeir behaviours
as objects.

State design pattern eliminates long conditional logic and follow solid design
principles


How the state pattern works.
- Context:The main object that has a dynamic internal state(Phone)
- State interface(or abstract class): Defines common interface for different state behaviours
- concrete state clases:These are object for states eg. NormalState,VibrateState, SilentState.
- State Transitions: The contect typically has a method to change its current state.
usually via external triggers or internal logic

When the context receives a request like phone.receiveCall(), it doesn;t handle it
directly. Instead, it delegates the work to its current state object eg. 
currentState.handleIncomingCall().The outcome vaires depending on the state. 
Polymorphism at work.

To avoid if/else statements;
- Each state logic lives in its own class
- Context code becomes simpler
- Adding a new state does not involve modifying an existing switch or if/else statement
(Open closed principle& single responsibility principle obeyed as we can introduce new states without changing the context or other states code)

Use State pattern when:
- an object's behaviour depends on its current state and itneeds to change behaviour at
runtime depending on that state
- you have multiple behaviours associated with an object that could be cleanly seperated.
- you want to avoid duplication of state-checking logic
- you anticipate that new states might be added in the future or the logic per state will 
get more complex

When not to use the the State pattern:
- If an object ahas only a couple of states and very simple differences in behaviour,
then the state pattern may just be overkill
- If state changes are rare or the logic is unlikely to grow.
- If you have fixed number of states that never change and logic per state is straightforward

A state machine with ten states and complex transitions is much easier to manage
with the State Pattern structure.

Why state Pattern over enums and flags?
- Scattered logic: if multiple behaviours depend on the mode and you have similare if/else or switch blocks in many methods
- Violation of open/closed principle: Adding a new mode or behaviour leads to modification
of the switch statements
- Difficult maintenance: the more complex the behaviours and state the harder to maintain 