// const person: {
//     name: string;
//     age: number
// } = {
//     name: "Bharat",
//     age: 30
// }
var person = {
    name: 'Bharat',
    age: 35,
    hobbies: ['Soccer', 'Chess', 'Reading']
};
var favoriteActivities;
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
