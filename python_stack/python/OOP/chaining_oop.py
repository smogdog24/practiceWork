
class User:	
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
    
    def make_deposit(self, amount):	
    	self.account_balance += amount

    def make_withdrawal(self, amount):
        self.account_balance = self.account_balance - amount
    
    def show_balance(self, amount):
        print(self.account_balance)

eric = User("eric", "eric@email.com")
bob = User("bob", "bob@email.com")

eric.make_deposit(50).make_deposit(50).make_deposit(50).make_withdrawal(30).show_balance

