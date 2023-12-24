class Person {
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    getname(){
return this.name

    }
}

class Student extends Person{
    rollno:number;
    courses:Course[]=[];
    constructor(name:string,age:number,rollno:number){
        super(name,age);
        this.rollno=rollno
    }
    registerForcourse(course:Course){
this.courses.push(course)
    }
}


class Instructor extends Person{
salary:number;
courses:Course[]=[];
constructor(name:string,age:number,salary:number){
super(name,age)
this.salary=salary
}
assignCourse(course:Course){
    this.courses.push(course)
}

}


class Course{
    id:number;
    name:string;
    students:Student[]=[];
instructor!:Instructor;
constructor(id:number,name:string){
    this.id=id;
    this.name=name;
}
addStudent(student:Student){
this.students.push(student)
student.registerForcourse(this)
}
setInstructor(instructor:Instructor){
this.instructor=instructor
instructor.assignCourse(this)
}
}

class Department{
    name:string;
    courses:Course[]=[]
    constructor(name:string){
this.name=name
    }
    AddCourse(course:Course){
this.courses.push(course)
    }
}










const instructor1=new Instructor("ALi",10,25000)
const student1=new Student('Haider',10,11126)
const student2=new Student('Zahid',12,11128)
const course1=new Course(123,"haider")
console.log(course1)
course1.addStudent(student1)
console.log(course1);


