import {vagasDetalhadas} from './vagasDetalhadas.js';

function mudarProcemtagem (n){
    let porcemtagemVaga = document.querySelector(".porcemtagem")
    porcemtagemVaga.textContent = n + "%"
    console.log(porcemtagemVaga)
    let match = document.querySelectorAll(".porcemtagem")
    match.forEach(e=>{
        //transforma a procemtagem em número
        let porcemtagem = e.textContent
        porcemtagem = parseInt(e.textContent.match(/\d+/))
        //altera a cor de acordo com a porcemtagem
        if (porcemtagem > 50) {
            e.style.backgroundColor = "rgb("+(255-(porcemtagem-50)*5)+",255,0)"
        } else {
            e.style.backgroundColor = "rgb(255,"+porcemtagem*5+",0)"
        }
    })
}

let perfil = ["JavaScript","Inglês","Scrum","Git","GitHub","Node.js","HTML5","CSS3","React","Espanhol","SQL","Curso superior em TI"]
function visualizarCompetencias(){
    let vaga1Requisitos = document.querySelectorAll(".requisitos")
    let perfilMatchVaga1 = []
    let porcemtagem
    perfil.map(e=>{
        vaga1Requisitos.forEach(c=>{
            if (e == c.textContent){
                perfilMatchVaga1.push(e)
            }
        })
    })
    vaga1Requisitos.forEach(e=>{
        perfilMatchVaga1.map(c=>{
            if(c == e.textContent){
                e.style.backgroundColor = "rgb(0,255,0)"
            }
        })
    })
    porcemtagem = 100*perfilMatchVaga1.length / vaga1Requisitos.length
    mudarProcemtagem(Math.trunc(porcemtagem))
}

document.addEventListener('DOMContentLoaded', () => {
    const vagaItem = document.querySelectorAll('.vaga');
    const detalhesVaga = document.querySelector('.vaga_detalhada');
    visualizarCompetencias()
    vagaItem.forEach(item => {
        item.addEventListener('click', (e) => {
            let vagaId = item.getAttribute('data-id');
            detalhesVaga.innerHTML = vagasDetalhadas[vagaId]
            visualizarCompetencias()
        });
    });
});


