import axios from 'axios'

const api = axios.create(
    {
        baseURL:'https://backenddevradarapp.herokuapp.com:3000'
    }
)

export default api