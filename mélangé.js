// ## Exercice mélangé

// ### exercice 1
// - Demander un nombre maximal et afficher de 2 en 2 de 0 au nombre maximal (for)

// let chiffre = +prompt("chiffre?");

// for(let e = 0; e <= chiffre; e += 2){
//     console.log(e)
// };


// ### Exercice 2
// - Demander un nombre maximal et afficher si le nombre est paire de 0 au nombre maximal(for)
// - Ex: `Le nombre x est paire`

// let chiffre = +prompt("chiffre?");

// for(let e = 0; e <= chiffre; e ++){
//     if ((chiffre % 2) == 0) {
//         console.log(`Le nombre ${chiffre} est paire`)
//     } else {
//         console.log("pas pair")
//     }
// };


// ### Exercice 3
// - Dans la classe de la coding 13 il y a Alexis, Loic, Mohammed, Yassin, Issam, Mihai, Oussama, Dorian, Tania, Anthony, Junior, Kevin, Andy, Cheb Khaled, The Kairi 78, Arouf gangsta le plus beau de tout les rebeux.
// - Affichez les prenoms des etudiants et si leurs index est paire ou impaire.
// - Afficher a la fin touts les etudiants qui avaient des index paires ou impaires (forEach)

// let eleves = ["Alexis", "Loic", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian", "Tania", "Anthony", "Junior", "Kevin", "Andy", "Cheb Khaled", "The Kairi 78", "Arouf gangsta le plus beau de tout les rebeux"];

// let pair = [];
// let impair = [];

// eleves.forEach(function(eleve){
//     if ((eleves.indexOf(eleve)) % 2 == 0){
//         pair.push(eleve);
//     }else {
//         impair.push(eleve)
//     }
// });

// console.log(pair);
// console.log(impair);

// ### Exercice 4 (boucle forEach) Partie 1
// 1. Créer un tableau avec 9 prénoms
// 2. Affiche chaque élément dans un console log
// 3. Affiche chaque premiere lettre de chaque élément dans un console log
// 4. Affiche chaque seconde lettre de chaque élément dans un console log
// 5. Affiche chaque seconde lettre de chaque élément concaténé a tout le mot lui meme exemple : si le mot et bonjour alors on devra affiché obonjour
// 6. Affiche tous les prénoms dans un console log dont l'indice est pair 

// let tableau = ["charles", "loic", "antoine", "maurice", "salomon", "hector", "gus", "max", "velour"];

// console.log(tableau[0]);
// console.log(tableau[1]);
// console.log(tableau[2]);
// console.log(tableau[3]);
// console.log(tableau[4]);
// console.log(tableau[5]);
// console.log(tableau[6]);
// console.log(tableau[8]);

// console.log(tableau[0].charAt(0));
// console.log(tableau[1].charAt(0));
// console.log(tableau[2].charAt(0));
// console.log(tableau[3].charAt(0));
// console.log(tableau[4].charAt(0));
// console.log(tableau[5].charAt(0));
// console.log(tableau[6].charAt(0));
// console.log(tableau[8].charAt(0));

// tableau.forEach(function(eleve){
//     let first = eleve.charAt(1)
//     console.log(first + eleve)
// });

// tableau.forEach(function(eleve){
//     if ((tableau.indexOf(eleve)) % 2 == 0){
//         console.log(eleve);
//     }
// });

// ### Exercice 4 (boucle forEach) Partie 2
// 1. Créer un tableau avec 9 prénoms
// 2. Affiche tous les prénoms dont l'indice est impair en majuscule
// 3. Affiche tous les prénoms dont l'indice est pair avec la premiere lettre en majuscule
// 4. Affiche les prénoms impair ET plus long que 4caractères
// 5. Affiche les prénoms pair et plus long que 4caractères avec uniquement leur premiere lettre et en plus en majuscule (il n'y aura qu'une lettre en majuscule par mot)
// 6. Affiche tous les prénoms commencant par (a,e,m,f,y,n) mais pas les autres !
// 7. Affiche tous les prénoms plus long que 5 caractères et commencant par (a,e,m,f,y,n) 


// let tableau = ["charles", "loic", "antoine", "maurice", "salomon", "hector", "gus", "max", "velour"];

// tableau.forEach(function(eleve){
//     if ((tableau.indexOf(eleve)) % 2 == 1){
//         console.log(eleve.toUpperCase());
//     }
// });

// tableau.forEach(function(eleve){
//     if ((tableau.indexOf(eleve)) % 2 == 0){
//         console.log((eleve.charAt(0).toUpperCase()) + eleve.substring(1))
//     } else {
//         null
//     }
// });


// tableau.forEach(function(eleve){
//     if ((tableau.indexOf(eleve)) % 2 == 1 && eleve.length > 4){
//         console.log(eleve);
//     }
// });

// tableau.forEach(function(eleve){
//     if ((tableau.indexOf(eleve)) % 2 == 0 && eleve.length > 4){
//         console.log((eleve.charAt(0).toUpperCase()))
//     }
// });


// tableau.forEach(function(eleve){
//     if (eleve.charAt(0) == "a") {
//         console.log(eleve)
//     } else if (eleve.charAt(0) == "e") {
//         console.log(eleve)
//     } else if (eleve.charAt(0) == "m") {
//         console.log(eleve)
//     } else if (eleve.charAt(0) == "f") {
//         console.log(eleve)
//     } else if (eleve.charAt(0) == "y") {
//         console.log(eleve)
//     } else if (eleve.charAt(0) == "n") {
//         console.log(eleve)
//     }
// });

