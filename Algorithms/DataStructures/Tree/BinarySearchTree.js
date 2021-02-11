/* 
TC:         Access	Search	Insertion	Deletion
Worst:        O(n)	 O(n)	  O(n)	      O(n)          // Occurs when you have a long single-armed tree which rather looks like a linked-list
Best/Avg:    O(logn) O(logn)  O(logn)    O(logn)


SC: O(n) 
*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * Special type of Binary Tree. At most have 2 children per node.
 * Nodes are sorted. All nodes having values lesser than 
 * the value of its parent node will be placed to the left left,
 * all values higher to the right.
 */
class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    /**
     * Inserts a node in the BST.
     * @param {any} val value to insert
     * @returns {BinarySearchTree} the updated tree, if `val` is duplicate, returns the original tree
     */
    /* Logic: Input: Node n
        Is there a root? No: n becomes root. Yes: Is n greater than or less than root?
        Greater: Is there a node right of root? No: place n there. Yes (r1): is n less than
        or greater than r1: repeat...
     */
    insert(val) {
        let node = new Node(val);
        let parent = this.root;
        if(parent === null) {
            this.root = node;
            return this;
        }
        while(true) {
            if(parent === null) {
                parent = node;
                return this;
            }
            if(node.val < parent.val) {
                if(parent.left === null) {
                    parent.left = node;
                    return this;
                }
                parent = parent.left;
            } else if(node.val > parent.val){
                if(parent.right === null) {
                    parent.right = node;
                    return this;
                }
                parent = parent.right;
            } else {
                console.log("Duplicates are not allowed in BST.");
                return this;
            }
        }

    }

    /**
     * Searches if a value exists in a BST.
     * @param {any} val value to search
     * @returns {boolean} `true` if found, otherwise, `false`
     */
    search(val) {
        if(!this.root) return false;
        let parent = this.root;
        while(true) {
            if(parent.val === val) return true;
            if(val < parent.val) {
                if(parent.left === null) return false;
                parent = parent.left;
            } else {
                if(parent.right === null) return false;
                parent = parent.right;
            }
        }
    }

    /**
     * @summary Traverses a binary tree using Breadth First Search algorithm.
     * 
     * @description 
     * If the tree is very wide, BFS will need to keep lots of nodes 
     * in the `queue` which will consume more memory. DFS on the other hand only keeps
     * track (using recursion call stack) of the nodes in a given branch, which consumes less memory.
     * So, BFS is good for deep trees, and DFS is good for wide trees.
     * 
     * @returns {Array} an array containing the values of all nodes present in the tree.
     */
    BFS() {
        if(!this.root) return [];
        let queue = [];
        let visited = [];
        queue.push(this.root);
        while(queue.length !== 0) {
            let node = queue.shift();
            visited.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return visited;
    }

    /**
     * @summary Traverses a binary tree using Depth First Search algorithm.
     * 
     * @param {String} order - Traversal order <"pre"|"post"|"in">. Default: "pre"
     * 
     * @description 
     * - "PreOrder" : For each node, visit node -> visit left -> visit right. (useful, when expoting or flattening a tree for subsequent reconstruction. Position of the root is always index 0.) 
     * - "PostOrder" : For each node, visit left -> visit right -> visit node.
     * - "InOrder" : For each node, visit left -> visit node -> visit right. (when used on a BST, elements are in order i.e. sorted)
     * 
     * @returns {Array} an array containing the values of all nodes present in the tree.
     */
    DFS(order="pre") {
        if(!this.root) return [];
        let visited = [];

        const traverseLeft = (node) => {
            if(node && node.left !== null) {
                traverse(node.left);
            }
        }
        const traverseRight = (node) => {
            if(node && node.right !== null) {
                traverse(node.right);
            }
        }

        const traverse = (node) => {
            switch(order) {
                case "pre":
                    visited.push(node.val);     
                    traverseLeft(node);
                    traverseRight(node);
                    break;
                case "post":
                    traverseLeft(node);
                    traverseRight(node);  
                    visited.push(node.val); 
                    break;
                case "in":
                    traverseLeft(node);
                    visited.push(node.val); 
                    traverseRight(node);  
                    break;
                default: 
                    return visited;
            }
        }
        
        traverse(this.root);
        return visited;
    }
}



var tree = new BinarySearchTree();
tree.insert(10).insert(5).insert(5).insert(15).insert(3).insert(1).insert(20).insert(6).insert(12).insert(25);
/* 
                    10
            5               15
        3       6       12       20
    1                                25

*/
//console.log(tree);
//console.log(tree.search(3));
//console.log(tree.BFS()); // [10, 5, 15, 3, 6, 12, 20, 1, 25]
console.log(tree.DFS());
console.log(tree.DFS("post"));
console.log(tree.DFS("in"))