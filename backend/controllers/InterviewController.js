const Interview = require("../models/InterviewModel")

const createinterview = async (req,res) =>{
    try{
        const userId = req.user.id;

        const newInterview = new Interview({
            user: userId,
            qaPairs: [],
            faceData:{
                faceDetectedDuration: 0,
                distractionAlerts: 0,
                engagementPercentage: 100
            }
        });
        await newInterview.save();
        res.status(201).json({ message: "Interview created successfully", interview: newInterview });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to create interview", error: error.message });
    }
}

module.exports = { createinterview };