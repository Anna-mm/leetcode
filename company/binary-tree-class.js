// 问题：class 中的方法如何设置成私有？
// 二叉树
// 节点结构
class TreeNode {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

class BinaryTree {

    constructor(){
        this.root = null;
    }

    // 新增节点
    insertNode(node, newNode) {
        // 约定右子节点都大于左子节点
        if (newNode.val < node.val) {
            if (node.left === null) {
                //没有左子节点，则新增左子节点
                node.left = newNode;
            } else {
                //如果有左子节点则递归算法实现插入左子节点
                this.insertNode(node.left, newNode);
            }
        } else {
            //如果右子节点为 null，则新增右子节点
            if (node.right === null) {
                node.right = newNode;
            } else {
                //如果有左子节点则递归算法实现插入右子节点
                this.insertNode(node.right, newNode);
            }
        }
    };

    // 插入新节点
    insert(val) {
        var node = new TreeNode(val);
        if (this.root === null) {
            // 判断是否为根节点
            this.root = node;
        } else {
            // 不是根节点则新增节点
            this.insertNode(this.root, node);
        }
    };

    // 中序遍历二叉树
    traverseNodesLDR(node, callback) {
        if (node !== null) {
            this.traverseNodesLDR(node.left, callback);
            callback(node.val);
            this.traverseNodesLDR(node.right, callback)
        }
    }

    // 中序遍历算法
    LDR(callback) {
        this.traverseNodesLDR(this.root,callback);
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
    console.log('aa', aa);
}))
