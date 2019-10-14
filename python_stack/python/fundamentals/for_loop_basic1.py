for i in range(0, 151, 1):
    print(i)

for x in range(5, 1001, 5):
    print(x)

for y in range(1,101):
    if y % 5 == 0:
        print("coding")
    if y % 10 == 0:
        print("dojo")
    else:
        print(y)

def oddNumberSum():
    total = 0
    for p in range(0,500000):
        if p % 2 == 1:
            total += p
    print(total)
oddNumberSum()

def countdownByFours():
    y = 2018
    while y > 0:
        y = y - 1
        if y % 4 == 0:
            print(y)
countdownByFours()

def flexibleCounter():
    lowNum = 2
    highNum = 9
    mult = 3
    #i have no idea what this question is asking
