import axios from 'axios'

const authFetch = axios.create({
    baseURL: 'https://course-api.com'
})

authFetch.interceptors.request.use((request) => {
    request.headers['Accept'] = 'application/json'
    console.log('send request')
    return request
}, (err) => {
    return Promise.reject(err)
})
authFetch.interceptors.response.use((response) => {
    console.log('got response')
    return response
}, (err) => {
    return Promise.reject(err)
})

export default authFetch
