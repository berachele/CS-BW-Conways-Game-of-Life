# Find all the pairs of two integers in an unsorted array that sum up to a given S. 
# For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, your program should return [[11, -4], [2, 5]] 
# because 11 + -4 = 7 and 2 + 5 = 7.


def find_sum(array, sum):
    #have a rsults list
    results = []

    #iterate through array as a nest for loop
    for num1 in array:
        for num2 in array:
            if num1 > num2:
                if (num1 + num2) == sum:
                    results.append([num1, num2])
        #does it add to the sum?
                else:
                    continue
        #if yes, add to results

    return results


myarray = [3, 5, 2, -4, 8, 11]

sum = 7

print(find_sum(myarray, sum))