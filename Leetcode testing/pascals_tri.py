"""
In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
"""

class Solution(object):
    def generate(self, numRows):
        """
        :type numRows: int
        :rtype: List[List[int]]
        """
        rows = []
        #go through each row
        for i in range(numRows):
            #special cases for first row
            if i == 0:
                rows.append([1])
            #s.c's for second row
            elif i ==1:
                rows.append([1,1])
            #general case rows
            else:
                new_row = [1]
                
                #fill in the middle numbers
                middle_num_count = i - 1
                
                for j in range(middle_num_count):
                    #need to know index to get prev row's numbers (current index and curr -1)
                    col_index = j + 1
                    prev_row = rows[-1]
                    #get value of next index for adding previous rows
                    value = prev_row[col_index] + prev_row[col_index - 1]
                    
                    new_row.append(value)
                    
                        
                #add a one on the end
                new_row.append(1)
                #then add new row to rows list
                rows.append(new_row)
                
        #return rows
        return rows