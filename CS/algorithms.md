# Algorithm

## [Complexity analysis and big O notation](https://www.bigocheatsheet.com/)
- Complexity analysis studies the time (i.e. number of operations) and space (i.e. amount of storage required) complexity of a given algorithm.
- It describes a dynamic property, it focuses on how the complexity changes as the size of the problem changes.
- It considers the best, average, and worst case scenario.
- Big O notation is a method to annotate complexity. It typically considers the worst case (which often coincides with the average case).

## Constant complexity
- It’s written as O(k) or O(1).
- It’s independent of the size of the problem.
- Examples are accessing an item in an array, and reading from or writing to a hash table.

## Logarithmic complexity
- It’s written as O(log n).
- It grows by one each time the size of the problem doubles.
- An example is searching an item in a binary search tree (unless it’s very unbalanced).

## Linear complexity
- It’s written as O(n).
- It grows proportional to the size of the problem.
- Examples are for loops, and searching for an item in an array or a linked list.

## N log n complexity
It’s written as O(n log n).
It grows “log n” times linear to the size of the problem (aka linearithmic).
An example is the merge sort algorithm.

## Quadratic complexity
It’s written as O(n^2).
It grows squared to the size of the problem.
An example is a for loop inside another one.

## Exponential complexity
It’s written as O(2^n).
It doubles each time the size of the problem increases by one.
An example is generating all possible combinations from a list of elements (without repetitions).

## Factorial complexity
It’s written as O(n!).
It grows factorial to the size of the problem.
An example is generating all possible permutations from a list of elements (without repetitions).