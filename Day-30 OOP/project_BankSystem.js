// ============================================
// BANK MANAGEMENT SYSTEM - OOP PROJECT
// ============================================
// This project demonstrates all OOP concepts:
// 1. Encapsulation (Private properties)
// 2. Inheritance (SavingsAccount, CheckingAccount inherit from Account)
// 3. Polymorphism (Different behavior for different account types)
// 4. Abstraction (Complex operations hidden)
// 5. Static Methods (Utility functions)
// 6. Getters/Setters (Safe property access)
// ============================================

// ========== STEP 1: Base Account Class ==========
// This is our parent class with common functionality
class Account {
    // ENCAPSULATION: Private properties (can't be accessed directly from outside)
    #balance;
    #transactionHistory;
    #accountNumber;
    
    constructor(accountHolder, initialBalance) {
        this.accountHolder = accountHolder;
        this.#balance = initialBalance;
        this.#accountNumber = Account.generateAccountNumber();
        this.#transactionHistory = [];
        
        // Record initial deposit
        this.#transactionHistory.push({
            type: 'Initial Deposit',
            amount: initialBalance,
            date: new Date()
        });
    }

    // ===== STATIC METHOD: Utility function =====
    // This belongs to the class, not instances
    static generateAccountNumber() {
        return Math.floor(Math.random() * 1000000000);
    }

    // ===== STATIC METHOD: Show all account types =====
    static showAccountTypes() {
        console.log('Available Account Types:');
        console.log('1. Savings Account - For saving money with interest');
        console.log('2. Checking Account - For frequent transactions');
        console.log('3. Business Account - For business purposes');
    }

    // ===== GETTERS: Safe way to access private properties =====
    get balance() {
        return this.#balance;
    }

    get accountNumber() {
        return this.#accountNumber;
    }

    get transactions() {
        return this.#transactionHistory;
    }

    // ===== ABSTRACTION: Hide complex deposit logic =====
    deposit(amount) {
        // Internal validation (hidden from user)
        if (amount <= 0) {
            console.log('❌ Deposit amount must be positive!');
            return false;
        }

        this.#balance += amount;
        this.#recordTransaction('Deposit', amount);
        console.log(`✅ Deposited: Rs.${amount}. New Balance: Rs.${this.#balance}`);
        return true;
    }

    // ===== ABSTRACTION: Hide complex withdrawal logic =====
    withdraw(amount) {
        // Internal validation (hidden from user)
        if (amount <= 0) {
            console.log('❌ Withdrawal amount must be positive!');
            return false;
        }

        if (amount > this.#balance) {
            console.log('❌ Insufficient balance!');
            return false;
        }

        // Check account-specific withdrawal limit (can be overridden in child classes)
        if (!this.checkWithdrawalLimit(amount)) {
            return false;
        }

        this.#balance -= amount;
        this.#recordTransaction('Withdrawal', amount);
        console.log(`✅ Withdrawn: Rs.${amount}. New Balance: Rs.${this.#balance}`);
        return true;
    }

    // POLYMORPHISM: This method can be overridden by child classes
    checkWithdrawalLimit(amount) {
        return true; // Base class has no limit
    }

    // ===== SETTER: Safe way to modify private properties =====
    set accountHolder(name) {
        if (name.length < 2) {
            console.log('❌ Name must be at least 2 characters!');
            return;
        }
        this._accountHolder = name;
    }

    get accountHolder() {
        return this._accountHolder;
    }

    // ===== ABSTRACTION: Private method (not accessible from outside) =====
    #recordTransaction(type, amount) {
        this.#transactionHistory.push({
            type: type,
            amount: amount,
            date: new Date(),
            balanceAfter: this.#balance
        });
    }

    // ===== Display account details =====
    displayAccountInfo() {
        console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log(`Account Type: ${this.constructor.name}`);
        console.log(`Account Holder: ${this.accountHolder}`);
        console.log(`Account Number: ${this.#accountNumber}`);
        console.log(`Current Balance: Rs.${this.#balance}`);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    }

    // ===== Display transaction history =====
    displayTransactionHistory() {
        console.log(`\n📋 Transaction History for ${this.accountHolder}:`);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        this.#transactionHistory.forEach((transaction, index) => {
            console.log(
                `${index + 1}. ${transaction.type} - Rs.${transaction.amount} (${transaction.date.toLocaleString()})`
            );
        });
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    }
}

