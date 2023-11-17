//Write driver here

let myArr = [];

for (let i = 0; i < 20; i++) {
    myArr.push(Math.floor(Math.random() * 100) + 1);
 }
 console.log(myArr)

 let tree = null
 tree = bst(myArr, 0, size - 1)

 print(tree)

 let a = tree.isBalanced(tree)
 console.log(a)

let b = tree.levelOrder(tree)
console.log(b)

let c = tree.preorderRecursive(tree)
console.log(c)

let d = tree.postorderRecursive(tree)
console.log(d)

tree.insert(53)
//tree.insert(41)
//tree.insert(47)

console.log(tree)

let e = tree.isBalanced(tree)
console.log(e)

let f = tree.rebalance(tree)
console.log(f)

let g = tree.isBalanced(tree)
console.log(g)

let h = tree.levelOrder(tree)
console.log(h)

let i = tree.preorderRecursive(tree)
console.log(i)

let j = tree.postorderRecursive(tree)
console.log(j)
