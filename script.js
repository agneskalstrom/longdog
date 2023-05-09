const btn = document.querySelector('button');
const mid = document.querySelector('.middle');
const belly = document.createElement("img");

btn.addEventListener('click', addLength);

function addLength() {
    belly.setAttribute("src", "/images/dog-center.svg");
    mid.appendChild(belly);
}