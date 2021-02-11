import Graph from "./Graph.js"


class WeightedGraph extends Graph {

    // addVertex() is same as Grpah:addVertex()

    // Adds an edge, between `vertex1` and `vertex2`, with `weight`
    addEdge(vertex1, vertex2, weight){
        if(!this.adjacencyList[vertex1]) return false;
        if(!this.adjacencyList[vertex2]) return false;
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
}


let graph = new WeightedGraph();
/* graph.addVertex("Tokyo");
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
console.log(graph);
console.log(graph.adjacencyList["Tokyo"]); */

export default WeightedGraph;