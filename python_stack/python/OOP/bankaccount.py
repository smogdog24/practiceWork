
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


ba1 = BankAccount(balance=100)
ba2 = BankAccount(.01, 500)

ba1.deposit(100).deposit(50).deposit(50).withdraw(100).yield_interest().display_account_info()
ba2.deposit(100).deposit(100).withdraw(50).withdraw(50).withdraw(50).withdraw(50).yield_interest().display_account_info()