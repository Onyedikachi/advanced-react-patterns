Iterator pattern tackles ow to traverse a collection of objects without exposing
the collection's internal structure.

the typical for-in loop is of the iterator pattern in action

The iterator pattern provides a standard way to move through elements of a
collection one by one, without needing to know how those elements are stored under
the hood

The pattern involves two key roles:
- An iterator(often an interface or protocol) that defines how to traverse
(eg. methods like next() and hasNext())
- An Aggregate that knowshow to create an iterator. The collection provides
a method (like createIterator()) that returns an iterator for its elements.


## How the iterator pattern works
Iterator pattern works by separating the traversal logic from the collection self.
The collection is responsible for storing data, while the iterator is responsible for 
moving through that data.

Capabilities supported by the iterator patterns include:
- multiple traversal methods (forward, backward, sorted order etc)
- multiple simultaneous iterations qirhour interference.
- uniform interface - if different collections all provide iterators, you can process
them in a uniform way as long as it presents the iterator with the standard next()/hasNext() methods.
- hiding complexity - you don;t need to know if the collection is an array, a linked list,
or something else

## Advantages of Using the Iterator Pattern
- Standardized Access
- No Exposure of Internals
- Multiple ways to Transverse
- Concurrent Iteration
- Simplified Collection Interface: Just one method to makeIterator or createIterator(), all the tranversal logic lives in the iterators

## Disadvantages and Limitations
- Increased complexity (additional  classes or structures and additional layters of indirection)
- Slight performance overhead ( you gain flexibility at the cost of a tyiny bit of efficiency)
- Single Direction usually
- Redunancy in Modern Languages( you get iterators for free or in-built in modern high level languages)

## When to Use a Custom Iterator
- For custom Data Structures
- Multiple Traversal Order
- Filtering or Transformin on the fly
- Comining Mutliple Collections
- Controlled interation - when you want to pause/resume traversal or explicityly control the pace of iteration from outside
- Unified Interfaces and APIs
