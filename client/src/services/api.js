import axios from 'axios';

const URL = 'http://localhost:8000';

export const addUser = async (data)=>{
    try{
        return await axios.post(`${URL}/add`,data);
    } catch(error){
        console.log(`Error while adding user : ${error}`);
    }
}

export const getUsers = async()=>{
    try {
        return await axios.get(`${URL}/all`)
    } catch (error) {
        console.log(`Error while calling getUser API ${error}`);
    }
    
}

export const getUser = async(email)=>{
    try {
        return await axios.get(`${URL}/${email}`)
    } catch (error) {
        console.log(`Error while calling getUser API ${error}`);
    }
    
}

export const editUser = async(user,email)=>{
    try {
        return await axios.put(`${URL}/${email}`,user)
    } catch (error) {
        console.log(`Error while calling editUser API ${error}`);
    }
    
}

export const deleteUser = async(email)=>{
    try {
        return await axios.delete(`${URL}/${email}`)
    } catch (error) {
        console.log(`Error while calling deleteUser API ${error}`);
    }
    
}