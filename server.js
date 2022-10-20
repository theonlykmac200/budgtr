const express = require("express")
const budget = require("./models/budget.js")
const app = express()

app.use(express.static("public"))
app.use(express.json())
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

app.post("/budget/", (req, res) => {
    budget.push(req.body)
    res.redirect("/budget")
    console.log(req.body)
})



app.listen(3000, () => {
    console.log("we rich!")
})