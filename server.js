require("dotenv").config();
const listingsRoutes = require("./routes/listings");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use("/listings", listingsRoutes);

mongoose
	.connect(process.env.DB_URI)
	.then(() => {
		console.log("Connected to database");
	})
	.catch(err => console.log("Unable to connect to database"));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
