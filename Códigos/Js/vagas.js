let match = document.querySelectorAll(".porcemtagem")
match.forEach(e=>{
    //transforma a procemtagem em número
    let porcemtagem = e.textContent
    porcemtagem = e.textContent.match(/\d+/)
    porcemtagem = parseInt(porcemtagem[0])

    //altera a cor de acordo com a porcemtagem
    if (porcemtagem > 50) {
        e.style.backgroundColor = "rgb("+(255-(porcemtagem-50)*5)+",255,0)"
    } else {
        e.style.backgroundColor = "rgb(255,"+porcemtagem*5+",0)"
    }
})

let perfil = ["JavaScript","Inglês","Scrum","Git","GitHub","Node.js","HTML5","CSS3","React","Espanhol"]
let vaga1Requisitos = document.querySelectorAll(".requisitos")

let perfilMatchVaga1 = []
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

document.addEventListener('DOMContentLoaded', () => {
    const vaga = document.querySelectorAll('vaga');
    const detalhesvaga = document.getElementById('detalhes_vaga');

    const vagadetalhada = {
        1: 'Detalhes da Vaga 1: Descrição detalhada, requisitos, benefícios, etc.',
        2: 'Detalhes da Vaga 2: Descrição detalhada, requisitos, benefícios, etc.',
        3: 'Detalhes da Vaga 3: Descrição detalhada, requisitos, benefícios, etc.'
        // Adicione mais detalhes conforme necessário
    };

    vaga.forEach(item => {
        item.addEventListener('click', () => {
            vagaid = item.getAttribute('data-id');
            detalhesvaga.textContent = vagadetalhada[vagaId] || 'Detalhes não encontrados.';
        });
    });
});
