const express=require('express');
const mongoose=require('mongoose');
const app=express()
mongoose.connect('mongodb://localhost:27017/Wathare')
const wathareSchema=mongoose.Schema({
    ts:Date,
    machine_status:Number,
    vibration: Number
})
const wathareModel=mongoose.model("wathare",wathareSchema)




// console.log(sample)

// router.get('/fetchallnotes', fetchuser, async (req, res) => {
//     try {
//         const note = await Note.find({ user: req.user.id })
//         res.json(note);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server Error")
//     }
// })

app.get("/get",async (req,res)=>{
     try {
        const data = await wathareModel.find({})
        res.json("data")
     } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
     }
})

app.listen(3001,()=>{
    console.log("Server is Running")
})