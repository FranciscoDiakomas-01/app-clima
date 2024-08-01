
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
            let apiKy = "f0182b330bef6aee363a3ff348cc718c"
            let cidade = input.value
            let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cidade)}&lang=pt&appid=${apiKy}`)
            let res = await data.json()
            if(res.cod == 200){
                let velociadeVento = res.wind.speed
                let titulo = res.weather[0].description
                let nomeCidade = res.name
                let humidity = res.main.humidity
                let pais = res.sys.country
                let main = res.weather[0].main
                console.log(res)
                let celcius = Math.ceil(Number(res.main.temp) - 273.15)
                let temp = document.getElementById("temp").textContent = celcius + " º C"
                let Hhumidity = document.getElementById("humidity").textContent = humidity + "%"
                let nomeCidadeHTML = document.getElementById("nomeCidade").textContent = `${nomeCidade} ,${pais}`
                let description = document.getElementById("temp_desc").textContent = titulo
                let VelocidadeVentoHTM = document.getElementById("VelocidadeVento").textContent = `${velociadeVento}Km/h`
                climaDesc.style.display = "flex"
                //escolhendo a imagem
                switch(main){
                    case "Rain":
                        img.src = "./img/icons8-rain-cloud-48.png"
                        break;
                    case "Clouds":
                        img.src = "./img/icons8-cloud-48.png"
                        break;
                    case "Clear":
                        img.src = "./img/icons8-clouds-48.png"
                        break;
                    case "Atmosphere":
                        img.src = "./img/icons8-sun-48.png"
                        break;
                    case "Drizzle":
                        img.src = "./img/icons8-rainfall-48.png"
                        break;
                    case "Thunderstorm":
                        img.src = "./img/icons8-cloud-lightning-48.png"
                        break;
                    case "Snow":
                        img.src = "./img/icons8-snow-storm-48.png"
                        break;
                    default:
                        break;
                }
                

            }else{
                img.src = "./img/web.png"
                h1.textContent = "Ups! Cidade não Encotrada"
                h2.textContent = ""
                climaDesc.style.display = "none"
                
            }
            

            


        }catch(err){
            img.src = "./img/web.png"
            h1.textContent = "Ups! ocoreu um erro!"
            h2.textContent = ""
            climaDesc.style.display = "none"
            let description = document.getElementById("temp_desc").textContent = "Error"
        }
        main.classList.add("surgir")
        p.classList.add("desaparecer")
    }
    input.value = ""
})

