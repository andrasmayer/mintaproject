
console.log( 0/0)

    //const valtozo = document.getElementById("gomb");
    const gomb = document.querySelector("#gomb")
    const kimenet = document.querySelector(".kimenet")
 
    const operator = document.querySelector("#operator")
    const a = document.querySelector("#a")
    const b = document.querySelector("#b")

    gomb.addEventListener("click",()=>{
        kimenet.textContent = eval( parseInt(a.value) + operator.value + parseInt(b.value) )
        
    })



    
   // console.log( gomb )
    //console.log( kimenet )
