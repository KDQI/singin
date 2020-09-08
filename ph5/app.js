"use strict"

const btnTarkista = document.querySelector("#btnTarkista");
const btnTyhjenna = document.querySelector("#btnTyhjaa");
const rekisterinumero = document.querySelector("#Rekisterinumero");

btnTarkista.onclick = function() {
const rekVal = rekisterinumero.value;   
rekisterinumero.value = rekVal.toUpperCase();
return false; 
}

btnTyhjenna.onclick = function() {
    document.getElementById("lomake1").reset();
    return false;
}