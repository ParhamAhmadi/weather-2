import {Model} from 'backbone'
import _ from 'underscore'

export default class Weather extends Model {
    urlRoot() {
        return '/api/weather';
    }

    defaults() {
        return {
            city: '',
            tempindex: 0,
            daypart: 'day',
            weathercode: '800',
            temperatures: [{
                unit: '',
                value: 0
            }]
        }
    }

    fetch(opts) {
        let {city, region} = this.attributes;
        let options = opts || {};
        options.data = {city, region};
        super.fetch(options);
    }
    
    changeTemperature() {
        this.set({'tempindex': (this.get('tempindex') + 1) % this.get('temperatures').length})
    }
}