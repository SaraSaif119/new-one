let nav=document.getElementById('nav')
let nav2=document.getElementById('nav2')
let navbar=document.getElementById('navbar')
nav.onclick=function(){
    nav.style.visibility='hidden'
    nav2.style.visibility='visible'
    navbar.style.visibility='visible'
}
nav2.onclick=function(){
    navbar.style.visibility='hidden'
    nav2.style.visibility='hidden'
    nav.style.visibility='visible'
}