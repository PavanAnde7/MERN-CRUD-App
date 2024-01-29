import { useState,useEffect } from "react";
import { FormGroup,FormControl,InputLabel,Input,Typography, styled,Button } from "@mui/material";

import { editUser, getUser } from '../services/api';
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto 0 auto;
    & > div {
        margin: 10px;
    }
`;

const defaultValues = {
    name:"",
    username:"",
    email:"",
    phone:"",
}


const EditUser = ()=>{

    const [user, setUser] = useState(defaultValues);
    const navigate = useNavigate();
    const {email} = useParams();

    const onValueChange = (e)=>{
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user);
    }

    const editUserDetails = async ()=>{
        await editUser(user, email);
        navigate('/all');
    }

    useEffect(()=>{
        loadUserDetails();
    },[])
    
    const loadUserDetails = async()=>{
        const response = await getUser(email);
        setUser(response.data[0]);
        // console.log(response.data[0]);
        // console.log(user);
        
    }

    return (
        <Container>
            <Typography variant="h4">Edit User</Typography>

            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username" value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone" value={user.phone}/>
            </FormControl>

            <FormControl>
                <Button variant="contained" onClick={()=>editUserDetails()}>EDIT USER</Button>
            </FormControl>

        </Container>
    )
}

export default EditUser;