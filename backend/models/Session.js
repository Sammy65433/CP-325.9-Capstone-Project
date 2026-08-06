import mongoose from 'mongoose'

const sessionSchema = new mongoose.Schema(
    {
        sport: {
            type: String,
            required: true,
            trim: true,
        },
        drill: {
            type: String,
            required: true,
            trim: true,
        },
        duration: {
            type: String,
            required: true,
            trim: true,
        },
        date: {
            type: String,
            required: true,
        },
        notes: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
)

const Session = mongoose.model('Session', sessionSchema)

export default Session
