const temp = document.getElementById('temp');
const minMaxTem = document.getElementById('tempmin_max');
console.log(temp);
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e177da4259msh448b5b9d8021babp1f20f3jsnc23ac6440758',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
 function getAPI(city){
    cityName.innerHTML=city.toUpperCase();
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    fetch(url, options)
    .then(response=>response.json())
    .then(data=>{
        temp.innerHTML=data.temp + "<sup>.</sup>C";
        console.log(data);
        minMaxTem.innerHTML ="Min : "+data.max_temp+"<sup>.</sup>C | Max : "+data.min_temp +"<sup>.</sup>C";
    })
    .catch(error=>{console.log("Error|"+error)});
}

SubBtn.addEventListener('click',()=>{
    getAPI(cityWeather.value);
})

getAPI('Mumbai');

// ======================== Date & Time ================================

const curdate = document.getElementById('date');
let weatherCon = document.getElementById('weathercon');
const tempStatus = "clouds";

const getCurDate = ()=>{
    var weekDay = new Array(7);
    weekDay[0]="Sunday";
    weekDay[1]="Monday";
    weekDay[2]="Tuesday";
    weekDay[3]="Wednesday";
    weekDay[4]="Thursday";
    weekDay[5]="Friday";
    weekDay[6]="Saturday";
    let currentTime = new Date();
    console.log();
    let D = weekDay[currentTime.getDay()];
    return D;
    
}
getCurDate();
const getCurTime = ()=>{
    var Months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    
    var now = new Date();
    var month = Months[now.getMonth()+1];
    var date = now.getDate();
    let hours = now.getHours();
    let mins = now.getMinutes();
    let periods = "AM";
    if(hours>11)
    {
        periods ="PM";
        if(hours>12)
        {
            hours -= 12;

        }

    }
    if(mins<10)
    {
        mins = "0"+mins;
    }
    return `${month} ${date} | ${hours} : ${mins} ${periods}`
    
}
curdate.innerHTML = getCurDate() + " | " + getCurTime();




