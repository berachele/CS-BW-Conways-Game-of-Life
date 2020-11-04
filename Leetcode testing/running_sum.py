class Solution(object):
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        prev = 0
        results = []

        for i in nums:
            mySum = i + prev
            results.append(mySum)
            prev = mySum
        return results




nums = [1,2,3,4]
# nums = [1,1,1,1]