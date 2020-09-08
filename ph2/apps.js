"use strict";

const btnLaske = document.querySelector("#btnLaske");
const btnTyhjenna = document.querySelector("#btnTyhjenna");

btnLaske.onclick = function() {
    const luku1 = document.querySelector("#luku1").value;
    const luku2 = document.querySelector("#luku2").value;

    const summa = document.querySelector("#summa");
    const keskiarvo = document.querySelector("#keskiarvo");
    const vertailu = document.querySelector("#vertailu");


    const lukujenSumma = Number(luku1) + Number(luku2);
    summa.innerHTML = "Lukujen summa on " + lukujenSumma;

    const lukujenKeskiarvo = lukujenSumma / 2;
    keskiarvo.innerHTML = "Lukujen keskiarvo on " + lukujenKeskiarvo;

    vertailu.innerHTML = vertaile(luku1, luku2);

    //Lomaketta ei lähetetä
    return false;
}

btnTyhjenna.onclick = function() {
    document.getElementById("lomake").reset();
}

function vertaile(_luku1, _luku2) {
    if(_luku1 < _luku2) {
        return `luku ${_luku2} > ${_luku1}`;
    } else if(_luku1 > _luku2) {
        return `luku ${_luku2} < ${_luku1}`;
    } else {
        return `luku ${_luku2} ja ${_luku1} ovat yhtä suuria`;
    }
}