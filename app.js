const  express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const signupRoute=require("./controller/signupRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://taniya:taniya123@cluster0.zld0daa.mongodb.net/resumeentryappDb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.use("/api/resume",signupRoute)

app.listen(3005,()=>{
    console.log("server running")
})