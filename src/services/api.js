import axios from 'axios'

const api = axios.create({
  baseURL: 'https://hacka-rocket-zenvia.herokuapp.com/'
})

export default api
