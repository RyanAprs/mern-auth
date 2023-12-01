import User from "../models/user.model.js";
import mongoose from 'mongoose';
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcryptjs";


export const getAll = async (req, res) => {
    const user = await User.find();

    if(!user) return res.status(404).json({ message: 'There is no user' });

    res.status(200).json(user);
};

export const updateUser = async (req, res, next) => {
    if(req.user.id !== req.params.id) {
        return next(errorHandler(401, "You can update only your account!"));
    };

    try {
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
        };

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    profilePicture: req.body.profilePicture
                }
            },
            { new: true}
        );
        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
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

export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, 'You can delete only your account'));
    }
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted!')
    } catch (error) {
        next(error);
    }

}