// ========== STEP 2: SavingsAccount (Child Class) ==========
// INHERITANCE: Extends Account class
// Adds interest rate feature
class SavingsAccount extends Account {
    #interestRate; // Private property unique to this class

    constructor(accountHolder, initialBalance, interestRate = 5) {
        super(accountHolder, initialBalance); // Call parent constructor
        this.#interestRate = interestRate;
    }

    // Getter for interest rate
    get interestRate() {
        return this.#interestRate;
    }

    // ===== POLYMORPHISM: Override parent method =====
    // Savings account has withdrawal limit
    checkWithdrawalLimit(amount) {
        const monthlyLimit = 50000; // Example limit
        if (amount > monthlyLimit) {
            console.log(`❌ Withdrawal limit exceeded! Monthly limit: Rs.${monthlyLimit}`);
            return false;
        }
        return true;
    }

    // ===== New method specific to SavingsAccount =====
    addInterest() {
        const interestAmount = (this.balance * this.#interestRate) / 100;
        this.deposit(interestAmount);
        console.log(`💰 Interest Added: Rs.${interestAmount} at ${this.#interestRate}% rate`);
    }

    // Override display method
    displayAccountInfo() {
        super.displayAccountInfo(); // Call parent method
        console.log(`Interest Rate: ${this.#interestRate}%`);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    }
}

// ========== STEP 3: CheckingAccount (Child Class) ==========
// INHERITANCE: Extends Account class
// Adds overdraft protection feature
class CheckingAccount extends Account {
    #overdraftLimit; // Private property

    constructor(accountHolder, initialBalance, overdraftLimit = 10000) {
        super(accountHolder, initialBalance);
        this.#overdraftLimit = overdraftLimit;
    }

    // Getter for overdraft limit
    get overdraftLimit() {
        return this.#overdraftLimit;
    }

    // ===== POLYMORPHISM: Override parent method =====
    // Checking account can withdraw more (with overdraft)
    checkWithdrawalLimit(amount) {
        if (amount > this.balance + this.#overdraftLimit) {
            console.log(
                `❌ Overdraft limit exceeded! Available: Rs.${this.balance + this.#overdraftLimit}`
            );
            return false;
        }
        return true;
    }

    // Override display method
    displayAccountInfo() {
        super.displayAccountInfo();
        console.log(`Overdraft Limit: Rs.${this.#overdraftLimit}`);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    }
}

// ========== STEP 4: BusinessAccount (Child Class) ==========
// INHERITANCE: Extends Account class
// Adds transaction fee and multiple signatories
class BusinessAccount extends Account {
    #transactionFee;
    #signatories;

    constructor(accountHolder, initialBalance, transactionFee = 50, signatories = []) {
        super(accountHolder, initialBalance);
        this.#transactionFee = transactionFee;
        this.#signatories = signatories;
    }

    // Getter for signatories
    get signatories() {
        return this.#signatories;
    }

    // Add signatory
    addSignatory(name) {
        this.#signatories.push(name);
        console.log(`✅ Signatory ${name} added`);
    }

    // ===== POLYMORPHISM: Override withdraw with fee =====
    withdraw(amount) {
        const totalDebit = amount + this.#transactionFee;

        if (totalDebit > this.balance) {
            console.log('❌ Insufficient balance (including transaction fee)!');
            return false;
        }

        // Deduct transaction fee
        this.balance = this.balance - this.#transactionFee;
        console.log(`📌 Transaction Fee Applied: Rs.${this.#transactionFee}`);

        // Call parent withdraw
        return super.withdraw(amount);
    }

