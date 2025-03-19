const inicio = document.getElementById('inicio')

const perguntas = document.getElementById('perguntas')

const espec = document.getElementById('espec')

const valores = document.getElementById('valores')

const contato = document.querySelector('.containercontatos')

const btnvoltar = document.querySelector('.btn-secundary')


function rol1() {
    window.scrollTo (0, 0)
 }



function rol2() {
    window.scrollTo (0, 100)
 }




function rol3() {
    window.scrollTo (0, 500)
 }




function rol4() {
    window.scrollTo (0, 850)
 }





 function rol5() {
    contato.style.backdropFilter = 'blur(20px)'
    btnvoltar.style.display = 'flex'
    contato.style.position = 'fixed'
    contato.style.margin = 'auto'
    contato.style.heigth = '100%'
    contato.style.width = '100%'
    
 }

 function voltar(){
   btnvoltar.style.display = 'none'
   location.reload()

 }