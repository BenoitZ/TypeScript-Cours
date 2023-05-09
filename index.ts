//npm i typescript
// tsc index.ts         pour compiler le fichier ts
// sudo tsc index.ts    pour compiler le fichier ts en super utilisateur
// tsc --init           pour initialiser TS et obtenir un fichier json
// tsc -w               pour obtenir un watch (execution en continue)
// npx create-react-app typescript-react-course --template typescript     pour créer un projet react avec typesecript en plus



//------------------------------COUR 1---------------------------//
// VARIABLES

// let num1 = 24;
// num1 = false;   // TS n'accepte pas le changement de type, JS : oui!

let num1 = 24;
num1 = 14; 

// let num2: number;
// num2 = "hello"; //TS n'accepte pas car on lui a deja assigné un type number

let num2: number; // on déclare le type en lui précisant
let num3 = 24;    // OU on déclare direct la valeur et il reconnait automatiquement le type
// UNION
let numOrString: number | string; // on peut lui assigné 2 types en méme temps !



// TABLEAUX
//en JS
    // let array = ["chien", "chat", "poisson"];
    // array[1] = "cheval" //ok [chien, cheval, poisson]
    // array[1] = 24; //ok en JS, mais PAS en TS -> type
//EN TS
    // let array = ["chien", "chat", "poisson"];
    // array[1] = false //NON il attend le méme type que "chat"
let tableau: number[] = [];  //pour déclarer un tableau vide avec un type en TS
let tableau2: (number | boolean)[] = []; //pour faire un UNION sur un tableau (plusieurs types)

tableau2.push(false);
tableau2.push(42);
tableau2.push("String"); //NON




// LES OBJETS
//EN JS 
let player = {
    id:0,
    name:"Zidane"
}

player.nickname = "zizou"
player.jersey = 21;        //on ajoute comme on veut en JS

//EN TS
interface Player1 {  //on crée une interface (comme un constructeur)
    id: number,
    name: string,
    nickname: string,
    jersey?: number  // le ? indique que dans une instance, l'on n'est pas obligé d'utiliser cette arguments (sans le ? c'est obligatoire)
}

let zidane:Player1 = {   //et on instancie Player1. L'instance doit correspondre aux types indiqués dans l'interface
    id: 0,
    name: "Zidane",
    nickname: "Zizou",
}



// LES CLASSES
// EN TS 
class Singer{           //classique on déclare une classe mais en déclarant les variables avec les types
    id: number;
    name: string | number;
    alive?: boolean;

    constructor(id: number, name: string | number, alive?: boolean){  //pareil le ? garde en option le fait qu'on puisse ou pas l'utiliser plus tard
        this.id = id;
        this.name = name;
        this. alive = alive;
    }
}

const prince = new Singer(0, 'Prince');  //avec ou sans alive grace au ?
const robot = new Singer(1, 7624689, true);  // number, number (grace à l'UNION déclaré précédement) et oui ici on utilise alive grace à l'option ?


// LES FONCTIONS
const sayMyName = (name:string) => {  // avec name?:string on ne sera pas obligé d'indiquer un paramétre dans l'appel de la fonction
    console.log(`Bonjour ${name}`);
}
sayMyName('Benoit');


const ageDuCapitain = (age:number | string, size?:number ):string/*:void*/ => {    //:string -> j'attends de cette fonction qu'elle me retourne une chaine de caractére -> ce sera faux ///// void -> je n'attends aucun retour de cette fonction (un log n'est pas un return)
                                                                                   // :string ou number ou... -> indique le ty^pe de donné quis era retourné dans la fonction
    if (size) {   //si la taille est indiqué (car elle est mise en option grace au ?)
        console.log(`La taille du capitaine est de ${size} cm et il est agé de : ${age}`);
    } else {      //si la taille n'est pas indiqué
        console.log(`Le capitaine est agé de : ${age} ans`);       
    }
return "ok cool"  // ok pour le :string
return "ok cool"  // faux dans le cas de :void car void veut dire qu'il nattends pas de return
}
ageDuCapitain(16);  //executera le else vu que size n'est pas indiqué 



// LES TUPLE (base de données)
interface User {
    name: string;
    attributes: [number | boolean, string];
} 

const user1: User = {
    name: "Julien",
    attributes: [false, "author"]
}



// LES ENUM (base de données)
enum Role(ADMIN, PRENIUM, BASIC)
interface Userr {
    name: string;
    attributes: [number | boolean, string];
    role: Role
} 

const user2: Userr = {
    name: "Julien",
    attributes: [10, "author"],
    role: Role.ADMIN
}

if(user2 === Role.ADMIN){
    console.log("connection speciale pour les admin");
    
}



//------------------------------COUR 2---------------------------//

// npx create-react-app typescript-react-course --template typescript     pour créer un projet react avec typesecript en plus
// convertis tous les fichiers .js en .tsx  (a savoir que les fichiers .js peuvent aussi étre en .jsx, c'est pareil)

const inputMessage = useRef<HTMLInputElement>(null)
     //-> récupére la valeur (useref) de l'élément input <HTMLInputElement> de n'importe quel type

     const handleSubmit = (e:any) => {  //on type le e en any pour pouvoir recevoir tous les types
        e.preventDefault();}

inputMessage.current.value = ""; //pour vider l'input une fois le forumlaire valider par exemple en pur REACT
(document.getElementById("inputMessage") as HTMLInputElement).value = ""; // la méme mais en TS


const [messData, setMessData] = useState<MessageInt[]>([])
//on importe l'interface MessageInt qui sera utilisé notament
// pour typer le useState. LE [] à la suite est fait pour correspondre au [] du usestate
//interface : dans un fichier différent modele.ts
export interface MessageInt {
    id: number,
    message: string,
    date: number
}
//et exemple de données à entrer dans ueseState qui est de type []
setMessData([{
    id:23, 
    message:"salut",
    date: 4
  }]);


  messData?.map() //synthaxe de JS -> si (?) il y a quelque chose dans l'objet messData alors tu peux me lancer un map