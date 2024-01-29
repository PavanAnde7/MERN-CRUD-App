import { Table,TableHead,TableRow,TableCell,TableBody,styled,Button } from "@mui/material";
import { getUsers, deleteUser } from "../services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const StyledTable = styled(Table)`
    width:90%;
    margin: 50px auto 0 auto;
`;
const TRow = styled(TableRow)`
    background:#000000;
    & > th{
        color:#fff;
        font-size:20px;
    }
    & > td{
        font-size:20px;
    }
`;
const TBody = styled(TableRow)`
    
    & > td{
        font-size:20px;
    }
`;

const AllUser = ()=>{

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getAllUsers();
    },[])

    const getAllUsers = async()=>{
        let response = await getUsers();
        setUsers(response.data);
        // console.log(response.data);
    }

    const deleteUserDetails = async(email) =>{
        await deleteUser(email);
        getAllUsers();
    }

    return(
        <StyledTable>
            <TableHead>
                <TRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TBody key={user._id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/edit/${user.email}`}>Edit</Button>
                                <Button variant="contained" color="error" onClick={()=> deleteUserDetails(user.email)}>Delete</Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUser;