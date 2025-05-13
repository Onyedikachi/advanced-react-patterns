A command pattern is a behavioural desin pattern that turns a request into a stand-alone object containing all information about the request
i.e wrapping an operation(a method call and its parameters) inside an object, so it
can be passed around, stored, logged, or executed later.

- Also known as the Action or Transaction pattern

## Official definition
The command pattern encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.

## How the Command Pattern Works
the roles involved include:
- command interface: declares an iperation that all conrete commands will implement
- concrete command: It implements the command interface. It oftensotres
the receiver and any necessaryaction details(parameteres)
- receiver: The object that actually performs the work when the command's execute()
is called.
- invoker(sender): The object that triggers the command. It knows how to invoke
the command by calling execute(), but does not know the detailsof the command's action or the receiver's logic.
- client: THE CODE that creates the concrete command objects and sets up which receiver they affect. In many scenarios, the client is the part of the code where the pairing between invokers and commands is configured.

## summary
The command pattern lets you encapsulate a request(method call) as an object.
The client createscommandobjests and sets their receiver.The invoker triggerscommands
withoutneeding to know the specifics.
The receiver handles the actual logic.
This decouplingmakesit easy to add new commands or change existing ones without impacting
other parts of the code, since the invokers and clients only interact withthe abstract
commandinterface

## Benefits of the Command Pattern
- Decoupling of Sender and Receiver
- Flexibilityin Switching or Adding Actions
- Undo/Redo and History. Commands can store state for undo or have and undo() method to
reverse their effect. By keeping a stack of executedcommands,implementingmulti-step
undo/redo becomes straightforward.
- Queuing, Scheduling, and Logging. You can queue up command objects to be executed later or in a specific order.For task scheduling systems or handling asynchronous workflows.
- Single Responsiblity& Open/Closed.Eachcommandcan be tested inisolation and modified without affecting others.
- Higher-level Operations: Commands can be composed into macro commands,enabling complex operations to be built from simpler ones.


## Cons
- increased complexity and class count
- Memory and Performance overhead
- Dependency Management
- No Direct Result Return
- Debugging Complexity
- undo Implementation Complexity

## When to usethe command pattern
- you need to decouple an object making a request from the object that will execute it
-you plan to support undo/redo or want a history of actions
- you want to queue, schedule, or execute operations at different times(in parrallel o
in different contexts)
- you have a high-leve operation that cen be compossed of simpler operations
- mulitplecallbacksor actions need to be easily swappedor configured
- you wan to log or audit operations
