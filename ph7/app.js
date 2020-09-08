"use strict"

const Tulos = document.querySelector("#Tulos");
const etu = document.querySelector("#etu");
const suku = document.querySelector("#suku");
const kotipuh = document.querySelector("#kotipuh");
const tyopuh = document.querySelector("#tyopuh");
const Osoite = document.querySelector("#Osoite");
const btnLTulosta = document.querySelector("#btnTulosta");





btnTulosta.onclick = function(){
  return  tulostaHenkilotiedot}

const henkilo = Henkilo(etu, suku, puh);
function Henkilo(_etu, _suku, _puhkoti, _puhtyo, _osoite){  
let henkilo = {
    etu: _etu,
    suku: _suku,
    puh: [
        { tyyppi: "koti" },
        { numero: _puhkoti }
    ],
    puhtyo: [
        { tyyppi: "tyo"},
        {numero: _puhtyo} 
    ],
    osoite: _osoite,

    
    
    tulostaHenkilotiedot(){
        return `${this.etu} ${this.suku.charAt(0)} puhelinnumero töihin ${this.puhtyo[1].numero} ja asuu osoitteessa ${osoite}`  
    } 
    
} 
}  








