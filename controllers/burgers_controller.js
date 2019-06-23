
// Dependencies
const express = require("express");
const router = express.Router();
const db = require("../models");


// Create all routes and include Sequelize's ORM methods
router.get("/", function (req, res) {
    
    db.Burger.findAll({}).then(function(dbBurger) {
        let hbsObj = {
            burgers: dbBurger
        }
        res.render("index", hbsObj)
    });
});

router.post("/api/burgers", function (req, res) {
    
    db.Burger.create({
        burger_name: req.body.name,
        devour: req.body.devour
    }).then(function(dbBurger) {
        res.json({ dbBurger });
    }).catch(function(err) {
        res.json(err);
    });
});

router.put("/api/burgers/:id", function (req, res) {

    db.Burger.update({
        burger_name: req.body.name,
        devour: req.body.devour
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(dbBurger) {
        res.json(dbBurger);
    }).catch(function(err) {
        res.json(err);
    });
});

router.delete("/api/burgers/:id", function (req, res) {

    db.Burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbBurger) {
        res.json(dbBurger);
    });
});

// Export routes for server.js to use.
module.exports = router;