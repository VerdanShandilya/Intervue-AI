const mongoose = require('mongoose');

// Subdocument schema: one Q&A with feedback
const qaSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    feedback: {
        vocabulary: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        },
        clarity: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        },
        confidence: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        },
        contentQuality: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        }
    }
}, { _id: false });

// Main interview schema
const interviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    qaPairs: {
        type: [qaSchema],
        default: []
    },

    faceData: {
        faceDetectedDuration: {
            type: Number,
            default: 0 // in seconds
        },
        distractionAlerts: {
            type: Number,
            default: 0
        },
        engagementPercentage: {
            type: Number,
            default: 100
        }
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Interview', interviewSchema);
