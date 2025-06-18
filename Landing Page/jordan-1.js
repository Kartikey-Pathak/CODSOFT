let btn=document.querySelector("#product-btn");
let toggle=document.querySelector("#product");
let close=document.querySelector("#close-btn");

let is=false;
let isclose=true;
btn.addEventListener("click",()=>{
    if(!is){
      toggle.classList.remove('hidden');
       is=true;
       isclose=false;
    }else{
        is=false;
        isclose=true;
    }

})
close.addEventListener("click",()=>{
    if(!isclose){
    toggle.classList.add('hidden');
   }
})