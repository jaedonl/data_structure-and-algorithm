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
}