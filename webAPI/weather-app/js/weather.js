class Weather {
    constructor(state) {
        this.apiKey = '';
        this.state = state;
    }

    async getWeather() {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state}&appid=${this.apiKey}&lang=pt_BR&units=metric`);

        const resData = res.json();

        return resData;
    }

    changeLocation(state) {
        this.state = state;
    }
}
