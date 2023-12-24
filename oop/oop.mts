 import promptSync from "prompt-sync";
 class Person{
    personality:string;

   constructor(personality:string){
    this.personality='Mystery';
   }
  //Method1 
  public AskQuestion(answer:number):void{
if(answer==1){
this.personality="Extrovert";
}
else if(answer==2){
    this.personality="Introvert";
}
else{
    this.personality="You are stll a mystery";
}
}
//Method2
public GetPersonality():string{
    return this.personality
}
}
//Object
const myobj=new Person('');


//Inheritance
class Student extends Person{
private _name:string;

constructor(_name:string){
    super("Mystery")
    this._name=_name
}
get  name (){
return this._name
}
set name (value){
     this._name=value
}
}





