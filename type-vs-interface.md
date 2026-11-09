# Type Aliases vs Interfaces in TypeScript

TypeScript provides two powerful ways to define custom types: type aliases and interface. Both help developers describe the structure of objects, improve code readability, and maintain type safety. However, they have some important differences that make each useful in different situations. The main difference is that interfaces are primarily designed to describe object shapes, while type aliases are more flexible and can represent various types, including primitives, unions, intersections, tuples, and objects. Interfaces define the structure of an object. They also support declaration merging, meaning multiple declarations with the same interface name are automatically combined. Type aliases can define object structures as well as union, intersection, and primitive types.

# When Should I Choose One?

Choose interface when defining object structures, designing class contracts, or building public APIs that may benefit from declaration merging.

Choose type when working with union types, intersection types, tuples, primitive aliases, or complex type combinations.