

import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        // Stores the user's display name
        username: {
            type: String,
            required: true,
            trim: true,
        },

        // Stores the user's email
        // unique: true helps prevent duplicate accounts
        // lowercase: true keeps email formatting consistent
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        // Stores the hashed password, not the plain password
        password: {
            type: String,
            required: true,
        },
},
{   
    // Automatically adds createdAt and updatedAt fields
    timestamps:true
}
)

// The User model from the schema
const User = mongoose.model('User', userSchema)

export default User