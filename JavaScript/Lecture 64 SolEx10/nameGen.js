/*
    Create a buisness name generator by combining list of abjectives and shop name and another word

    Adjectives:
    Crazy
    Amazing
    Fire

    Shop Name:
    Engine
    Foods
    Garments

    Another word:
    Bros
    Limited 
    Hub
*/

let adj = {
    Crazy,
    Amazing,
    Fire
}

let shop = {
    Engine,
    Foods,
    Garments
}

let word = {
    Bros,
    Limited ,
    Hub
}

for (i in adj) {
    let name = abj.conct(shop,word);
    let ran = name.random();
}

console.log(ran);
