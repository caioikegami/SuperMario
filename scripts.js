const formulario = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
const clickFora = document.querySelector(".mascara-formulario")
const mediaQuery = window.matchMedia("(max-width: 1100px)")

function cliqueiNoBotao() {
    formulario.style.left = "40%"
    formulario.style.transform = "translatX(-50%)"
    mascara.style.visibility = "visible"

    if (mediaQuery.matches) {
        formulario.style.left = "20%"
        formulario.style.transform = "translatX(-50%)"
        mascara.style.visibility = "visible"
    }

    if (clickFora) {
        mascara.addEventListener("click", () => {
            formulario.style.left = "-260px"
            mascara.style.visibility = "hidden"
        })
    }
}






