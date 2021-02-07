### Array
### Linked List (SLL/DLL) 
- Review get()
- Review reverse()
### Stack
### Queue
### Tree
- Differences with LinkedList (Non-linear, Nodes are parent/child relationship, a node can be connected to more than two nodes, trees can be balanced)
- Binary Tree
- Binary Search Tree (BST)
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
### Heap
- Binary Heap (Each node can have maximum of 2 children, but unlike BST there is no order, and heap is as compact as possible i.e., every left & right are filled before moving down, left children are filled out first)
  - Types
    - Max Binary Heap (Parent node is always **larger** than all of its children)
    - Min Binary Heap (Parent node is always **smaller** than all of its children)
  - Usage: Priority Queue, Graph Traversing
  - **Performance: Insert O(1) ~ O(logN), Find is always O(1)**
  
- Priority Queue [Each elements has a priority. Elements with higher priority (often marked by a lower number) are serverd before elements with lower priority]
- 
### HashTable
### HashMap
### Graph
- Adjacency Matrix
- Adjacency List
- Add/Remove Vertex
- Add/Remove Edge
- Traversal
  - Depth First Search (DFS)
  - DFS Recursive
  - DFS Iterative
  - Bredth First Search (BFS)
### Hashing
### Matrix
### Djikstra's Algorithm
- Weigthed Graph
- Waalking Through Algorithm
### Dynamic Programming
- Overlapping Problems
- Optimal Substructure
- Memoization

### Trie
### LRU Cache