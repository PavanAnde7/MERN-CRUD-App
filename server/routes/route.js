import express from 'express';
import { addUser,getUsers,getUser,editUser,deleteUser } from '../controller/user.js';

const router = express.Router();

router.post('/add', addUser);
router.get('/all', getUsers);
router.get('/:email', getUser);
router.put('/:email', editUser);
router.delete('/:email', deleteUser);



export default router;