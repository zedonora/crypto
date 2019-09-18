import dotenv from "dotenv";
//import "./db";
import app from "./app";
dotenv.config();
const PORT = process.env.PORT || 9000;
const handleListening = () => {
    console.log(`✅  Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);