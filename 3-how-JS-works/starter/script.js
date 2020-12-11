///////////////////////////////////////
// Lecture: Hoisting


// functions
//example()
//
//function example() {
//    var age = 19;
//    console.log(age);
//}
//
//
//var example_1 = function (){
//    console.log(name);
//    var name = 'Uv';
//    console.log(name);
//}
//
//
//example_1();
//var name = "Yo";
//console.log(name);
//
//// variables
//
//console.log(something);
//var something=234;






///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword



//calculateAge(1995)
//function calculateAge (year) {
//    console.log(2020-1995);
//    console.log(this)
//}


var john = {
    name: "Uv",
    birthYear: 19,
    calAge: function(){
        console.log(this);
        console.log(1995-this.birthYear);
//        
//        function innerFun(){
//            console.log(this);
//        }
//        innerFun();
    }
}

john.calAge();

var mike = {
    name: "mike",
    birthYear: 1998
}

mike.calAge = john.calAge;

mike.calAge();

