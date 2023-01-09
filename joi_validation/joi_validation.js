const express = reqire("express");
const Joi = reqire("joi");
const app = express();

app.use(express.json());

const signupSchema = Joi.object({
    
})

app.post("/sighup", (req, res) => {
    res.send("Successfully signet up!")
})

app.listen(4000, () => {
    console.log("Server started on port 4000");
})



