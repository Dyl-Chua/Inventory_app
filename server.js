const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
//const morgan = require("morgan");
const path = require("path");

//requests
app.use(bodyParser.urlencoded({extended:true}));
//app.use(morgan('tiny'));

const PORT = process.env.PORT || 8080
mongoose.connect('mongodb+srv://goRush:gsb2332065@cluster0.rikek.mongodb.net/inventory?retryWrites=true&w=majority', {useNewUrlParser: true}, {useUnifiedTopology: true})

const productSchema = {
    Name: String,
    Date: Date,
    Product: String
}

const Product = mongoose.model("Product", productSchema);

//View Engine
app.set('view engine', 'ejs');

//Require Route
app.use('/', require('./crud_app/server/routes/router'))

//Load Assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/img', express.static(path.resolve(__dirname,"assets/img")))
app.use('/js', express.static(path.resolve(__dirname,"assets/js")))

app.post("/", function(req, res)    {
    let newProduct = new Product ({
        Name: req.body.Name,
        Date: req.body.Date,
        Product: req.body.Product
    });
    newProduct.save();
    res.redirect('/');
})




app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});