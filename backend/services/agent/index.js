import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import router from "./routes/agent.route.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );


app.use(express.json());



app.use("/",router)
app.get("/", (req, res) => {
  res.send("Agent Service is running");
});


app.listen(PORT, () => {
  console.log(`Agent Service is running on port ${PORT}`);
  connectDb();
});