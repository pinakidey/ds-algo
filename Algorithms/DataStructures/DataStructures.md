### Array
### Linked List (SLL/DLL) 
- Review get()
- Review reverse()
### Stack
### Queue
### Tree
- Differences with LinkedList (Non-linear, Nodes are parent/child relationship, a node can be connected to more than two nodes, trees can be balanced)
- Binary Tree
- Binary Search Tree (BST) (**Generally (i.e. avg case), good for searching**)
  - Special type of Binary Tree. At most have 2 children per node. Nodes are sorted. All nodes having values lesser than the value of its parent node will be placed to the left left, all values higher to the right.
- AVL Tree
- B-Tree
- Red-Black Tree
- Decision Tree
- Tree Traversal
  - Breadth First Search (BFS)
  - Depth First Search (DFS) [PreOrder, PostOrder, InOrder]
    - "PreOrder" : For each node, visit node -> visit left -> visit right. (useful, when expoting or flattening a tree for subsequent reconstruction. Position of the root is always index 0.) 
    - "PostOrder" : For each node, visit left -> visit right -> visit node.
    - "InOrder" : For each node, visit left -> visit node -> visit right. (when used on a BST, elements are in order i.e. sorted)
### Heap (Optimized for Insertion/Deletion, Not good for Searching)
- Binary Heap (Each node can have maximum of 2 children, but unlike BST there is no order, and heap is as compact as possible i.e., every left & right are filled before moving down, left children are filled out first)
  - Types
    - Max Binary Heap (Parent node is always **larger** than all of its children)
    - Min Binary Heap (Parent node is always **smaller** than all of its children)
  - Usage: Priority Queue, Graph Traversing
  - **Performance: Insert O(1) ~ O(logN), Find is always O(1)**
  
- Priority Queue [Each elements has a priority. Elements with higher priority (often marked by a lower number) are serverd before elements with lower priority]
- 
### HashTable / HashMap [Search/Insert/Delete: avg-O(1), worst-O(n)]
- Implementations (Python: Dictionary, JS: Object/Map, Java/Go/Scala: Map, Ruby: Hash)
- Differences (in Java)
- Differences with HashSet
- Hash Function (Constant-time, same output for same input, output should distribute uniformly)
  - FNV Hash, MurmurHash, SDBM
- How collisions occur
- How to handle collisions (Seperate Chaining, Open Addressing, Linear Probing)
### Graph (a finite set of vertices and edges)
- Usage
  - Everywhere
  - Social networks
  - Location / Mapping
  - Routing algorithms
  - Visual Hierarchy
  - File System Optimizations
- Differences with Tree
- Types
  - Undirected vs Directed
  - Unweighted vs Weighted (When values are assigned to the edges)
- Adjacency List [Ideal for Data having Lots of Sparsly connected Nodes]
- Adjacency Matrix [Ideal for Data having limited number of Nodes with frequently changing connections between them or if you need to query optimum path between two edges]
- BigO comparison
- Add/Remove Vertex
- Add/Remove Edge
- Query
- **Traversal** (P2P networking, Web Crawlers, Shortest path problems, Recommendations)
  - Bredth First Search (BFS)
  - Depth First Search (DFS)
  - DFS Recursive
  - DFS Iterative
### Hashing
### Matrix
### Dijkstra's Algorithm [O(|E|+|V|log|V|)]
- Weigthed Graph
- Waalking Through Algorithm

### A* Algorithm
- Difference with Dijkstra's Algorithm
- Why is it faster?
### Prim's Algorithm [ O(|V+E| * logV) ]

### KMP Algorithm
### Dynamic Programming
A method of solving complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once and storing their solutions.
- Overlapping SubProblems (e.g. Fibonacci series)
- Optimal Substructure (e.g. Fibonacci series, finding shortest path in a graph)
- Memoization
- Tabulation (Better space complexity)
### Advanced Data Structure
- Trie
- LRU Cache
- Decision Tree