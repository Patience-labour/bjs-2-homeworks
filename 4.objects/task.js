function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
    this.subject = null;
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty('marks')) {
        this.marks.push(...marks);
    }

}

Student.prototype.getAverage = function () {
    if (this.hasOwnProperty('marks') && this.marks.length !== 0) {
        let sum = this.marks.reduce((acc, mark) => acc + mark, 0);
        return sum / this.marks.length;
    } else {
        return 0;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
