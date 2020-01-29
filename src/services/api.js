import axios from 'axios'

const api = axios.create(
    {
        baseURL:'https://backenddevradarapp.herokuapp.com:9388'
    }
)

export default api