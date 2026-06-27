const formulario = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
const mediaQuery = window.matchMedia("(max-width: 1100px)")

function cliqueiNoBotao() {
    if (mediaQuery.matches) {
        // MOBILE - Centralizado
        formulario.style.left = "50%"
        formulario.style.transform = "translateX(-50%)"
        formulario.style.visibility = "visible" // ← TORNA VISÍVEL
        formulario.style.opacity = "1" // ← APARECE
    } else {
        // DESKTOP
        formulario.style.left = "40%"
        formulario.style.transform = "translateX(-50%)"
        formulario.style.visibility = "visible" // ← TORNA VISÍVEL
        formulario.style.opacity = "1" // ← APARECE
    }
    mascara.style.visibility = "visible"
}

// Função para fechar o formulário
function fecharFormulario() {
    formulario.style.visibility = "hidden" // ← ESCONDE COMPLETAMENTE
    formulario.style.opacity = "0" // ← TRANSPARENTE
    formulario.style.left = "-9999px" // ← JOGA PRA FORA DA TELA
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

// Validação do formulário
function validarFormulario(event) {
    const nome = document.getElementById('nome')
    const telefone = document.getElementById('telefone')
    const duvida = document.getElementById('duvida')

    let temErro = false

    // Valida Nome
    if (nome.value.trim() === '' || nome.value.length < 3) {
        nome.style.border = '2px solid #e52521'
        nome.placeholder = '⚠️ Por favor, digite seu nome'
        temErro = true
    } else {
        nome.style.border = '2px solid #18d80f'
    }

    // Valida Telefone
    if (telefone.value.trim() === '' || telefone.value.length < 10) {
        telefone.style.border = '2px solid #e52521'
        telefone.placeholder = '⚠️ Digite um telefone válido'
        temErro = true
    } else {
        telefone.style.border = '2px solid #18d80f'
    }

    // Valida Mensagem
    if (duvida.value.trim() === '' || duvida.value.length < 10) {
        duvida.style.border = '2px solid #e52521'
        duvida.placeholder = '⚠️ Descreva seu problema (mín. 10 caracteres)'
        temErro = true
    } else {
        duvida.style.border = '2px solid #18d80f'
    }

    // Se tiver erro, NÃO envia
    if (temErro) {
        event.preventDefault() // Impede envio
        return false
    }

    // Se tudo OK, mostra mensagem de envio
    mostrarMensagemEnvio()
    return true
}

// Mensagem de "Enviando..."
function mostrarMensagemEnvio() {
    const formulario = document.querySelector(".formulario-fale-conosco")
    const btnEnviar = document.querySelector(".button-form")

    btnEnviar.innerHTML = "Enviando..."
    btnEnviar.disabled = true
    btnEnviar.style.opacity = "0.6"
    btnEnviar.style.cursor = "not-allowed"
}

// Remove borda vermelha ao começar a digitar
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('#nome, #telefone, #duvida')

    inputs.forEach(input => {
        input.addEventListener('input', function () {
            this.style.border = '1px solid gray'
        })

        input.addEventListener('focus', function () {
            // Restaura placeholder original
            if (this.id === 'nome') this.placeholder = 'Seu nome'
            if (this.id === 'telefone') this.placeholder = 'Seu telefone'
            if (this.id === 'duvida') this.placeholder = 'Digite seu problema aqui...'
        })
    })
})