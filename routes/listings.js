const Listing = require("../models/Listing");

const router = require("express").Router();

router.get("/", async (req, res) => {
	try {
		const listings = await Listing.find();
		res.json(listings);
	} catch (err) {
		res.status(400).send(err.message);
		console.log(err);
	}
});

router.post("/", async (req, res) => {
	try {
		const listing = await new Listing(req.body);

		await listing.save();
		res.send(listing);
	} catch (err) {
		console.log(err.message);
	}
});

module.exports = router;
