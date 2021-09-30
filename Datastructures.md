### Data Structures

## Stack
It’s like a stack of paper.
It offers “push” and “pop” methods.
In programming, function calls form a stack.
It’s a “LIFO” collection (i.e. “last in, first out”).

## Queue
It’s like a queue at a restaurant.
It offers “enqueue” and “dequeue” methods.
In computers, CPU operations form a queue.
It’s a “FIFO” collection (i.e. “first in, first out”).

## Linked list
It’s a linear collection of data elements, called nodes, each pointing to the next node by means of a pointer.
In double linked lists, each node also has a pointer to the previous one.
Insertion and deletion of nodes is not expensive.
There is no need to define an initial size.
It’s a dynamic data structure.

## Set
It’s a collection of elements, without any particular order, and no repeated values.
Operations that you can perform on sets include:
adding and removing members
checking if a set contains an element
calculate the union, intersection, and difference of multiple sets
check if a set is a subset of another

## Tree
It’s a non-linear collection of nodes that are connected to each other without having any cycles.
Each node has a value, and can have children.
Any sub-tree, forms a tree on its own.

## Array
It’s an ordered collection of elements, stored next to each other in memory.
The total length is known at the beginning, and each element occupies the same size.
Elements can be accessed in constant time.

## Hash table
It’s a structure that maps keys to values (aka “hash map”).
To do so internally it uses an array and a hash function.
A hash function maps data of arbitrary size to data of fixed size (aka “hash code”, “digest”, or simply “hash”).
Hash functions are deterministic (given the same input they always returns the same output) and uniform (map the expected inputs as evenly as possible over its output range).
For the purpose of hash tables, the hash function takes a key and a limit, and returns a number, guaranteeing to distribute keys evenly along the range.
When two or more keys are assigned the same index you have a key “collision” (aka “conflict”).
Key collisions are handled through linked lists.
To avoid too many collisions, or the usage of unnecessary space, hash tables can self-resize.

## Binary tree
It’s a tree where each node has at most two children.
The max number of possible nodes is (2^h)-1.
Is considered “complete” if every level, except possibly the last, is completely filled, and all nodes are as far left as possible.
Is considered “full” if every node other than the leaves has two children.

## Heap
It’s a semi-sorted tree, where parent nodes values are always greater (or always smaller) than those of their children.
The most used type of heap is a binary heap, which is a binary tree, ordered as we just mentioned and complete.
It’s a good tradeoff between the cost of maintaining complete order and the cost of searching through random chaos.
It’s useful whenever you need to immediately find the object with the highest (or lowest) priority.

## Binary search tree
It’s a sorted binary tree.
Each node can have maximum 2 children (left and right).
The value in each node must be greater or equal to any value stored in the left sub-tree, and smaller or equal to any value stored in the right sub-tree.
The shape of the tree depends entirely on the order of insertion or deletion of its nodes.