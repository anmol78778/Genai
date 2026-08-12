import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/agent.route.js";
dotenv.config();
const app = express();
app.use(express.json());
const port=process.env.PORT

app.use("/",router);

app.use((err, req, res, next) => {

  console.error(err);

  if (err.status) {

    return res
      .status(err.status)
      .json(err.data);

  }

  return res
    .status(500)
    .json({

      success: false,

      message: err.message || "Internal Server Error"

    });

});

const startServer = async () => {

  try {

    await connectDB();

    app.listen(port, () => {
      console.log(
        `Agent service running on ${port}`
      );
    });

  } catch (error) {

    console.error(
      "Failed to start Agent Service",
      error
    );

    process.exit(1);
  }
};

startServer();
