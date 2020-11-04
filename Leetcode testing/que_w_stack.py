"""
Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
Example:

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);  
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false
"""

class MyQueue(object):

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.que = []
    
    def __str__(self):
        return f'{self.que}'

    def push(self, x):
        """
        Push element x to the back of queue.
        :type x: int
        :rtype: None
        """
        self.que.append(x)

    def pop(self):
        """
        Removes the element from in front of queue and returns that element.
        :rtype: int
        """
        # del self.que[0]
        return self.que.pop(0)
        

    def peek(self):
        """
        Get the front element.
        :rtype: int
        """
        #returns index 0 of queue
        return self.que[0]

    def empty(self):
        """
        Returns whether the queue is empty.
        :rtype: bool
        """
        #return length of queue
        length = len(self.que)
        if length == 0:
            return True
        else:
            return False


"""
# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
"""


# #Testing
# obj = MyQueue()

# obj.push(1)
# print(obj)
# obj.push(2)
# print(obj)
# obj.peek()
# obj.pop()
# print(obj)
# obj.empty()
# print(obj)
# obj.pop()
# print(obj)
# obj.empty()