    // Override display method
    displayAccountInfo() {
        super.displayAccountInfo();
        console.log(`Transaction Fee: Rs.${this.#transactionFee}`);
        console.log(`Signatories: ${this.#signatories.join(', ') || 'None'}`);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    }
}

// ========== STEP 5: Bank Class (Main Controller) ==========
// Manages all accounts
class Bank {
    #accounts; // Private property - stores all accounts

    constructor(bankName) {
        this.bankName = bankName;
        this.#accounts = [];
    }

    // Create new account (ABSTRACTION: User doesn't need to know class name)
    createAccount(type, accountHolder, initialBalance, specialParam = null) {
        let account;

        if (type === 'savings') {
            account = new SavingsAccount(accountHolder, initialBalance, specialParam || 5);
        } else if (type === 'checking') {
            account = new CheckingAccount(accountHolder, initialBalance, specialParam || 10000);
        } else if (type === 'business') {
            account = new BusinessAccount(accountHolder, initialBalance, specialParam || 50);
        }

        this.#accounts.push(account);
        console.log(`✅ ${type.toUpperCase()} account created for ${accountHolder}`);
        return account;
    }

    // Find account by account holder name
    findAccount(name) {
        return this.#accounts.find(acc => acc.accountHolder === name);
    }

    // Display all accounts
    displayAllAccounts() {
        console.log(`\n${'='.repeat(50)}`);
        console.log(`📊 ${this.bankName} - All Accounts`);
        console.log(`${'='.repeat(50)}\n`);
        this.#accounts.forEach(account => account.displayAccountInfo());
    }

    // Get total balance across all accounts
    getTotalBalance() {
        const total = this.#accounts.reduce((sum, account) => sum + account.balance, 0);
        return total;
    }
}

// ============================================
// STEP 6: DEMONSTRATION
// ============================================
console.log('🏦 ========================================');
console.log('   WELCOME TO BANK MANAGEMENT SYSTEM');
console.log('========================================\n');

// Show available account types (STATIC METHOD)
Account.showAccountTypes();

// Create bank
const myBank = new Bank('TechBank');

// Create different types of accounts
console.log('\n📝 Creating Accounts...\n');
const savingsAcc = myBank.createAccount('savings', 'Ali Ahmed', 50000, 4);
const checkingAcc = myBank.createAccount('checking', 'Fatima Khan', 30000, 15000);
const businessAcc = myBank.createAccount('business', 'ABC Corporation', 100000, 100);

// Add signatories to business account
console.log('\n👥 Adding Business Signatories...\n');
businessAcc.addSignatory('CEO');
businessAcc.addSignatory('CFO');

// Display account info
console.log('\n📋 ACCOUNT DETAILS:\n');
savingsAcc.displayAccountInfo();
checkingAcc.displayAccountInfo();
businessAcc.displayAccountInfo();

// Perform transactions
console.log('\n💳 PERFORMING TRANSACTIONS:\n');
console.log('--- Savings Account ---');
savingsAcc.deposit(10000);
savingsAcc.withdraw(5000);
savingsAcc.addInterest(); // POLYMORPHISM in action

console.log('\n--- Checking Account ---');
checkingAcc.deposit(20000);
checkingAcc.withdraw(40000); // Using overdraft

console.log('\n--- Business Account ---');
businessAcc.deposit(50000);
businessAcc.withdraw(25000); // With transaction fee

// Display transaction history
console.log('\n📊 TRANSACTION HISTORY:\n');
savingsAcc.displayTransactionHistory();
checkingAcc.displayTransactionHistory();

// Display all accounts in bank
myBank.displayAllAccounts();

// Show total bank balance
console.log(`\n💰 Total Bank Balance: Rs.${myBank.getTotalBalance()}`);
console.log('\n🏦 ========================================');
console.log('   Thank you for using TechBank!');
console.log('========================================');
