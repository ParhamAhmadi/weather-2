import {Model} from 'backbone'

export default class Weather extends Model {
    urlRoot() {
        return '/api/weather'; 
    }
    
    defaults() {
        return {
            city: '',
            humanizedTemperature: ''
        }
    }
}