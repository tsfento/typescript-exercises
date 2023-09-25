// // typescriptCopy code
// class Student {
//     // Define the properties here
//     studentName: string;
//     studentAge: number;
//     studentGrade: number;
    
//     // Define the constructor here
//     constructor(name: string, age: number, grade: number) {
//         this.studentName = name;
//         this.studentAge = age;
//         this.studentGrade = grade;
//     }

//     // Define the displayInfo method here
//     displayInfo() {
//         console.log(`${this.studentName} is ${this.studentAge} and has a grade of ${this.studentGrade}.`);
//     }

//     // Define the isPassing method here
//     isPassing(gradeThreshold: number): boolean {
//         return this.studentGrade > gradeThreshold;
//     }
// }

// // Instantiate a new student object and call the methods to test your class
// let student1 = new Student('Tyler', 42, 100);
// let student2 = new Student('Failure', 30, 64);

// student1.displayInfo();
// console.log(student1.isPassing(64));

// student2.displayInfo();
// console.log(student2.isPassing(64));