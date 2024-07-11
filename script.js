
//pegando as variaveis do programa
let btn = document.querySelector("button")
let main = document.querySelector("main")
let img = document.querySelector("img")
let input = document.querySelector("input")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let  span = document.querySelectorAll("span")
let climaDesc = document.querySelector(".clima-desc")
let p = document.querySelector("p")

input.addEventListener("input",(e)=>{
    main.classList.remove("surgir")
    p.classList.remove("desaparecer")
})



btn.addEventListener("click",async(e)=>{
    e.preventDefault()

    if(!input.value){
        alert("Deve conter uma Cidade")
        return
    }else{
        try{

            let data = await fetch("")
            let res = await data.json()
            switch(res.temp){
                case "30" :
                    img.src = ""
                    break;
                default :
                    img.src = "./img/icons8-computers-connecting-48.png"    
            }
    
        }catch(err){
            console.log("Erro")
            img.src = "./img/icons8-computers-connecting-48.png"
            h1.textContent = "Ups! ocoreu um erro!"
            h2.textContent = ""
            climaDesc.style.display = "none"
        }
        main.classList.add("surgir")
        p.classList.add("desaparecer")
    }
    input.value = ""
})

