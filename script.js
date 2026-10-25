const blocosTopicos = document.querySelectorAll('.cont-top')

const logo = document.getElementById('logo')
const video = document.getElementById('meu-video')



blocosTopicos.forEach((bloco) => {
    const subtopicos = bloco.querySelectorAll('.text-sub')
    const btnAnt = bloco.querySelector('.btn-ant')
    const btnProx = bloco.querySelector('.btn-prox')

    const somClique = document.getElementById('som-clique')

    let indiceAtual = 0

    function atualizarSubtopico(novoIndice){
        subtopicos[indiceAtual].classList.remove('ativo')

        indiceAtual = novoIndice

        subtopicos[indiceAtual].classList.add('ativo')


        if (somClique){
            somClique.currentTime = 0
            somClique.play(). catch(error => {
                console.log("aguardando interação do usuário")
            })
        }
    }

    btnProx.addEventListener('click', () => {
        let proximo = (indiceAtual + 1) % subtopicos.length
        atualizarSubtopico(proximo)
        
    })

    btnAnt.addEventListener('click', () => {
        let anterior = (indiceAtual -1 + subtopicos.length) % subtopicos.length
        atualizarSubtopico(anterior)
    })
})

if (video && logo){
    logo.addEventListener('mouseenter', () => {
        video.pause()
        video.currentTime = 0 

        let playPromise = video.play()

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('impedimento da resenha', error)
            })
        }
    })
}