// tableau.forEach(function(eleve){
//     if (eleve.charAt(0) == "a" && eleve.length > 5) {
//         console.log(eleve)
//     } else if (eleve.charAt(0) == "e" && eleve.length > 5) {
//         console.log(eleve)
//     } else if (eleve.charAt(0) == "m" && eleve.length > 5) {
//         console.log(eleve)
//     } else if (eleve.charAt(0) == "f" && eleve.length > 5) {
//         console.log(eleve)
//     } else if (eleve.charAt(0) == "y" && eleve.length > 5) {
//         console.log(eleve)
//     } else if (eleve.charAt(0) == "n" && eleve.length > 5) {
//         console.log(eleve)
//     }
// });

// ### Exercice 4 (boucle forEach) Partie 3
// 1. Créer un tableau avec 9 prénoms
// 2. Affiche tous les prénoms plus court que 5 caractère commencant par (a,e,m,f,y,n)  avec leur première lettre en majuscule
// 14 Affiche tous les prénoms plus long que 4 caractères commencant par (k,c,m,f,y,n,a,e,p,o) et qui sont impaire dans la liste 
// 3. Affiche tous les prénoms plus long que 5 caractères commencant par (k,c,m,f,y,n,a,e,p,o) et qui sont pair dans la liste avec leur premiere lettre en minuscule,leur seconde et derniere lettre en majuscule
// 4. Affiche tous les prénoms plus court que 7 caractères commencant par (k,m,f,y,n,a,e,o) et qui sont pair dans la liste mais uniquement leur deux premieres lettres concaténé les uns aux aures dont la premiere lettre et en majuscule et la seconde en majuscule, exemple :  karima,fanny,nicolas,elisa qui donnera KaFaNiEl

let tableau = ["charles", "loic", "antoine", "maurice", "salomon", "hector", "gus", "max", "velour"];

// tableau.forEach(function(eleve){
//     if (eleve.charAt(0) == "a" && eleve.length < 5) {
//         console.log(eleve.charAt(0).toUpperCase() + eleve.substring(1))
//     } else if (eleve.charAt(0) == "e" && eleve.length < 5) {
//         console.log(eleve.charAt(0).toUpperCase() + eleve.substring(1))
//     } else if (eleve.charAt(0) == "m" && eleve.length < 5) {
//         console.log(eleve.charAt(0).toUpperCase() + eleve.substring(1))
//     } else if (eleve.charAt(0) == "f" && eleve.length < 5) {
//         console.log(eleve.charAt(0).toUpperCase() + eleve.substring(1))
//     } else if (eleve.charAt(0) == "y" && eleve.length < 5) {
//         console.log(eleve.charAt(0).toUpperCase() + eleve.substring(1))
//     } else if (eleve.charAt(0) == "n" && eleve.length < 5) {
//         console.log(eleve.charAt(0).toUpperCase() + eleve.substring(1))
//     }
// });

tableau.forEach(function(eleve){
    if ((tableau.indexOf(eleve)) % 2 == 0 && eleve.charAt(0) == "k" && eleve.length > 4) {
        console.log(eleve.charAt(0).toUpperCase() + eleve.substring(1))
    } else if ((tableau.indexOf(eleve)) % 2 == 0 && eleve.charAt(0) == "c" && eleve.length> 4) {
        console.log(eleve.charAt(0).toUpperCase() + eleve.substring(1))
    } else if ((tableau.indexOf(eleve)) % 2 == 0 && eleve.charAt(0) == "m" && eleve.length> 4) {
        console.log(eleve.charAt(0).toUpperCase() + eleve.substring(1))
    } else if ((tableau.indexOf(eleve)) % 2 == 0 && eleve.charAt(0) == "f" && eleve.length> 4) {
        console.log(eleve.charAt(0).toUpperCase() + eleve.substring(1))
    } else if ((tableau.indexOf(eleve)) % 2 == 0 && eleve.charAt(0) == "y" && eleve.length> 4) {
        console.log(eleve.charAt(0).toUpperCase() + eleve.substring(1))
    } else if ((tableau.indexOf(eleve)) % 2 == 0 && eleve.charAt(0) == "n" && eleve.length> 4) {
        console.log(eleve.charAt(0).toUpperCase() + eleve.substring(1))
    } else if ((tableau.indexOf(eleve)) % 2 == 0 && eleve.charAt(0) == "a" && eleve.length> 4) {
        console.log(eleve.charAt(0).toUpperCase() + eleve.substring(1))
    } else if ((tableau.indexOf(eleve)) % 2 == 0 && eleve.charAt(0) == "e" && eleve.length> 4) {
        console.log(eleve.charAt(0).toUpperCase() + eleve.substring(1))
    } else if ((tableau.indexOf(eleve)) % 2 == 0 && eleve.charAt(0) == "p" && eleve.length> 4) {
        console.log(eleve.charAt(0).toUpperCase() + eleve.substring(1))
    } else if ((tableau.indexOf(eleve)) % 2 == 0 && eleve.charAt(0) == "o" && eleve.length> 4) {
        console.log(eleve.charAt(0).toUpperCase() + eleve.substring(1))
    }
});