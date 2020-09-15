"use strict"

const submit = document.querySelector("uname").value;

submit.onclick = function() {
        const uname = document.querySelector("uname").value;
        const psw = document.querySelector("#psw").value;
        const emailTulos = document.querySelector("#emailTulos");
        const salasanaTulos = document.querySelector("#salasanaTulos");
        emailTulos.innerHTML = `Email: ${uname}`;
        salasanaTulos.innerHTML = `Salasana ${psw}`;
        return false;
}