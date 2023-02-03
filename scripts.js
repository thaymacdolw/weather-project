// VARIÁVEIS => Um espaço da memória do PC que guardamos algo. Um número, um texto, uma imagem...
// Funçãõ => um trecho de código que só é executado quando é chamado.
//o JS tem um jeitinho de chamar o HTML, chama de "document".
//

let key = "7f8b5f8ed4299acf8d5183b280b99021"

function showOnScreen (data){
     console.log(data)

     document.querySelector(".city").innerHTML = "Weather in " + data.name
     document.querySelector(".weather").innerHTML = Math.floor(data.main.temp) + "°C"
     document.querySelector(".description").innerHTML = data.weather[0].description
     document.querySelector(".humidity").innerHTML = "Humidity " + (data.main.humidity) + "%"
     document.querySelector(".icon").src= "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
}

async function searchCity(city) {
    let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&lang=en" + "&units=metric").then( answer=> answer.json())

    
    showOnScreen(data)
}
function clickedTheButton(){
    let city = document.querySelector(".input-city").value

    searchCity(city) // chamando a fução
}


