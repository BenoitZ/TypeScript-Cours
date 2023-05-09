"use strict";
//npm i typescript
// tsc index.ts         pour compiler le fichier ts
// sudo tsc index.ts    pour compiler le fichier ts en super utilisateur
// tsc --init           pour initialiser TS et obtenir un fichier json
// tsc -w               pour obtenir un watch (execution en continue)
// VARIABLES
// let num1 = 24;
// num1 = false;   // TS n'accepte pas le changement de type, JS : oui!
let num1 = 24;
num1 = 14;
// let num2: number;
// num2 = "hello"; //TS n'accepte pas car on lui a deja assigné un type number
let num2; // on déclare le type en lui précisant
let num3 = 24; // OU on déclare direct la valeur et il reconnait automatiquement le type
// UNION
let numOrString; // on peut lui assigné 2 types en méme temps !
// TABLEAUX
//en JS
// let array = ["chien", "chat", "poisson"];
// array[1] = "cheval" //ok [chien, cheval, poisson]
// array[1] = 24; //ok en JS, mais PAS en TS -> type
//EN TS
// let array = ["chien", "chat", "poisson"];
// array[1] = false //NON il attend le méme type que "chat"
let tableau = []; //pour déclarer un tableau vide avec un type en TS
let tableau2 = []; //pour faire un UNION sur un tableau (plusieurs types)
tableau2.push(false);
tableau2.push(42);
tableau2.push("String"); //NON
// LES OBJETS
//EN JS 
let player = {
    id: 0,
    name: "Zidane"
};
player.nickname = "zizou";
player.jersey = 21; //on ajoute comme on veut en JS
let zidane = {
    id: 0,
    name: "Zidane",
    nickname: "Zizou",
};
// LES CLASSES
// EN TS 
class Singer {
    constructor(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}
const prince = new Singer(0, 'Prince'); //avec ou sans alive grace au ?
const robot = new Singer(1, 7624689, true); // number, number (grace à l'UNION déclaré précédement) et oui ici on utilise alive grace à l'option ?
// LES FONCTIONS
const sayMyName = (name) => {
    console.log(`Bonjour ${name}`);
};
sayMyName('Benoit');
const ageDuCapitain = (age, size) => {
    // :string ou number ou... -> indique le ty^pe de donné quis era retourné dans la fonction
    if (size) { //si la taille est indiqué (car elle est mise en option grace au ?)
        console.log(`La taille du capitaine est de ${size} cm et il est agé de : ${age}`);
    }
    else { //si la taille n'est pas indiqué
        console.log(`Le capitaine est agé de : ${age} ans`);
    }
    return "ok cool"; // ok pour le :string
    return "ok cool"; // faux dans le cas de :void car void veut dire qu'il nattends pas de return
};
ageDuCapitain(16); //executera le else vu que size n'est pas indiqué 
const user1 = {
    name: "Julien",
    attributes: [false, "author"]
};
// LES ENUM (base de données)
var Role;
(function (Role) {
})(Role || (Role = {}));
(ADMIN, PRENIUM, BASIC);
const user2 = {
    name: "Julien",
    attributes: [10, "author"],
    role: Role.ADMIN
};
if (user2 === Role.ADMIN) {
    console.log("connection speciale pour les admin");
}
