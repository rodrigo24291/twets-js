const text=document.getElementById('tweet');
const formu=document.getElementById('formulario');
const twet=document.getElementById('lista-tweets');


twet.addEventListener('click',borrar)
window.addEventListener('load',()=>{
let we;
we=loca();    
for(hos of we ){
    const li=document.createElement('li');
    const a=document.createElement('a');
    a.classList.add('borrar-tweet');
    a.innerText='X'
    li.innerText=hos
    li.appendChild(a);
    twet.appendChild(li);

}

})


formu.addEventListener('submit',(e)=>{
   let contenido;
    e.preventDefault();
    contenido=text.value;
    insertar(contenido)

})

function insertar(tweet){
    const li=document.createElement('li');
    const a=document.createElement('a');
    a.classList.add('borrar-tweet');
    a.innerText='X'
    
    li.innerText=tweet
    li.appendChild(a);
    twet.appendChild(li);
    const tio=loca();
    
    tio.push(tweet)
    localStorage.setItem('fe',JSON.stringify(tio))

}

function borrar(e){
    e.preventDefault()
if(e.target.className==='borrar-tweet'){
let letra
letra=e.target.parentElement.textContent;
console.log(letra.substr(0,letra.length-1))
    

//localStorage.removeItem()
}

}

function loca(){
    const ho=[];
    
    
if(localStorage.getItem('fe')){

hos=JSON.parse(localStorage.getItem('fe'))

return hos
}
else{
  return ho 
}

}



