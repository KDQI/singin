"use strict"
const btnLaske = document.querySelector("#btnLaske");
const btnTyhjenna = document.querySelector("#btnTyhjenna");

btnLaske.onclick = function() {
    const luku1 = document.querySelector("#luku1").value;
    const luku2 = document.querySelector("#luku2").value;

    const summa = document.querySelector("#summa");
    const erotus = document.querySelector("#erotus");
    const kerto = document.querySelector("#kerto");
    const jako = document.querySelector("#jako");

    const lukujenSumma = Number(luku1) + Number(luku2);
    summa.innerHTML = `Lukujen ${luku1} ja ${luku2} summa on ${lukujenSumma}`;

    const lukujenErotus = luku1 - luku2;
    erotus.innerHTML = `Lukujen ${luku1} ja ${luku2} erotus on ${lukujenErotus}`

    const lukujenKertominen = luku1 * luku2;
    kerto.innerHTML = `${luku1} * ${luku2} = ${lukujenKertominen}`;

    const lukujenJako = (luku1 / luku2).toFixed(2);
    jako.innerHTML = `${luku1} / ${luku2} = ${lukujenJako}`;
    return false;
}
btnTyhjenna.onclick = function() {
    document.getElementById("lomake1").reset();
}


