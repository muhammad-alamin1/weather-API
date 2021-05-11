
// const KEY = '863b128ee21a372efcad34f968f64599';


const btn = document.getElementById('submit-button');
btn.addEventListener('click', () => {
    const address = document.getElementById('location').value;
    // console.log(address);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${address}&appid=863b128ee21a372efcad34f968f64599`)
        .then((response) => response.json())
        .then(data => {
            // console.log(data);
            document.getElementById('address-name').innerText = data.name;
            document.getElementById('temp').innerText = data.main.temp;
            document.getElementById('lat').innerText = data.coord.lat;
            document.getElementById('lon').innerText = data.coord.lon;
            document.getElementById('temp_max').innerText = data.main.temp_max;
            document.getElementById('temp-min').innerText = data.main.temp_min;
            document.getElementById('feel-like').innerText = data.main.feels_like;
            document.getElementById('pressure').innerText = data.main.pressure;
            document.getElementById('humidity').innerText = data.main.humidity;
            document.getElementById('sunrise').innerText = data.sys.sunrise;
            document.getElementById('sunset').innerText = data.sys.sunset;
            document.getElementById('timezone').innerText = data.timezone;
            document.getElementById('clouds').innerText = data.weather[0].main;
        })
})
