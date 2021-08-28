const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
	title: { type: String, required: true, min: 3 },
	price: { type: Number, required: true },
	images: { type: Array, required: true },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
