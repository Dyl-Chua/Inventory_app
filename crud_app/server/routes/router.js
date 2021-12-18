const express = require('express');
const router = express.Router();


router.get("/additem", function(req, res) {
    res.render(__dirname + "./crud_app/views/additem");
})

router.get("/itemlist", function(req, res) {
    res.render(__dirname + "./crud_app/views/item_list");
})

router.get("/updateitem", function(req, res) {
    res.render(__dirname + "./crud_app/views/update_product");
})


module.exports = router;
