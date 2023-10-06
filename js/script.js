"use strict";

class Personnage{//La classe définit le personnage
    constructor(nom,santementale){
        this.nom = nom;
        this.santementale = santementale;
        this.nbTaxis = 0;
        this.feu = 30;
    }

    Deroulement(){//Cette fonction est la fonction principale du programme, elle permet de définir les conditions de victoires et de défaites
        while(this.santementale>0 && this.feu>0){
            this.Musique();
        }
        if(this.feu == 0){
            console.log(`${this.nom} est bien arrivé, il lui a fallut ${10-this.santementale} taxi(s) pour rentrer chez lui.`)
        }
        else if(this.santementale == 0){
            console.log(`${this.nom} explose.`);
        }
    }

    Musique(){//Cette fonction sert à changer la musique, baissé de -1 la santé mentale et baissé de -1 le nombre de feu rouge
    
        let iMusique = Math.floor(Math.random()*5);

        if (0 == iMusique){//0 correpond à l'index de musique Anissa - Wejdene
            this.santementale -=1;
            console.log(`A la radio il y a ${listeMusique[iMusique]}, ${this.nom} déteste cette musique, il change donc de taxi.`);
            this.feu -=1;
            console.log(`Il reste, ${this.feu} feu(x) rouge(s).`);
            console.log(`Santé mentale : ${this.santementale}`);
            console.log("");
        }
        if (1 == iMusique){//1 correpond à l'index de musique The kraken - Hans Zimmer
            console.log(`A la radio il y a ${listeMusique[iMusique]}`);
            this.feu -=1;
            console.log(`Il reste, ${this.feu} feu(x) rouge(s).`);
            console.log("");
        }
        if (2 == iMusique){//2 correpond à l'index de musique In The Final - Mario & Luigi
            console.log(`A la radio il y a ${listeMusique[iMusique]}`);
            this.feu -=1;
            console.log(`Il reste, ${this.feu} feu(x) rouge(s).`);
            console.log("");
        }   
        if (3 == iMusique){//3 correpond à l'index de musique Annunaki - Vald
            console.log(`A la radio il y a ${listeMusique[iMusique]}`);
            this.feu -=1;
            console.log(`Il reste, ${this.feu} feu(x) rouge(s).`);
            console.log("");
        }
        if (4 == iMusique){//4 correpond à l'index de musique Gods - NewJeans
            console.log(`A la radio il y a ${listeMusique[iMusique]}`);
            this.feu -=1;
            console.log(`Il reste, ${this.feu} feu(x) rouge(s).`);
            console.log("");
        }
    }
}

let listeMusique=["Anissa - Wejdene","The kraken - Hans Zimmer","In The Final - Mario & Luigi","Annunaki - Vald","Gods - NewJeans"];
let Coco = new Personnage("Coco", 10);
Coco.Deroulement();