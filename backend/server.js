require ("dotenv").config();
const express=require("express");
const cors=require("cors");
const path=require("path");
const connectDB=require("./config/db");
const authRoutes = require("./routes/authRoutes");
const app=express();

//Middleware to handle Cors
app.use(
    cors({
        origin:"*",
        methos:["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type","Authorization"],
    })
);

connectDB()

//Middleware
app.use(express.json());

//Routes
app.use("/api/auth",authRoutes);
// app.use('/api/sessions',sessionRoutes);
// app.use('/api/questions',questionRoutes);
// app.use('/api/ai/generte-questions',Project, generateInterviewQuestions);
// app.use('/api/ai/generate-explanation',project,generateConceptExplanation);


//Serve uploads folder
app.use("/uploads",express.static(path.join(__dirname,"uploads"),{}));

//start server
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server running on port ${PORT}`));