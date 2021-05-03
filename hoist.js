
// 1.
console.log(hello);                                   
var hello = 'world';                                 

//After Hoisting
var hello;
console.log(hello); // logs undefined
hello = "world";

// 2.
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//After Hoisting
var needle;
needle = "haystack";
function test(){
    var needle;
    needle = "magnet";
    console.log(needle);
}
test();//Output is "magnet"

// 3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//After Hoisting
var brendan;
brendan = 'super cool';
function print(){
}
console.log(brendan);//As the function is not called, it does nothing. So, output is "super cool",

// 4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//After Hoisting
var food;
food = 'chicken';
console.log(food); // logs in 'chicken'
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food)// logs in  'half-chicken'
}
eat();// Output is 'chicken' and 'half-chicken'

// 5.
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);// Output is "mean is not a function"

// 6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//After Hoisting
var genre;
console.log(genre) // logs undefined
genre = "disco";
function rewind(){
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
rewind();
console.log(genre); //Output... "undefined", "rock", "rock", "r&b", "disco"

// 7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//After Hosting
dojo = "san jose";
console.log(dojo); //logs "san jose"
function learn(){
    var dojo;
    dojo = "seattle";
    console.log(dojo);// logs "seattle"
    dojo = "burbank";
    console.log(dojo);// logs "burbank"
}
learn();
console.log(dojo); // logs "san jose"
//Output... "san jose", "seattle", "burbank", "san jose"

// 8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//After Hoisting
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // can not reassign a constant.
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65)); //Output... {name: Chicago, students: 65}
console.log(makeDojo("Berkeley", 0));//Can not reassign a constant variable.