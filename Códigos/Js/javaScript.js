/*
let fundo = document.querySelector("#img_fundo")
let divFundo = document.querySelector("#fundo")
let mais = 20
let menos = 20
window.addEventListener('resize',(e)=>{
    let width = divFundo.offsetWidth
    let divFundoMargin = divFundo.style.marginTop.match(/\d+/ig)
    mais++
    menos--
    if(divFundoMargin != null){
        divFundoMargin = parseInt(divFundoMargin[0])
    }else{
    }
    console.log(width)
    console.log(divFundoMargin)
    if (width >= 524 & divFundo <= 190) {
        divFundo.style.marginTop = menos+"px"
    } else if (width <= 523) {
        divFundo.style.marginTop = mais+"px"
    }
})
*/
