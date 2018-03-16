var express = requirew("express");
var rentals = require ("/models/renters.js");
var rounter = express.Router();

router.get("/", function(req, res) {
	renters.all(function(data) {
		coffee:data
		res.render("index");
	});
});

router.post("api/renters", function(req, res) {
	renters.create([
		"item", "rate", "owner", "location", "category", "imgURL", "description"], [
		req.body.item, req.body.rate, req.body.owner, req.body.location, req.body.category, req.body.imgURL, req.body.description
		], function(result) {
			res.json({id: result.insertId});
		}
	});
});

router.put("/api/renters/:id", function(req, res) {
	var condition = "id = " +req.params.id;
	console.log("condition", condition);
	renters.update({
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

router.delete("/api/renters/:id", function(req. res) {
	var condition = "id = " + req.params.id;
	renters.delete(condition, function(result) {
		if (result.affectedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;