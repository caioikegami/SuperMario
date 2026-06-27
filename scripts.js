const formulario = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
const mediaQuery = window.matchMedia("(max-width: 1100px)")

function cliqueiNoBotao() {
    formulario.style.left = "40%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"

    if (mediaQuery.matches) {
        formulario.style.left = "50%"
        formulario.style.transform = "translateX(-50%)"
        mascara.style.visibility = "visible"
    }
}

// Função para fechar o formulário
function fecharFormulario() {
    formulario.style.left = "-260px"
    formulario.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}

// Fechar ao clicar na máscara (fora do formulário)
if (mascara) {
    mascara.addEventListener("click", fecharFormulario)
}

// Fechar com tecla ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        fecharFormulario()
    }
})