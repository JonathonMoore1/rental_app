var express = require("express");
var rentals = require ("../models/rentals_no_seq.js");
var router = express.Router();

router.get("/", function(req, res) {
	rentals.selectAll(function(data) {
		res.render("home");
	});		
});

router.get("/renter", function(req, res) {
	rentals.selectAll(function(data) {
		res.render("usersearch");
	});		
});

router.get("/api/rental/", function(req,res) {
	rentals.selectAll(function(data) {
		res.json(data);
	});
});

router.get("/owner", function(req,res) {
	var condition = "owner = " + req.params.name;
	console.log("condition", condition);
	rentals.selectAll(function(data) {
		var hbsObject = {
			rentals:data
		};
		console.log(hbsObject);
		res.render("owner");
	});
});

router.post("api/rentals", function(req, res) {
	rental.insertOne([
		"item", "rate", "owner", "location", "category", "imgURL", "description"
		],[
		req.body.item, req.body.rate, req.body.owner, req.body.location, 
		req.body.category, req.body.imgURL, req.body.description
		], function(result) {
			res.json({id: result.insertId});
		}
	);
});

router.put("/api/rentals/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	console.log("condition", condition);
	rentals.update({
		item: req.body.item,
		rate: req.body.rate, 
		location: req.body.location, 
		category: req.body.category, 
		imgURL: req.body.imgURL, 
		description: req.body.description
	}, condition, function(result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

router.delete("/api/rentals/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	rentals.delete(condition, function(result) {
		if (result.affectedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;