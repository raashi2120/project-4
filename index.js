import express from 'express';

const app = express();

import data from "./data.json" with { type: "json" };

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home", { ...data });
});


app.get("/cart", (req, res) => {
    res.render("cart", { data });
});

app.get("/product/:id", (req, res) => {
    const { id } = req.params;
    let found = null;

    for (let category in data) {
        found = data[category].find(item => item.id == id);
        if (found) break;
    }

    if (!found) {
        return res.status(404).send("Product not found");
    }

    res.render("productDetails", { product: found });
});

app.get("/:prod", (req, res) => {
    const { prod } = req.params;
    console.log("Category requested:", prod);

    if (!data[prod]) {
        console.log("Category not found in data.json keys:", Object.keys(data));
        return res.status(404).send("Category not found");
    }

    const product = data[prod];
    res.render("products", { product });
});


app.listen(3000, () => {
    console.log("listening on 3000");
})
