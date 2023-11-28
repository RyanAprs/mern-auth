import User from "../models/user.model.js";
import mongoose from 'mongoose';


export const getAll = async (req, res) => {
    const user = await User.find();

    if(!user) return res.status(404).json({ message: 'There is no user' });

    res.status(200).json(user);
};

export const getById = async (req, res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: "No such user"})
    }

    const user = await User.findById(id);

    if(!user) return res.status(404).json({message: "User not found"});

    res.status(200).json({user});

}

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: "No such user"})
    }

    const user = await User.findByIdAndDelete(id);

    if(!user) return res.status(404).json({ message: "user not found" });

    res.status(200).json({ message: "deleted user successfully" })

}