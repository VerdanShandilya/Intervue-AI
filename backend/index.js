const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();


const app =express();
app.use(express.json());
app.use(cors(
    {
        origin: '*'
    }
));

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((error) =>{
    console.log("Error connecting to MongoDB",error);
})

app.get('/',(req,res) =>{
    res.send('Server is running!');
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})