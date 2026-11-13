---
title: "Leetcode-110 Balanced Binary Tree"
slug: leetcode-110-balanced-binary-tree
date: 2026-11-12
tags: [Leetcode, Tree ]
description: "A step-by-step walkthrough of how recursive calls return subtree heights and how -1 signals an unbalanced binary tree."
category: "leetcode"
cover_image_url: null

---
🌲 [110.Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/description/)
It took me a while to figure out this problem, even after going through tutorials in both English and Chinese. So I figured it deserved its own post.

🌳 🌴 🪾 🎄 🎋 these are all trees.
## But what is a balanced tree??

A Height-Balanced Binary Tree is defined as a binary tree in which:
- The depth of the two subtrees of **every node** never differs by more than 1.
- Both the left and right subtrees are also height-balanced binary trees.

## Height?🧍↕📏🤏 How to get the height?
> measure from your toes to head! 
> For a binary tree, I work from the bottom up.  
> In tree terms, that’s postorde

Let's how it works.
```txt
        1          <-- root 根节点
       / \
      2   3        <-- imbalanced !!! 节点 2 将会在这里发生失衡！
     /     \
    4       6
   /
  5
```

we have a function getHeight()

- First Stage:  Follow the calls down
>  - get_height(1) start, check left child -> call get_height(2)
>  - get_height(2) start, check left child -> call get_height(4)
>  - get_height(4) start, check left child -> call get_height(5)
>  - get_height(5) start, check left child (both are None) return 0.

- Second Stage: Pass the heights back up
> Get back to Node 5: 
>   - left_height = 0，right_height = 0
>   - Height diff |0 - 0| = 0 <= 1（balance）
>   - report up the real height: max(0, 0) + 1 = 1
> 
> Get back to Node 4:
>   - left_height = 1
>   - right child is None, right_height = 0
>   - Height diff |1 - 0| = 1 <= 1（balance）
>   - report up the real height: max(1, 0) + 1 = 2

- Third Stage imbalance! 
> Get back to Node 2:
>   - left_height = 2
>   - right child is None, right_height = 0
>   - Height diff |2 - 0| = 1 > 1（imbalance）
>   - because imbalance just report return -1.
>
> Get back to Node 1:
>   - check if == -1 return False



```txt
[调用栈方向: 向下压栈，向上返回值]

get_height(1)  =================> 收到 left = -1，触发剪枝！直接 return -1
  │                               (右子树 3 和 6 被完全跳过，节省了遍历开销)
  ├── left: get_height(2)  =====> 收到 left = 2, right = 0 -> |2 - 0| > 1 -> return -1
  │           │
  │           ├── left: get_height(4)  =====> 收到 left = 1, right = 0 -> return 2
  │           │           │
  │           │           ├── left: get_height(5)  =====> 收到 left = 0, right = 0 -> return 1
  │           │           │           ├── left: None  -> return 0
  │           │           │           └── right: None -> return 0
  │           │           │
  │           │           └── right: None -> return 0
  │           │
  │           └── right: None -> return 0
  │
  └── right: get_height(3)  [X 永远不会被执行 X]
```

## Here you go
```python
class Solution:
    def isBalanced(self, root: TreeNode | None) -> bool:
        def getHeight(node):

            if node is None:
                return 0

            left = getHeight(node.left)
            if left == -1:
                return -1
            right = getHeight(node.right)
            if right == -1:
                return -1

            if abs(left - right) > 1:
                return -1
            
            return max(left, right) + 1

        return getHeight(root) != -1

```


## Time and space complexity

- **Time is `O(n)` in the worst case**, where `n` is the number of nodes. Each node is visited at most once. Apart from the recursive calls, each visit does a fixed amount of work. When the tree is balanced, the function visits every node.

- **Auxiliary space is `O(h)`**, where `h` is the height of the tree. The recursive call stack can hold one call for each node along the current root-to-leaf path.