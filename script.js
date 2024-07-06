let update = document.querySelector("#date");
let cityName=document.querySelector("#cityName")
let searchBtn=document.querySelector("#search button")

searchBtn.addEventListener ('click', () =>{
    let roughName=cityName.value;

    function capitalize(str){
        return str.replace(/\b\w/g, function (char) {
            return char.toUpperCase();
        })
    }

    const City=capitalize(rougnName);
    const url=
    `https://yahoo-weather5.p.rapidapi.com/weather?location=${City}&format=json&u=f`;

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "4bdb3bac01msh32821b80254d71ap1332aejsn68d2abd9aa9",
            "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
        },
    };
    console.log(url);

    const weather=async () => {
        let temprature=document.querySelector("#temp");
        let city=document.querySelector("#location h3");
        let humidity=document.querySelector("#humidity");
        let wind=document.querySelector("#wind");
        let direction=document.querySelector("#direction");
        let pressure=document.querySelector("#pressure");

        try {
            const response= await fetch(url, options);
            const result= await response.json();

            temprature.innerHTML=
            Math.floor(result.current_observation.condition.temprature)+ `&deg; F`
            city.innerHTML= result.current_observation.location.city;
            direction.innerHTML=result.current_observation.wind.direction
            wind.innerHTML=result.current_observation.wind.speed + `kpH`
            humidity.innerHTML=result.current_observation.atmosphere.humidity + `%`
            pressure.innerHTML=result.current_observation.atmosphere.pressure;
        } catch (error) {
            console.log("Something Went Wrong")
        }
    };
});

setInterval(() =>{
    let date=new Date();
    let currentDate= date.toDateString();
    let currentTime= date.toLocaleTimeString();

    update.innerHTML=`${currentTime} - ${currentDate}`;
}, 1000)