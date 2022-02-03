class Storage {
    constructor() {
        this.state;
        this.defaultValue = 'Vila Velha';
    }

    getLocation() {
        if(localStorage.getItem('state') === null) {
            this.state = this.defaultValue;
        } else {
            this.state = localStorage.getItem('state');
        }

        return this.state;
     }

    setLocation(state) {
        localStorage.setItem('state', state);
    }
}