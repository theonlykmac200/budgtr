const express = require("express")
const budget = require("./models/budget.js")
const app = express()

app.use(express.urlencoded({extended:false}))


app.get("/budgets", (req, res) => {
    res.send("Hello World")
})

app.get("/budgets/:index", (req, res) => {
    res.send("this is the index page")
})

app.get("/budgets/new", (req, res) => {
    res.send("this is the new route")
})

app.post("/budgets/post", (req, res) => {
    res.send("this is the post route")
})



app.listen(3000, () => {
    console.log("we rich!")
})