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


class BankAccount:
    def __init__(self, int_rate=0, balance=0):
        self.int_rate = int_rate 
        self.balance = balance 
        
    def deposit(self, amount):
        self.balance += amount 
        return self

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount 
        else:
            self.balance -= 5 
            print("not enough money chump")
        return self

    def display_account_info(self):
        print(f"Balance: ${self.balance}")
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance = self.balance + self.balance * self.int_rate
        return self

    eric = User("eric", "eric@email.com")
    bob = User("bob", "bob@email.com")
    
    eric.make_deposit(50)
    eric.make_deposit(50)
    eric.make_deposit(50)
    eric.make_withdrawal(30)
    eric.show_balance

    bob.make_withdrawal(100)
    bob.show_balance
    