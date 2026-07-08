import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
// import authRoutes from "./routes/auth.route.js";
import router from "./routes/auth.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use("/",router)


app.get("/", (req, res) => {
  res.send("Auth Service is running");
});




app.listen(PORT, () => {
  console.log(`Auth Service is running on port ${PORT}`);
  connectDb();
});