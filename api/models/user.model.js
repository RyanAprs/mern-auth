import mongoose from "mongoose";

const userSchema = new Schema({
    username: {
        typeof: 'string',
        required: true,
        unique: true
    },
    email: {
        typeof: 'string',
        required: true,
        unique: true
    },
    password: {
        typeof: 'string',
        required: true,
    }
}, 
    {timestamp: true}
);

const User = mongoose.model('User', userSchema);

export default User;