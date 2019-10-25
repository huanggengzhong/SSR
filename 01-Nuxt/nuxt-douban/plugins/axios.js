import axios from 'axios';

let options={
    baseURL:'http://localhost:3301',
    timeout:5000
}
export default axios.create(options)