"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    personality;
    constructor(personality) {
        this.personality = 'Mystery';
    }
    //Method1 
    AskQuestion(answer) {
        if (answer == 1) {
            this.personality = "Extrovert";
        }
        else if (answer == 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You are stll a mystery";
        }
    }
    //Method2
    GetPersonality() {
        return this.personality;
    }
}
//Object
const myobj = new Person('');
// console.log(myobj);
