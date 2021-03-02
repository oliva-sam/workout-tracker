const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            weight: {
                type: Number,
                required: false
            },
            reps: {
                type: Number,
                required: false
            },
            sets: {
                type: Number,
                required: false
            },
            distance: {
                type: Number,
                required: false
            }
        }
    ]
},
    {
        toJSON:{
            virtuals:true
        }
    }



    
);

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((durationLength, exercise) => {
        return durationLength + exercise.duration
    },0)
});

const WorkoutUser = mongoose.model("WorkoutUser", workoutSchema);

module.exports = WorkoutUser;