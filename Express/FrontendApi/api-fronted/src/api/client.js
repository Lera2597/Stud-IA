import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:3000/api'
})

// para que el cliente intercepte el token
client.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        console.log('**** Hay token ****')
        config.headers.Authorization = `Bearer ${token}`
    }
    else
    {
        console.log('**** No hay token ****')
    }
    return config
})
export default client