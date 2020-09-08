"use strict"

//Haetaan DOM-puusta painikkeet ja talletetaan ne muuttujiin
const btnTulosta = document.querySelector("#btnTulosta");
const btnTyhjenna = document.querySelector("#btnTyhjenna");

btnTulosta.onclick = function () {
    //Haetaan DOM-puusta p-elementti, jonka id=etujasukunimi
    const etunimi = document.querySelector("#etunimi").value;
    const sukunimi = document.querySelector("#sukunimi").value;
    const etujasukunimi = document.querySelector("#etujasukunimi");

    //Tulostetaan p-elementtiin etu- ja sukunimi
    etujasukunimi.innerHTML = `Tervetuloa, ${etunimi} ${sukunimi}`;

    return false;
}