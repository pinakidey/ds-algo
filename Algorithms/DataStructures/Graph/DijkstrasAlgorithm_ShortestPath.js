import WeightedGraph from "./WeightedGraph.js"


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

graph.addEdge("Tokyo", "Delhi", 8);
graph.addEdge("Tokyo", "Las Vegas", 12);
graph.addEdge("Tokyo", "San Francisco", 10);
graph.addEdge("San Francisco", "Las Vegas", 3);
graph.addEdge("Delhi", "Dubai", 6);
graph.addEdge("Dubai", "New York", 14);
graph.addEdge("New York", "Las Vegas", 6);
graph.addEdge("New York", "San Francisco", 8);

/**
 * Dijkstra's Algorithm to find the shortest path between two vertices in a weighted Graph
 * 
 * @param {String} start - name of starting vertex
 * @param {String} end - name of destination vertex
 * 
 * @description Algorithm
 * - Pick the node with the smallest known weight/distance to visit first.
 * - Move to the new node. Mark as visited.
 * - Look at each of its neighbors.
 * - For each neighbor, calculate the sum of distance from the starting node
 * - If the distance is lesser than prev saved value, save the shorter distance
 */
function findShortestPath(start, end) {

    // Check if valid vertex
    if(!graph.adjacencyList[start] || !graph.adjacencyList[end]) return null;
    if(start === end) return 0;

    let distFromStart = {};
    let visited = {};
    let previous = {};

    // Initialize distFromStart with Infinity for each vertex
    for(let vertex in graph.adjacencyList) {
        distFromStart[vertex] = Infinity;
    }
    // Set distance from start to start as 0
    distFromStart[start] = 0;

    // A DFS function to traverse 
    (function traverse(node){
        console.log("Visited: " + node);
        // Mark this node as visited
        visited[node] = true;

        let vertex = graph.adjacencyList[node];
        
        // For each neighbor
        for(let neighbor of vertex) {
            // Save the total distance from start if it's lower than before            
            let sumOfDist = neighbor.weight + distFromStart[node]
            if(sumOfDist < distFromStart[neighbor.node]) {
                distFromStart[neighbor.node] = sumOfDist;
                // Then save the previous node
                previous[neighbor.node] = node;
            }
        }

        // Find the known node nearest to start that is yet to be visited

        let min = {node: null, val: Infinity};
        for(let node in distFromStart) {
            if(!visited[node] && distFromStart[node] < min.val) {
                min = {node, val: distFromStart[node]}
            }
        }

        // If non-visited nearest node found, recurse
        if(min.node) {
            traverse(min.node);
        } else {
            return;
        }

    })(start)

    console.log(previous);
    let path = [end];
    let last = end;
    while(last !== start && Object.keys(previous).length){
        path.push(previous[last]);
        let temp = previous[last];
        delete previous[last];
        last = temp;
    }
    console.log(`Shortest Path between ${start} and ${end} is ${path.reverse().join("-->")} with distance ${distFromStart[end]}`);
    
    return distFromStart[end];
}



console.log(findShortestPath("Delhi", "Las Vegas"));