

/**
 * A simple implementation of an Undirected Unweighted Adjacency List.
 * @description This Graph doesn't allow duplicates
 */
class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    /**
     * Add a Vertex.
     * @description TC: O(1)
     * @param {any} name - name of the vertex
     * @returns {boolean} `true` if success, `false` if a vertex with same name already exists
     */
    addVertex(name) {
        if(this.adjacencyList[name]) return false;
        this.adjacencyList[name] = [];
        return true;
    }

    /**
     * Creates an edge/connection between two vertices.
     * @description TC: O(1)
     * 
     * @param {any} vertex1 - First Vertex
     * @param {any} vertex2 - Second Vertex
     * @returns {boolean} `true` if successful, `false` if either of the vertices do not exist
     */
    addEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return false;
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        return true;
    }

    /**
     * Removes a edge/connection between two vertices.
     * @description TC: O(|E|)
     * 
     * @param {any} vertex1 - First Vertex
     * @param {any} vertex2 - Second Vertex
     * @returns {boolean} `true` if successful, `false` if either of the vertices do not exist or if there is no connection edge between them
     */
    removeEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return false;
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    /**
     * Removes a vertex and all edges connected to it..
     * @description TC: O(|V|+|E|)
     * 
     * @param {any} vertex - Vertex name
     * @returns {boolean} `true` if successful, `false` if the vertex does not exist.
     */
    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) return false;        
        while(this.adjacencyList[vertex].length) {
            let adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        // Remove the Vertex
        delete this.adjacencyList[vertex];
        return true;        
    }

    /**
     * Depth First Search using Recursion.
     * 
     * @param {any} vertex - Vertex
     * @returns {Array} - array containing all the unique vertices, discovered by a DFS startin from `vertex`
     */
    DFS(vertex) {
       let result = [];
       let visited = {};
       let adjacencyList = this.adjacencyList;

        /* Helper Recursive function for DFS */    
        (function traverse(vertex) {
            if(!adjacencyList[vertex]) return; 
            result.push(vertex);
            visited[vertex] = true;
            // For each non-visited neighbor, traverse
            for(let neighbor of adjacencyList[vertex]) {
                if(!visited[neighbor]) return traverse(neighbor);
            }
        }) (vertex)

       console.log(result);
       return result;
    }
    /**
     * Depth First Search using Iteration.
     * 
     * @param {any} vertex - Vertex
     * @returns {Array} - array containing all the unique vertices, discovered by a DFS startin from `vertex`
     */
    DFSIterative(vertex) {
        let S = [vertex]; // Stack
        let result = [];
        let visited = {};
        visited[vertex] = true;

        while(S.length) {
            let node = S.pop();
            result.push(node);
            // Add all neighbors to the stack
            for(let neighbor of this.adjacencyList[node]) {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    S.push(neighbor);
                }
            }
        }
        console.log(result);
        return result;
    }

    /**
     * Bredth First Search.
     * 
     * @param {any} vertex - Vertex
     * @returns {Array} - array containing all the unique vertices, discovered by a BFS startin from `vertex`
     */
    BFS(vertex) {
        let queue = [vertex];
        let visited = {};
        let result = [];
        visited[vertex] = true;
        
        if(!this.adjacencyList[vertex]) return []; 

        while(queue.length) {
            let node = queue.shift();
            result.push(node);
            for(let neighbor of this.adjacencyList[node]) {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
        console.log(result);
        return result;
    }
}


/* let graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("San Francisco");
graph.addVertex("Las Vegas");
graph.addVertex("Delhi");
graph.addVertex("Dubai");
graph.addVertex("New York");

graph.addEdge("Tokyo", "Delhi");
graph.addEdge("Tokyo", "Las Vegas");
graph.addEdge("Tokyo", "San Francisco");
graph.addEdge("San Francisco", "Las Vegas");
graph.addEdge("Delhi", "Dubai");
graph.addEdge("Dubai", "New York");
graph.addEdge("New York", "Las Vegas");
graph.addEdge("New York", "San Francisco");

//graph.removeEdge("Delhi", "Dubai");
//graph.removeVertex("Dubai");
console.log(graph);
graph.DFS("Delhi");
graph.DFSIterative("Delhi");
graph.BFS("Delhi"); */


export default Graph;