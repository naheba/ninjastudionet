//obtener el elemento span por el id move
let move = document.getElementById("move");

//flecha para home
let home = document.getElementById("home");
home.addEventListener("mouseover", () => {
    move.className = "flecha";
    move.style.setProperty("left", "30px");
}, false)
home.addEventListener("mouseout", () => {
    move.className = "flecha";
}, false)


//flecha para portfolio
let portfolio = document.getElementById("portfolio");
portfolio.addEventListener("mouseover", () => {
    move.className = "flecha";
    move.style.setProperty("left", "123px");
}, false)
portfolio.addEventListener("mouseout", () => {
    move.style.setProperty("left", "30px");
}, false)


//flecha para galeria
let galery = document.getElementById("galery");
galery.addEventListener("mouseover", () => {
    move.className = "flecha";
    move.style.setProperty("left", "228px");
}, false)
galery.addEventListener("mouseout", () => {
    move.style.setProperty("left", "30px");
}, false)

//flecha para cursos
let cursos = document.getElementById("cursos");
cursos.addEventListener("mouseover", () => {
    move.className = "flecha";
    move.style.setProperty("left", "327px");
}, false)
cursos.addEventListener("mouseout", () => {
    move.style.setProperty("left", "30px");
}, false)

//flecha para contacto
let contacto = document.getElementById("conta");
contacto.addEventListener("mouseover", () => {
    move.className = "flecha";
    move.style.setProperty("left", "430px");
}, false)
contacto.addEventListener("mouseout", () => {
    move.style.setProperty("left", "30px");
}, false)