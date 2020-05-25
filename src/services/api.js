import axios from 'axios';

//instanciando o elemento axios (??configurando??)
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;