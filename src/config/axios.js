import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
        post:{
            "Access-Control-Allow-Origin": "*",
            "Content-Type": 'application/json'
        }
    },
});

export default clienteAxios;