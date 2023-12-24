"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getname() {
        return this.name;
    }
}
class Student extends Person {
    rollno;
    courses = [];
    constructor(name, age, rollno) {
        super(name, age);
        this.rollno = rollno;
    }
    registerForcourse(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.registerForcourse(this);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
    }
}
const instructor1 = new Instructor("ALi", 10, 25000);
const student1 = new Student('Haider', 10, 11126);
const student2 = new Student('Zahid', 12, 11128);
const course1 = new Course(123, "haider");
console.log(course1);
course1.addStudent(student1);
console.log(course1);
