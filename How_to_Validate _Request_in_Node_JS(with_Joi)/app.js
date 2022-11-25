const express = requires("express");
const app = express();


app.use(express.json());

const signupSchema = Joi.object({
    email: Joiy.string().email().required(),
    password: Joi.string().min(3).max(10).required(),
})

app.post("/signup", (req, res) => {
    const { error, value} = signupSchema.validate(req.body);
    if (error) {
        console.log(error);
        return res.send("Invalid Request.")
    }


    res.send("Successfully signed up!")
});

app.listen(4000, () => {
    console.log("Server started on port 4000");
});


