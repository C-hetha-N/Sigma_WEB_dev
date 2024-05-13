/*
    Create a buisness name generator by combining list of abjectives and shop name and another word

    Adjectives:
    Crazy
    Amazing
    Fire

    Shop type:
    Engine
    Foods
    Garments

    Another word:
    Bros
    Limited 
    Hub
*/

let rand1 = Math.random();
let first, second, third;

if(rand1 <= 0.33) {
    first = "Crazy";
}
else if (rand1 <= 0.66) {
    first = "Amazing";
} 
else {
    first = "Fire"
}

let rand2 = Math.random();
if(rand2 <= 0.33) {
    second = "Engine";
}
else if (rand2 <= 0.66) {
    second = "Foods";
} 
else {
    second = "Garments"
}

let rand3 = Math.random();
if(rand3 <= 0.33) {
    third = "Bros";
}
else if (rand3 <= 0.66) {
    third = "Limited";
} 
else {
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)


