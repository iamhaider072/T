

class Customer{
    Firstname:string;
    Lastname:string;
    Gender:string;
    age:number;
    mobileNumber:number;
    Bankaccount:IbankAccount;
    constructor(Firstname:string,Lastname:string,Gender:string,age:number,mobileNumber:number,Bankaccount:IbankAccount){
this.Firstname=Firstname;
this.Lastname=Lastname;
this.Gender=Gender;
this.age=age;
this.mobileNumber=mobileNumber;
this.Bankaccount=Bankaccount
    }

//Method
CustomerInfo(){
return `Name: ${this.Firstname} ${this.Lastname}\n
Age:${this.age}\n
Gender:${this.Gender}\n
Mobile Number:${this.mobileNumber}
Account Balance:${this.Bankaccount.AccountBalance}`
}
}

//Inteface
interface IbankAccount{
debit(amount:number):string;
credit(amount:number):string;
}

class BankAccount implements IbankAccount{
AccountBalance:number;
constructor(AccountBalance:number,debit:string,credit:string){
    this.AccountBalance=100;  
}

debit(amount:number):string{
   let statement:string="You have insufficient balance";
    if(amount>0){
statement="The amount you entered is wrong";
    if(this.AccountBalance>amount){
        this.AccountBalance=this.AccountBalance=amount
        statement=`Transaction successful! New account balance is ${this.AccountBalance}`
    }else{
        statement=`You dont have enough balamce to do this transaction`
    }
}
return statement;
}
credit(amount:number){
let statement:string="Transaction Failed!"
if(amount>0){
this.AccountBalance=this.AccountBalance-amount;
if(amount>100){
this.AccountBalance=this.AccountBalance-1;
}
statement="Your account has been credited succesfully"
}
return statement;
}


}