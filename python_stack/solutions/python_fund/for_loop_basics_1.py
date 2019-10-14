# I used functions here because it's easy to comment out the function call.
# All of these except the last one can be done without being defined as functions.

# Basic - Print all integers from 0 to 150.
def basic():
  for i in range(151):
    print(i)

basic()

# Multiples of Five - Print all the multiples of 5 from 5 to 1, 000
def multiples_of_five():
  for i in range(5, 1001, 5):
    print(i)

multiples_of_five()

# Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".
def the_dojo_way():
  for i in range(1, 101):
    if i % 10 == 0:
      print("Coding Dojo")
    elif i % 5 == 0:
      print("Coding")
    else:
      print(i)

the_dojo_way()

# Whoa. That Sucker's Huge - Add odd integers from 0 to 500, 000, and print the final sum.
def woah_huge():
  final_sum = 0
  # some may feel I'm cheating by not checking for odd values using modulo
  # fair point but this is easier and IMO equally valid
  for i in range(1, 500000, 2):
    final_sum += i
  print(final_sum)

woah_huge()

# Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.
def countdown_by_fours():
  for i in range(2018, 0, -4):
    print(i)

countdown_by_fours()

# Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. For example, if lowNum = 2, highNum = 9, and mult = 3, the loop should print 3, 6, 9 (on successive lines)
def flexible_counter(low_num, high_num, mult):
  for i in range(low_num, high_num + 1):
    if i % mult == 0:
      print(i)

flexible_counter(2, 9, 3)