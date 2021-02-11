import WeightedGraph from "./WeightedGraph.js"
import PriorityQueue from "./../Heap/PriorityQueue_MinHeap.js"


/* 
    Usage Example:
    - GPS: finding the shortest route
    - Network Routing: finding open shortest path for data
    - Biology: modelling spread of virusus
    - Airlines: finding shortest/cheapest route
*/


/**
 * Dijkstra's Algorithm to find the shortest path between two vertices in a weighted Graph
 */

let graph = new WeightedGraph();
graph.addVertex("Tokyo");
graph.addVertex("San Francisco");
graph.addVertex("Las Vegas");
graph.addVertex("Delhi");
graph.addVertex("Dubai");
graph.addVertex("New York");
graph.addVertex("Beijing");
graph.addVertex("Pyongyang");

graph.addEdge("Tokyo", "Delhi", 8);
graph.addEdge("Tokyo", "Beijing", 4);
graph.addEdge("Beijing", "Pyongyang", 2);
graph.addEdge("Tokyo", "Las Vegas", 12);
graph.addEdge("Tokyo", "San Francisco", 10);
graph.addEdge("San Francisco", "Las Vegas", 3);
graph.addEdge("San Francisco", "Beijing", 12);
graph.addEdge("Delhi", "Dubai", 6);
graph.addEdge("Delhi", "Beijing", 6);
graph.addEdge("Dubai", "New York", 14);
graph.addEdge("New York", "Las Vegas", 6);
graph.addEdge("New York", "San Francisco", 8);

/**
 * Dijkstra's Algorithm to find the shortest path between two vertices in a weighted Graph.
 * @summary TC: O(|E|+|V|log|V|)
 * @description Implemented using DFS, without a PriorityQueue (MinHeap)
 * 
 * @param {String} start - name of starting vertex
 * @param {String} end - name of destination vertex
 * 
 * @description Algorithm
 * - Pick the node with the smallest known weight/distance from start to visit first. (Use a PriorityQueue here)
 * - Move to the new node.
 * - Look at each of its neighbors.
 * - For each neighbor, calculate the sum of distance from the starting node
 * - If the distance is lesser than prev saved value, save the shorter distance
 */
function findShortestPath(start, end) {

    // Check if valid vertex
    if(!graph.adjacencyList[start] || !graph.adjacencyList[end]) return null;
    if(start === end) return [[start, end], 0];

    let nodes = new PriorityQueue();
    let distances = {};
    let previous = {};

    // Set initial state
    for(let vertex in graph.adjacencyList) { //O(V) ~ O(VLogV)
        distances[vertex] = vertex === start ? 0 : Infinity;
        nodes.enqueue(vertex, vertex === start ? 0 : Infinity); //O(1) ~ O(LogV)
        previous[vertex] = null;
    }

    // Loop as long as there is an item in the PriorityQueue 
    while(nodes.values.length) {
        // Dequeue the node with lowest priority
        let vertex = nodes.dequeue().val; // {val: xx, priority: y} //O(logV)
        // Break if end is reached
        if(vertex === end) break;
        
        // For each of its neighbor
        if(vertex || distances[vertex] !== Infinity) {
            for(let neighbor of graph.adjacencyList[vertex]) { // O(|E|)
                // Save the total distance from start if it's lower than before            
                let sumOfDist = neighbor.weight + distances[vertex];
                if(sumOfDist < distances[neighbor.node]) {
                    // Set distance
                    distances[neighbor.node] = sumOfDist;
                    // Set previous
                    previous[neighbor.node] = vertex;
                    // Add to PriorityQueue
                    nodes.enqueue(neighbor.node, sumOfDist);
                }
            }
        }
    }
     // Create the Path
    let path = [];
    let last = end;
    while(previous[last]){
        path.push(last);
        last = previous[last];
    }
    path.push(start);

    // Return [path, distance]
    return [path.reverse(), distances[end]]
}



console.log(findShortestPath("New York", "Pyongyang")); // [ [ 'New York', 'San Francisco', 'Beijing', 'Pyongyang' ], 22 ]
console.log(findShortestPath("Dubai", "Dubai")); //[ [ 'Dubai', 'Dubai' ], 0 ]