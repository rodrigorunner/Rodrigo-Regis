class UI {
    constructor() {
        this.location = document.getElementById('location');
        this.temp = document.getElementById('temp');
        this.img = document.getElementById('img');
        this.desc = document.getElementById('description');
        this.feelsLike = document.getElementById('feels-like');
        this.tempMax = document.getElementById('temp-max');
        this.tempMin = document.getElementById('temp-min');
    }

    paint(res) {
        this.location.textContent = res.name;
        this.temp.textContent = res.main.temp.toFixed(0) + 'ºC';
        this.feelsLike.textContent = 'Sensação Térmica: ' + res.main.feels_like.toFixed(0) + 'ºC';
        this.tempMax.textContent ='Máxima: ' + res.main.temp_max.toFixed(0) + 'ºC';
        this.tempMin.textContent = 'Mínima: ' + res.main.temp_min.toFixed(0) + 'ºC';

        res.weather.forEach(res => {
            this.desc.textContent = res.description.charAt(0).toUpperCase() + res.description.slice(1);
            this.img.setAttribute('src', `http://openweathermap.org/img/wn/${res.icon}.png`)
        })
    }
}