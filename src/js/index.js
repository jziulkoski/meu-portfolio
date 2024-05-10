const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos')
    // querySelector busca UM elemento com essa classe

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')
    // querySelectorAll busca TODOS elementos com essa classe

botaoMostrarProjetos.addEventListener('click', () => {
    projetosInativos.forEach(projetoInativo => { // forEach = "para cada"
        projetoInativo.classList.add('ativo')
    })

    botaoMostrarProjetos.classList.add("remover")
})