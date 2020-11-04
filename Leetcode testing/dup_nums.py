"""
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
"""

def containsDuplicate(nums):
    """
    :type nums: List[int]
    :rtype: bool
    """
    setOfNums = set()
    for num1 in nums:
        if num1 in setOfNums:
            return True
        else:
            setOfNums.add(num1)
    return False

    # for num in nums:
    #     if nums.count(num) > 1:
    #         return True
    # return False


#Testing
nums = [3, 1, 1]
# nums = [3, 1]
# nums = [0]

print(containsDuplicate(nums))