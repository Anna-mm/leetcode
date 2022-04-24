// 关键点1：function 内部的变量都不能被外部访问，除了挂载到 this 上的方法
// 关键点2: 实际上构建的是二叉排序树
// 术语点：LDR - in-order, LRD - post-order, DLR - pre-order

// 二叉树
function BinaryTree() {
    // 根节点
    var root = null;

    // 节点结构
    var TreeNode = function (val) {
        this.val = val;
        this.left = null;
        this.right = null;
    };

    // 新增节点
    var insertNode = function (node, newNode) {
        // 约定右子节点都大于左子节点
        if (newNode.val < node.val) {
            if (node.left === null) {
                //没有左子节点，则新增左子节点
                node.left = newNode;
            } else {
                //如果有左子节点则递归算法实现插入左子节点
                insertNode(node.left, newNode);
            }
        } else {
            //如果右子节点为 null，则新增右子节点
            if (node.right === null) {
                node.right = newNode;
            } else {
                //如果有左子节点则递归算法实现插入右子节点
                insertNode(node.right, newNode);
            }
        }
    };

    // 插入新节点
    this.insert = function (val) {
        var node = new TreeNode(val);
        if (root === null) {
            // 判断是否为根节点
            root = node;
        } else {
            // 不是根节点则新增节点
            insertNode(root, node);
        }
    };

    // 中序遍历二叉树
    var traverseNodesLDR = function (node, callback) {
        if (node !== null) {
            traverseNodesLDR(node.left, callback);
            callback(node.val);
            traverseNodesLDR(node.right, callback)
        }
    }

    // 中序遍历算法
    this.LDR = function(callback){
        traverseNodesLDR(root,callback);
    }
}

// 构建二叉树
var nodes = [6, 2, 3, 4, 9, 8, 7, 12, 1, 22];
var binaryTree = new BinaryTree();
nodes.forEach(val => {
    binaryTree.insert(val);
});

// 二叉树中序遍历，一定是一个升序列表
console.log('binaryTree', binaryTree.LDR((aa) => {
    console.log( aa);
}))
