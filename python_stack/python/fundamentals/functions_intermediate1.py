import random

def randint(min=0, max=100):
  possible_range = max - min
  return round(random.random() * possible_range + min)

print(randint())
print(randint(max=50))
print(randint(min=50))
print(randint(min=50, max=150))
