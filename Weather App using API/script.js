const url = 'https://weather-api99.p.rapidapi.com/weather?city=nagpur';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '62ab52a7a2mshdddbc4d0848f403p109920jsneeeac56f2b2a',
		'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
	}
};

const searchCity = document.getElementById('searchCity');
const srchBtn=document.getElementById('srchBtn');
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

const func =(name)=>{
fetch(`https://weather-api99.p.rapidapi.com/weather?city=${name}`, options)
.then(response => response.json())
.then(data => {
	console.log({data});
	document.getElementById('cityName').innerHTML=`<p class="text-center text-white" style="letter-spacing:1px">${name.toUpperCase()} WEATHER</p>`;
	document.getElementById('main').innerHTML=`<p class="text-center" style="letter-spacing:1px">WEATHER : ${data.weather[0].main.toUpperCase()}</p>`
	document.getElementById('humidity').innerHTML=`<p class="text-center" style="letter-spacing:1px">HUMIDITY : ${data.main.humidity}</p>`
	document.getElementById('max-temp').innerHTML=`<p class="text-center" style="letter-spacing:1px">MAX_TEMP : ${data.main.temp_max} °</p>`
	document.getElementById('min-temp').innerHTML=`<p class="text-center" style="letter-spacing:1px">MIN_TEMP : ${data.main.temp_min} °</p>`
}
)
.catch(error => console.log(error));

}


srchBtn.onclick=()=>{
	const name = searchCity.value;
	func(name);
	console.log(searchCity.value)
};
