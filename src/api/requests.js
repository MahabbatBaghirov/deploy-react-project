import { BASE_URL } from "./base_url";
import axios from "axios";


export const getAllEmployee = async()=> {
    let globalData;
    await axios.get(`${BASE_URL}/users`)
    .then(res => {
        globalData = res.data;
    })
    return globalData;
}

export const getEmployeeById = async(id)=> {
    let globalData;
    await axios.get(`${BASE_URL}/users/${id}`)
    .then(res => {
        globalData = res.data;
    })
    return globalData;
}

export const postEmployee =(payload)=> {
    axios.post(`${BASE_URL}/users/`,payload);
}


export const putEmployee =(id,payload)=> {
    axios.put(`${BASE_URL}/users/${id}`,payload);
}

export const deleteEmployeeById =(id)=> {
    axios.delete(`${BASE_URL}/users/${id}`);
}