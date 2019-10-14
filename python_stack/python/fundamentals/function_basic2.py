def countdown(num):
  result_list = []
  for i in range(num, -1, -1):
    result_list.append(i)
  return result_list
print(countdown(9))

def printAndReturn(first):
    print(first[0])
    return first[1]
print(print([1, 2]))


def first_plus_length(lst):
  return lst[0] + len(lst)

print(first_plus_length([1, 2, 3, 4, 5, 6]))

def values_greater_than_second(lst):
  if len(lst) < 2:
    return False

  result_list = []
  for item in lst:
    if item > lst[1]:
      result_list.append(item)
  return result_list
print(values_greater_than_second([5, 2, 3, 2, 1, 4]))
print(values_greater_than_second([3]))

def length_and_value(size, value):
  result_list = []
  for i in range(size):
    result_list.append(value)
  return result_list

print(length_and_value(4, 7))
print(length_and_value(6, 2))