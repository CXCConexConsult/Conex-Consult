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
