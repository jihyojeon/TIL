## Graph traversal

- Breadth-first and depth-first search are methods to traverse any graph (which includes all trees).
- BFS explores all adjacent nodes before going to the next level, whereas DFS explores a path till the end before exploring any other adjacent nodes.
- The general procedure for a tree starts with storing the root node in a container. Then, while there are nodes in the container, you get the “next” one, and store all its children in the container again, repeating until done.  - As a container, for breadth-first use a Queue, and for depth-first a Stack.
- In a graph, you can start from any vertex, and add the adjacent vertices to the container in any order. If the graph is cyclical, you also you need to keep track of all the visited vertices to avoid processing the same vertex multiple times.
- Breadth-first search is used when the solution is likely located near the starting point or you need to compare all possible paths to a certain node, whereas depth-first search is used when you need to get to the end of a path to understand if it works or not.
- For example, in a graph you use BFS if you want to find the shortest path between two vertices, whereas you use DFS if you want to find the exit of a maze.

## Path Finding
- The two most most popular algorithms to find the shortest path between two nodes in a graph are “Dijkstra” and “A*“.
- Dijkstra keeps exploring the least expensive node to reach from the last known location, and checks the shortest path to get there from the starting point, until it reaches the destination.
- A* instead uses an heuristic function to understand if it’s getting closer to the destination, and decides its next move based on it.
- A* is faster than Dijkstra, but works only if the heuristic can estimate the target distance.