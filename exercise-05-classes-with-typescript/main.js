// typescriptCopy code
var Student = /** @class */ (function () {
    // Define the constructor here
    function Student(name, age, grade) {
        this.studentName = name;
        this.studentAge = age;
        this.studentGrade = grade;
    }
    // Define the displayInfo method here
    Student.prototype.displayInfo = function () {
        console.log("".concat(this.studentName, " is ").concat(this.studentAge, " and has a grade of ").concat(this.studentGrade, "."));
    };
    // Define the isPassing method here
    Student.prototype.isPassing = function (gradeThreshold) {
        return this.studentGrade > gradeThreshold;
    };
    return Student;
}());
// Instantiate a new student object and call the methods to test your class
var student1 = new Student('Tyler', 42, 100);
var student2 = new Student('Failure', 30, 64);
student1.displayInfo();
console.log(student1.isPassing(64));
student2.displayInfo();
console.log(student2.isPassing(64));
