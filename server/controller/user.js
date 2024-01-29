import User from '../models/user.models.js'

export const addUser = async(req,resp) =>{
    const user = req.body;

    const newUser = new User(user);

    try {
        await newUser.save();
        resp.status(201).json(newUser)
    } catch (error) {
        resp.status(409).json({message: error.message})
    }
    console.log(user);
}

export const getUsers = async(req,resp) =>{
    try {
        const users= await User.find({});
        resp.status(200).json(users)
    } catch (error) {
        resp.status(404).json({message: error.message})
    }
}

export const getUser = async(req,resp) =>{
    
    try {
        const users= await User.find({email: req.params.email});
        resp.status(200).json(users)
    } catch (error) {
        resp.status(404).json({message: error.message})
    }
}

export const editUser = async(req,resp) =>{
    
    let user = req.body;
    const editUser= new User(user);

    try {
        await User.updateOne({email: req.params.email},editUser);
        resp.status(201).json(editUser);
    } catch (error) {
        resp.status(409).json({message: error.message})
    }
}

export const deleteUser = async(req,resp) =>{
    
    try {
        await User.deleteOne({email: req.params.email});
        resp.status(200).json({message:`Deleted successfully`});
    } catch (error) {
        resp.status(409).json({message: error.message})
    }
}