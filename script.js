"use strict";

const zona = document.querySelector(".zona");

zona.addEventListener("dragover", (e) => {
    e.preventDefault();
});

zona.addEventListener("drop", (e) => {
    const textura = e.dataTransfer.getData("textura");
    zona.style.background = `url(textura${textura}.png)`;
});

for (let i = 1; i < document.querySelector(".texturas").children.length + 1; i++) {
    document.querySelector(`.textura${i}`).addEventListener("dragstart", (e) => { transferirTexturas(i, e) });
}

const transferirTexturas = (i, e) => {
    e.dataTransfer.setData("textura", i);
};