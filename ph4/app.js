"use strict"

const btnSumma = document.querySelector("#btnSumma");
const btnErotus = document.querySelector("#btnErotus");
const btnKerto = document.querySelector("#btnKerto");
const btnJako = document.querySelector("#btnJako");
const tulos = document.querySelector("#tulos");

btnSumma.oneclick = function() {
    const luku1 = document.querySelector("#luku1").value;
    const luku2 = document.querySelector("luku2").value;
    tulos.innerHTML = Number(luku1) + Number(luku2);
    return false; 
}

btnSumma.oneclick = function() {
    const luku1 = document.querySelector("#luku1").value;
    const luku2 = document.querySelector("luku2").value;
    tulos.innerHTML = Number(luku1) - Number(luku2);
    return false; 
}
btnSumma.oneclick = function() {
    const luku1 = document.querySelector("#luku1").value;
    const luku2 = document.querySelector("luku2").value;
    tulos.innerHTML = Number(luku1) * Number(luku2);
    return false; 
}
btnSumma.oneclick = function() {
    const luku1 = document.querySelector("#luku1").value;
    const luku2 = document.querySelector("luku2").value;
    if(luku2 == 0) {
        tulos.innerHTML = "Virhe! Lukua ei voida jakaa nollalla.";  
        return false;
     } else {
        tulos.innerHTML = (Number(luku1) / Number(luku2)).toFixed(2);
        return false; 
    }
           
        }
    
   







