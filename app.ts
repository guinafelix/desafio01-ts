import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewAccount } from './class/newAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(12)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(34)
console.log(companyAccount)

const newAccount: NewAccount = new NewAccount('teste', 30)

newAccount.deposit(100)
console.log(newAccount.getBalance())