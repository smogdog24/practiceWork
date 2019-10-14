class Node:
    def __init__(self, val):
        self.value = val
        self.next = None

class SLL:
    def __init__(self):
        self.head = None
    def contains(self, val):
        if self.head != None:
            runner = self.head

            while(runner != None):
                if runner.value == val:
                    return True
                runner = runner.next
            return False

    def add_to_front(self, val):
        new_node = Node(val)
        if self.head == None:
            self.head = new_node
        else:
            new_node.next = self.head
            self.head = new_node
        return self
    
    
    def length(self):
        count = 0
        if self.head != None:
          runner = self.head
        
        while(runner != None):
            count = count + 1
            runner = runner.next
        return count
        
    def display(self):
        emplist = []
        if self.head != None:
            runner = self.head

            while(runner != None):
                emplist.append(runner.value)
                runner = runner.next
            return emplist

    def minVal(self):
        if self.head != None:
            runner = self.head
            mini = runner.value
        
            while(runner != None):
                if runner.value < mini:
                    mini = runner.value 
                runner = runner.next
            return mini
        # traverse thru the SLL and locate the smallest value.
        # once you've traversed the entire SLL, return the value
    
    def maxVal(self):
        if self.head != None:
            runner = self.head
            maxval = runner.value

            while(runner != None):
                if runner.value > maxval:
                    maxval = runner.value
                runner = runner.next
            return maxval
        # traverse thru the SLL and locate the largest value.
        # once you've traversed the entire SLL, return the value
    
    def averageVal(self):
        count = 0
        sumtotal = 0 
        if self.head != None:
            runner = self.head

            while(runner != None):
                sumtotal = sumtotal + runner.value
                count = count + 1
                runner = runner.next
            avg = sumtotal / count
            return avg

    def add_to_back(self,val):
        new_node = Node(val)
        if self.head != None:
            runner = self.head
        while(runner != None):
            runner = self.next
        runner = new_node
# traverse thru the SLL and create a new node and add it to the last node in the list
# I highly recommend T-charting this out with circles to visualize the SLL
    
    
    def remove_from_back(self):
        if self.head != None:
            runner = self.head
        while(runner.next.next != None):
            runner = runner.next
        runner.next = None
# traverse thru the SLL and detach the last node in the list
# # I highly recommend T-charting this out with circles to visualize the SLL
       
    def append_node(self,val,after):
        new_node = Node(val)
        if self.head != None:
            runner = self.head
            while runner != None:
                if runner.value == after:
                    new_node.next = runner.next
                    runner.next = new_node
                runner = runner.next
            return self 

                  
        # traverse thru the SLL to find the node that contains the same "after" value.
        # Once found insert a new node with the "val" value after the node and attach it to the rest of the SLL.


x = SLL()
x.add_to_front(2)
x.add_to_front(4)
x.add_to_front(6)
x.add_to_front(9)
print(x.append_node())

