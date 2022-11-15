let destino=document.querySelector(".rectangulo0")
let dat=document.querySelector(".rectangulofoto2")
let dat0=document.querySelector(".rectangulofoto1")
let dat1=document.querySelector(".rectangulofoto0")
const dato=(e)=>{
   e.dataTransfer.setData("Text", "./imagenes/Rompe3.png")
   console.log("anda")
}

dat.addEventListener("dragend",()=>{
dat.style.visibility="hidden"})

   
   


const prevenir=(e)=>{
   e.preventDefault();
}

   const soltar=(e)=>{
     let imagenSuelta= e.dataTransfer.getData("Text");
     destino.innerHTML=`<img src="${imagenSuelta}" " height="400px" width="275px"/>`
     e.dataTransfer.clearData("Text")
     
     
   }
   
      
      
  
/////////////////////////////////////////////////////////////////////////////
   let destino0=document.querySelector(".rectangulo1")

  dat0.addEventListener("dragend",()=>{
  dat0.style.visibility="hidden"})
   
const prevenir0=(e)=>{
      e.preventDefault();
   }
   
      const soltar0=(e)=>{
        let imagenSuelta0= e.dataTransfer.getData("Text");
        destino0.innerHTML=`<img src="${imagenSuelta0}" " height="400px" width="275px"/>`
        e.dataTransfer.clearData("Text")
      }
   
   //////////////////////////////////////////////////////////////////////
      let destino1=document.querySelector(".rectangulo2")
  
      dat1.addEventListener("dragend",()=>{
         dat1.style.visibility="hidden"})

   const prevenir1=(e)=>{
      e.preventDefault();
   }
   
      const soltar1=(e)=>{
        let imagenSuelta1= e.dataTransfer.getData("Text");
        destino1.innerHTML=`<img src="${imagenSuelta1}" " height="400px" width="275px"/>`
        e.dataTransfer.clearData("Text")
      }
      
      function reinicio() { 
      window.location.reload()}