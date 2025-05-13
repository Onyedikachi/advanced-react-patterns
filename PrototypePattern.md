prototype pattern is a creational design pattern that creats new objects by cloning existing ones, instead of building them from the scratch.

i.e you copy an existing object (the protoype) to make a new object, rather than
constructing a fresh object using a constructor

useful when object creation is expensive or complicated.

The newly cloned object can thenbe modified as needed without affecting the original.

## When to Use Prototype vs Constructing from Scratch

- Complex or Expensive Object Creation
- Lots of Configuration options
- Unknown concrete types at runtime
- Avoid constructor pollution
- Adding types at runtime
- Reduces subclassing and complexity
- Hides creation complexity
- Decouples code from concrete classes
- Copy and tweak
- Can work with dynamic loading