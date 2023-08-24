import express from "express";
import cors from "cors";
const app = express();
const port = 3333;
app.use(express.json());
app.use(cors());
app.listen(port, () => {
    console.log(`App is running on localhost:${port}`);
});
app.get("/", (request, response) => {
    response.send("Hello World");
});
