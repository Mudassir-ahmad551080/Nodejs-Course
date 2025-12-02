import express from 'express'

const app = express();

const checkAgeRoute = (req, res, next) => {
    if (!req.query.age || req.query.age < 18) {
        res.send("You are not allowed to access this page")
    }
    else {
        next()
    }
}

app.get('/', (req, res) => {
    res.send("Home Page")
});

app.get("/admin", checkAgeRoute, (req, res) => res.send("admin page"))

app.get('/login', (req, res) => {
    res.send("Login page")
});

app.listen(3000);

