import mongoose from 'mongoose'

const goalSchema = new mongoose.Schema(
    {
        goalTitle: {
            type: String,
            required: true,
            trim: true,
        },
        targetValue: {
            type: String,
            required: true,
            trim: true,
        },
        currentValue: {
            type: String,
            required: true,
            trim: true,
        },
        deadline: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
)

const Goal = mongoose.model('Goal', goalSchema)

export default Goal
