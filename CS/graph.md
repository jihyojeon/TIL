## Graph traversal

- Breadth-first and depth-first search are methods to traverse any graph (which includes all trees).
- BFS explores all adjacent nodes before going to the next level, whereas DFS explores a path till the end before exploring any other adjacent nodes.
- The general procedure for a tree starts with storing the root node in a container. Then, while there are nodes in the container, you get the “next” one, and store all its children in the container again, repeating until done.  - As a container, for breadth-first use a Queue, and for depth-first a Stack.
- In a graph, you can start from any vertex, and add the adjacent vertices to the container in any order. If the graph is cyclical, you also you need to keep track of all the visited vertices to avoid processing the same vertex multiple times.
- Breadth-first search is used when the solution is likely located near the starting point or you need to compare all possible paths to a certain node, whereas depth-first search is used when you need to get to the end of a path to understand if it works or not.
- For example, in a graph you use BFS if you want to find the shortest path between two vertices, whereas you use DFS if you want to find the exit of a maze.