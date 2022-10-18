const express = require("express")
const budget = require("./models/budget.js")
const app = express()

app.use(express.urlencoded({extended:false}))


app.get("/budget", (req, res) => {
    res.render("index.ejs", {
        allBudget:budget
    })
})

app.get("/budget/new", (req, res) => {
    res.render("new.ejs")
})

app.get("/budget/:index", (req, res) => {
    res.render("show.ejs", {
        allBudget: budget[req.params.index]
    })
})

app.post("/budget/post", (req, res) => {
    res.send("this is the post route")
})



app.listen(3000, () => {
    console.log("we rich!")
})