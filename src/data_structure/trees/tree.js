class node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)

        if (this.root === null) {
            this.root = newNode
            return this
        }

        let temp = this.root

        while (true) {
            // duplicate value is not allowed here. If want to allow, maybe add this.count to duplicated node.
            if (newNode.value === temp.value) return undefined             

            if (newNode.value < temp.value) {
                if (temp.left === null)  {// check temp's left is empty or not.
                    temp.left = newNode
                    return this
                }
                temp = temp.left // if tmep's left is not empty, move temp to temp.left and recheck the new temp's left.                
            } 
            else {
                if (temp.right === null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }

    contains(value) {
        if (this.root === null) return false

        let temp = this.root

        while (temp) {
            if (value < temp.value) {
                temp = temp.left
            }
            else if (value > temp.value) {
                temp = temp.right
            }
            else return true
        }

        return false
    }

    minValueNode(currentNode) {
        while (currentNode.left != null) {
            currentNode = currentNode.left
        }
        return currentNode
    }

    BFS() {
        let currentNode = this.root
        let queue = []
        let results = []
        queue.push(currentNode)
    
        while (queue.length) {
            currentNode = queue.shift()
            results.push(currentNode.value)
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)   
        }
    
        return results
    }

    DFSPreOrder() {
        let results = []
        function traverse(currentNode) {
            results.push(currentNode.value)
            if (currentNode.left) traverse(currentNode.left)
            if (currentNode.right) traverse(currentNode.right)
        }
        traverse(this.root)
        return results
    }
    
    DFSPostOrder() {
        let results = []
        function traverse(currentNode) {            
            if (currentNode.left) traverse(currentNode.left)
            if (currentNode.right) traverse(currentNode.right)
            results.push(currentNode.value)
        }
        traverse(this.root)
        return results
    }

    DFSInOrder() {
        let results = []
        function traverse(currentNode) {            
            if (currentNode.left) traverse(currentNode.left)
            results.push(currentNode.value)
            if (currentNode.right) traverse(currentNode.right)            
        }
        traverse(this.root)
        return results
    }
}