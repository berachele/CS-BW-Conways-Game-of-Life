"""
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
"""


def twoSum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    #brute force solution
    results = []
    for num1 in nums:
        print(f'Number1: {num1} at index {nums.index(num1)}')
        for num2 in nums:
            print(f'Number2: {num2} at index {nums.index(num2)}')
            if num1 + num2 == target:
                if nums.index(num1) == nums.index(num2):
                    print(f'NUM1 {num1} is the same as NUM2 {num2}')
                    print(f'indexNUM1 {nums.index(num1)} is the same as index NUM2 {nums.index(num2)}')
                    next
                else:
                    results.append(nums.index(num1))
                    results.append(nums.index(num2))

    if len(results) == 0:
        return []
    else:
        return results[0], results[1]


# nums = [2, 7, 11, 15]
nums = [3,2,4]
# nums = [3, 3]
# nums = [1, 3, 15, 5, 7, 16, 9, 5, 22]

print(twoSum(nums, 6))