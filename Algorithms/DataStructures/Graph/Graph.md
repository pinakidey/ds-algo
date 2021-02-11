

### ADJACENCY LIST & ADJACENCY MATRIX DIFFERENCES & BIG-O

|V| - number of vertices
|E| - number of edges


|OPERATION   |   ADJACENCY LIST  |   ADJACENCY MATRIX   |
|------------|-------------------|----------------------|
|Add Vertex  |       `O(1)`      |       `O(|V^2|)`     |
|Add Edge    |       `O(1)`      |       `O(1)`         |
|Remove Vertex|   `O(|V| + |E|)` |       `O(|V^2|)`     |
|Remove Edges|       `O(|E|)`    |       `O(1)`         |
|Query       |    `O(|V| + |E|)` |       `O(1)`         |
|Storage     |    `O(|V| + |E|)` |       `O(|V^2|)`     |
|Space Req.  | Takes less space for sparse graphs  |  Takes more space for sparse graphs |
|Iteration   | Faster to iterate over all edges  |  Slower  |
|Lookup     | Slower to lookup specific edge | Faster    |

