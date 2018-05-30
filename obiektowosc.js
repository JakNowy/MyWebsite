

//  PYTHON:
// Konstruktor:
// class Person():
//     def __init__(name, age):
//         self.name = name
//         self.age = age

// Utworzenie obiektu:
// jakub = Person()


// JAVASCRIPT:
// Konstruktor

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.retire = yearsToRetire;
}

// Utworzenie obiektu
var jakub = new Person('Jakub',22,'male');
var pawel = new Person('Paweł',32,'male');


// Object initialiser
mama = {name:'Ania', age:56, sex:'female', retire:yearsToRetire};

console.log(pawel.age);
console.log(jakub.age);
console.log(mama.age);


function yearsToRetire() {
    var years = 0
    if (this.sex == 'female'){
        years = 60 - this.age;
        return years
    }
    if (this.sex == 'male'){
        years = 65- this.age;
        return years
    }
    else return 100
}
console.log(mama.retire());
console.log(pawel.retire());
console.log(jakub.retire());
