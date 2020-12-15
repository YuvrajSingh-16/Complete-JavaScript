// Constructor and object
//
//var john = {
//    name: "John",
//    yearOfBirth: 1980,
//    job: 'teacher'
//};
//
//console.log(john)
var Person = function (name, yearOfBirth, job) {
    this.name = name,
    this.yearOfBirth = yearOfBirth,
    this.job = job
}

Person.prototype.calcAge = function() {
        console.log(2020 - this.yearOfBirth);
}

Person.prototype.lastName = 'Kiraula';

//var UVSinghK = new Person('UVSinghK', 2001, 'student');
//UVSinghK.calcAge();
//
//var yoo = new Person('yoo', 1999, 'student');
//yoo.calcAge();
////
//var john = new Person('John', 1978, 'uncle');
//john.calcAge();

//console.log(UVSinghK.lastName);
//console.log(yoo.lastName);
//
//
//// Object.create
//var personProto = {
//    calculateAge: function() {
//        console.log(2020 - this.yearOfBirth);
//    }
//}
//
//
//var john = Object.create(personProto);
//john.name = "John";
//john.yearOfBirth = 1898;
//john.job = 'student';
//
//
//var jane = Object.create(personProto, {
//    name: {value: 'Jane'},
//    yearOfBirth: {value: 1989},
//    job: {value: 'student'}
//})



/////////////////////////////////////////////////////////
// Function returning function

/*
function interviewQuestions (job) {
    if ( job === 'designer'){
        return function(name) {
            console.log(name + ' can you please explain UX ?')
    } }else if (job === 'teacher') {
        return function(name) {
            console.log("What subjects do you teach ?, "+ name)
    }} else {
            return function (name) {
                console.log("Hello "+name+" what do you do ?")
            }
        }
    }

interviewQuestions('som')("john");
*/
///////////////////////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
(function(name){
    console.log("Hello ! " + name);
})("Yuvraj Singh Kiraula");


///////////////////////////////////////////////////////
// Closures
function retirement (retirementAge) {
    var a = ' years left until retirement.';
    
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

retirement(56)(2001);


function interviewQuestions(job) {
    return function (name) {
        if ( job === 'designer'){
            console.log(name + ' can you please explain UX ?')
        }else if (job === 'teacher'){
            console.log("What subjects do you teach ?, "+ name)
        } else {
                console.log("Hello "+name+" what do you do ?")
        }
    }
}
interviewQuestions('teacher')('UVSinghK')


///////////////////////////////////////////////////////////////
// Bind, Call & Apply(takes arguments as an array)

var john = {
    name: 'John',
    age: 25,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style == 'formal')
            console.log('Good '+timeOfDay+' ladies and gentlemen! I\'m '+this.name+', I\'m a '+this.job+', I\'m '+this.age+' years old.' );
        else if (style == 'friendly')
            console.log('Hey how it\'s going ladies and gentlemen! I\'m '+this.name+', I\'m a '+this.job+', I\'m '+this.age+' years old, Have a nice '+timeOfDay+ '.' );
    }
}

john.presentation('formal', 'morning');
var emily = {
    name: 'emily',
    age: 34,
    job: 'developer'
}

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('evening')

john.presentation.call(emily, 'friendly', 'evening')



var years = [2001, 1987, 1890, 2010]

var arrCalc = (arr, fun) => {
    var resArr = [];
    for(var i = 0; i < arr.length; i++){
        resArr.push(fun(arr[i]));
    }
    return resArr;
}

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrCalc(years, calculateAge);
var fullIndia = arrCalc(ages, isFullAge.bind(this, 18))
console.log(ages)
console.log(fullIndia)