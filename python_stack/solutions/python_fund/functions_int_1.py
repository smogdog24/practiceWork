import random

def randint(min=0, max=100):
  possible_range = max - min
  return round(random.random() * possible_range + min)

print(randint())
print(randint(max=50))
print(randint(min=50))
print(randint(min=50, max=150))

'''
This is mostly just a math problem.
First, we start by getting the possible range of numbers.
The range will be used to multiply the number created by random, which is between 0 and 1.
Multiplying this number will give us a number that is no greater than the range, but no less than 0.
For instance, if we're given 20 and 70, the range is 50, so we'll first start by getting a number between 0 and 50.
If the minimum is greater than 0, we have to make sure the number cannot be less than the minimum, so we must add the minimum value to our calculated random number.
Since we've already accounted for the range, if we add 20 (our min from the example) to a number between 0 and 50, then mathematically it cannot be lower than 20 or higher than 70.
Then we just round to get an integer instead of a float.
'''