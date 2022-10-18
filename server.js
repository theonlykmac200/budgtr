const express = require("express")
const budget = require("./models/budget.js")
const app = express()

app.use(express.urlencoded({extended:false}))


app.get("/budgets", (req, res) => {
    res.render("index.ejs", {
        allBudget:budget
    })
})

app.get("/budgets/new", (req, res) => {
    res.render("new.ejs")
})

app.get("/budgets/:index", (req, res) => {
    res.render("show.ejs", {
        allBudget: budget[req.params.id]
    })
})

app.post("/budgets/post", (req, res) => {
    res.send("this is the post route")
})



app.listen(3000, () => {
    console.log("we rich!")
})