// const person: {
//     name: string;
//     age: number
// } = {
//     name: "Bharat",
//     age: 30
// }

const person = {
    name: 'Bharat',
    age: 35,
    hobbies: ['Soccer', 'Chess', 'Reading']
}

let favoriteActivities: [];

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}