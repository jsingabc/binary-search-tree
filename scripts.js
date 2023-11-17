let root = null;
// class for each node stores data data L or R
class Node 
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }

find(value)
{
        let current = root;
        let found = false;
        // while loop starts a transverse of objects
        while(current && !found){
            // if the staements meet requirements
            if (value < current.data){
                current = current.left;
                console.log("lesser")
            }
            else if (value > current.data) {
                current = current.right;
                console.log("greater")
            } else {
                found = true;
            }
        }
        // this is where the data is passed thru function
        if (!found) return undefined;
        return current.data + " : is found.";
    }

    
    //function returns a value inputted
insert(value){
    //if no value create one
    let newNode = new Node(value)
    
    if(!this.root) {
        this.root = newNode;
        return this;
    } else {
        let current = this.root;
        // if not returned current becomes root and left and right
        // of the binary tree is looped thru
        while(true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    //inserts value left
                    return this;
                } else {
                    current = current.left
                }
            } else if (value > current.value) {
                if (!current.right){
                    current.right = newNode;
                    //inserts value rights
                    return this;
                } else {
                    current = current.right;
                }
            }
        }
    }
}


delete(key){
    //root = this.root
    console.log(key)
    console.log(root)
    if(root == null) {
        return null;
    }
    
    if (key < root.data) {
        // checks both sides of the tree and deletes the item
        root.left = delete(root.left, key);
    } else if (key > root.key) {
        root.right = delete(root.right, key);
    } else {
        if (root.left === null && root.right === null) {
            
            return null;
        }

    if (root.left == null) {
        return root.right;
    } else if (root.right === null) {
        return root.left;
    }
    //returns the results
    return root;
    }
}
//logs the tree data in level order
levelOrder(root) {
    //check for the root
    if (!root) return []
    let result = []      
    let queue = [root]  
    //loops thru the tree and makes a queue of new array
    while (queue.length != 0) {
        let subarr = []    
        const n = queue.length
        // loop and push data to array
        for (let i = 0; i < n; i++) {
            let node = queue.pop()
            subarr.push(node.data)
            
            
            // add new elements to start new array in level order
            if (node.left) queue.unshift(node.left)
            if (node.right) queue.unshift(node.right)
        }
        result.push(subarr)
    }
    return result
}
// recreates the tree in a new array inorder
inorderRecursive(tree) {
    const result = [];
    
    function inorderTraverse(root) {
      if (!root) return;
          
      inorderTraverse(root.left);
      result.push(root.data);
      inorderTraverse(root.right);
    }
    
    inorderTraverse(tree);
    
    return result;
  }

  //recreates the tree in new array in preorder
  preorderRecursive(root) {
    const result = [];
  
    function preorderTraverse(root) {
      if (!root) return;
  
      result.push(root.data);
      preorderTraverse(root.left);
      preorderTraverse(root.right);
    }
  
    preorderTraverse(root);
  
    return result;
  }

  //creates the tree in new array in post order
  postorderRecursive(tree) {
    const result = [];
  
    function postorderTraverse(root) {
      if (!root) return;
  
      postorderTraverse(root.left);
      postorderTraverse(root.right);
      result.push(root.data);
    }
  
    postorderTraverse(tree);
  
    return result;
  }

  // gets the tree height of tree
  height(root) {
    //If null return 0
    if(root === null){
      return 0;
    }
    
    //Get left sub tree height
    const leftHeight = this.height(root.left);
    
    //Get right sub tree height
    const rightHeight = this.height(root.right);
    
    //Return the max of them
    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
  }

  //gets the depth of the tree branches
  maxDepth(root) {
    if (root === null) {
      return 0;
    } else {
      return Math.max(this.maxDepth(root.left), this.maxDepth(root.right)) + 1;
    }
  }

  //checks to see if each side of the tree are balanced
  isBalanced(root) {
    if (root === null) {
      return true;
    }
    //uses the height method to check both sides
    const leftHeight = this.height(root.left);
    const rightHeight = this.height(root.right);
  
    //the algoriethm to check both side for balance
    return Math.abs(leftHeight - rightHeight) <= 1 &&
      this.isBalanced(root.left) &&
      this.isBalanced(root.right);
  }

  rebalance(root) {
    // Check if the tree is balanced
    if (Math.abs(this.height(root.left) - this.height(root.right)) > 1) {
      // If the tree is not balanced, rebalance it
      // There are many different ways to rebalance a binary tree
      // Here is one simple way
      // First, rotate the tree so that the unbalanced node is at the root
      root = rotate(root);
      // Then, rebalance the left and right subtrees
      root.left = rebalance(root.left);
      root.right = rebalance(root.right);
    }
    // Return the rebalanced tree
    return root;
  }
  

  rotate(root) {
    // Rotates the tree so that the given node is at the root
    // There are two types of rotations: left and right
    // Here is a left rotation
    if (root.left !== null) {
      let newRoot = root.left;
      root.left = newRoot.right;
      newRoot.right = root;
      return newRoot;
    } else {
      // If the node does not have a left child, then do a right rotation
      var newRoot = root.right;
      root.right = newRoot.left;
      newRoot.left = root;
      return newRoot;
    }
  }
  


}

// builds out my tree
function bst(arr, start, end)
{
    if (start > end) 
    {
        return null;
    }
    // set the mid element and make it root as tree goes down
    let mid = parseInt((start + end) / 2);
    let node = new Node(arr[mid]);// sets the node value to mid

    //make the left tree recursively
    node.left = bst(arr, start, mid - 1);

    //make the right tree recursively
    node.right = bst(arr, mid + 1, end)

    return node;
}

function print(node, prefix = "", islLeft = true){
    {
        if (node === null)
            return;
    }
    if(node.right !== null){
        print(node.right, `${prefix}${islLeft ? "|  ":"   "}`, false);
    }
    console.log(`${prefix}${islLeft ? "└── " : "┌── "}${node.data}`)
    if (node.left !== null) {
        print(node.left, `${prefix}${islLeft ? "   " : "|   "}`, true);
    }
}



let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
let size = arr.length

root = bst(arr, 0, size - 1);

//print(root)
//console.log(root)


/////////Driver function down here is on main.js////////



 