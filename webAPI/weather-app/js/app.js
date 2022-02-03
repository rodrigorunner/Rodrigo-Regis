const storage = new Storage();

const weatherLocation = storage.getLocation();

const weather = new Weather(weatherLocation);

const ui = new UI();


document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
    .then(res => {
        ui.paint(res);
    })
    .catch(err => console.log('Something went wrong ' + err));
}

document.getElementById('btn-enviar').addEventListener('click', () => {
    
    const state = document.getElementById('input-location').value;

    weather.changeLocation(state);

    storage.setLocation(state);

    getWeather();

    $('#modal').modal('hide');
});