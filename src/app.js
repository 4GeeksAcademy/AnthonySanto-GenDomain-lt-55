import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

window.onload = function() {
  function random(arr){
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function GenerateDomain(){
    for(let i = 0; i < pronoun.length; i++){
      for(let z = 0; z < adj.length; z++){
        for(let x = 0; x < noun.length; x++){
          let dominio = pronoun[i] + adj[z] + noun[x] + '.com'+"<br>";
          document.getElementById("domain").innerHTML += dominio; //se van a acumular a forma de impresion y se hace un salto de espacio por cada uno con el br
        }
      }
    }
  }

  GenerateDomain();
};