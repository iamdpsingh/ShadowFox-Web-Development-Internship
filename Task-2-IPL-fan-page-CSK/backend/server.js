const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const playerRoutes = require("./routes/players");
const newsRoutes = require("./routes/news");

app.use("/api/players", playerRoutes);
app.use("/api/news", newsRoutes);

app.get("/", (req, res) => {
    res.send("CSK Fan Page Backend Running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
