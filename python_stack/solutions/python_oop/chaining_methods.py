class User:		# here's what we have so far
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
    # adding the deposit method
    def make_deposit(self, amount):	# takes an argument that is the amount of the deposit
        self.account_balance += amount	# the specific user's account increases by the amount of the value received
        return self 

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self
    
    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.account_balance}")
        return self
    
    def transfer_money(self, other_user, amount):
        # BONUS
        # let's leverage the fact that we have deposit and withdrawal methods that are available to self and other_user
        # since they're both User objects...You don't have to do it this way though
        other_user.make_deposit(amount) # could also say other_user.account_balance += amount
        self.make_withdrawal(amount) # could also say self.account_balance -= amount
        return self


todd = User("Todd", "todd@todd.com")
jane = User("Jane", "jane@jane.com")
john = User("John", "john@john.com")

todd.make_deposit(100).make_deposit(100).make_withdrawal(50).display_user_balance()

jane.make_deposit(50).make_deposit(1000).make_withdrawal(500).make_withdrawal(100).display_user_balance()

john.make_deposit(100).make_withdrawal(25).make_withdrawal(25).make_withdrawal(25).display_user_balance()

# BONUS
todd.transfer_money(jane,250).display_user_balance()
jane.display_user_balance()