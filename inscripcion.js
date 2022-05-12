  window.onload=function(){
    const botonRegistrar = document.getElementById("registrar")
    const botonIniciar=document.getElementById("iniciar")
    const botonRecordar=document.getElementById("recordar")
    const formularioReg=document.getElementById("formularioReg")
    const formularioIng=document.getElementById("formularioIng")
    const textoInf=document.getElementById("textoInf")
    const formularioRees=document.getElementById("formularioReestablecer")
    

    botonIniciar.addEventListener("click",()=>{
      if(formularioIng.classList.contains("d-none")){
        formularioIng.classList.remove("d-none")
        formularioReg.classList.add("d-none")
        formularioRees.classList.add("d-none")
        textoInf.classList.remove("d-none")
        botonIniciar.style.backgroundColor="#0d6efd"
        botonRegistrar.style.backgroundColor="grey"
        botonRecordar.style.backgroundColor="grey"
      }
    })
    botonRegistrar.addEventListener("click",()=>{
      if(formularioReg.classList.contains("d-none")){
        formularioReg.classList.remove("d-none")
        formularioIng.classList.add("d-none")
        formularioRees.classList.add("d-none")
        textoInf.classList.add("d-none")
        botonIniciar.style.backgroundColor="grey"
        botonRegistrar.style.backgroundColor="#0d6efd"
      }
    })
    botonRecordar.addEventListener("click",()=>{
      if(formularioRees.classList.contains("d-none")){
        formularioRees.classList.remove("d-none")
        formularioIng.classList.add("d-none")
        formularioReg.classList.add("d-none")
        textoInf.classList.add("d-none")
        botonIniciar.style.backgroundColor="grey"
        botonRegistrar.style.backgroundColor="grey"
        botonRecordar.style.backgroundColor="#0d6efd"
      }
    })



  }
