var person = {
	name:'Andrew',
	age:24
}
var personJSON = JSON.stringify(json);
//stringy takes one arguement , ie the object or arraythat you want to convert to json
console.log(personJSON);
console.log(typeof personJSON);
/* 

Let's take out personJSON and convert it back to object.

*/

var personObject = JSON.parse(personJSON);
//the parse method takes the string and convert it into a js object and spit it out.

console.log(personObject.name);
console.log(typeof personObject);
//^this is to prove that it's back to a object/

console.log('Challenge Area');
var animal = {
	name: 'animal'
	age:'16'
}
var animalObject = JSON.parse(personJSON);

var animalJSON = JSON.stringify(animal);
console.log(typeof animalObject);













//error 1, json is not defined
/* Notes
JS object notation;

its like a js object, but its a string. Json is used to post data 
without refreshing the page.
Think of the todo app, in a todoapp what we do basically is 
just add the info to the app. Nothing is refreshed. Your data is just 
being sent.

it simply makes a request. it passes along some json, it passes it 
along to the server where it can be used,

In ordder to convert hthe above var into jason, 
we need to create a var to store it.
we are creating a json object which has a method on it called stringify.
what we have stored in personJSON is actually a string.

after console.logging we get .double quotes was addedto all our strings.
the json format is pretty specific
its useful bcuz it helps to pass between different servers

var personObject


