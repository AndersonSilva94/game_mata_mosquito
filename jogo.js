
let altura = 0
let largura = 0
let vidas = 1
let tempo = 50

let criaMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){

        criaMosquitoTempo = 1500

}else if(nivel === 'dificil'){

        criaMosquitoTempo = 1000

}else{

        criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
        altura = window.innerHeight
        largura = window.innerWidth

        console.log(altura, largura)
}
ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function(){
         
        tempo--
        if( tempo < 0){
                clearInterval(cronometro)
                clearInterval(mataMosca)
                window.location.href = 'vitoria.html'
        }else{
                document.getElementById('cronometro').innerHTML = tempo
        }

}, 1000)

function posicaoRandomica(){
        let novo = document.getElementById('mosquito')

        if(novo){
                novo.remove()
                if(vidas > 3){

                        window.location.href = 'fim_de_jogo.html'

                }else{
                document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"

                vidas++
                }
                
        }

        let posicaoX = Math.floor(Math.random() * largura) - 90
        let posicaoY = Math.floor(Math.random() * altura) - 90
        
        posicaoX = posicaoX < 0 ? 0 : posicaoX
        posicaoY = posicaoY < 0 ? 0 : posicaoY

        //criar o elemento HTML
        let mosquito = document.createElement('img')
        mosquito.src = 'imagens/mosca.png'
        mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
        mosquito.style.left = posicaoX + 'px'
        mosquito.style.top = posicaoY + 'px'
        mosquito.style.position = 'absolute'
        mosquito.id = 'mosquito'
        mosquito.onclick = function(){
                this.remove()
        }

        document.body.appendChild(mosquito)
        //console.log(tamanhoAleatorio())
}
function tamanhoAleatorio(){
        let classe = Math.floor(Math.random() * 3)
       // console.log(classe)
        if(classe === 0){
                return 'mosquito1'
        }else if(classe === 1){
                return 'mosquito2'
        }else{
                return 'mosquito3'
        }
}
function ladoAleatorio(){
        let classe = Math.floor(Math.random() * 2)
       // console.log(classe)
        if(classe === 0){
                return 'ladoA'
        }else{
                return 'ladoB'
        }
}