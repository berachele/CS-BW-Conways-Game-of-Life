"""
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.
"""

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def isBalanced(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        ###Recursion method
        cache = {}
        #recursion method to get height
        def getHeight(n):
            #base case--pass in empty tree
            if n == None:
                return 0
            if n not in cache:
                cache[n] = 1 + max(getHeight(n.left), getHeight(n.right))
            return cache[n]
        #Test if the root is balanced
        #figure out left height and right height
        if root is None:
            return True
        l_height = getHeight(root.left)
        r_height = getHeight(root.right)
        #if abs(l_heihgt - r_height) <= 1 then it's balanced
        #return true
        return abs(l_height - r_height) <= 1 and self.isBalanced(root.left) and self.isBalanced(root.right)


        ###BFT method
