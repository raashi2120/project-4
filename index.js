import express from 'express';

const app = express();

import data from "./data.json" with { type: "json" };

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {

    res.render('home', { ...data });
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})