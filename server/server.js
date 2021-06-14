require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));
app.use(express.json());
//get all restaurants
app.get('/api/v1/restaurants', (req, res) => {
    res.status(200).json({
            status: "success",
        data: {
            restaurant: ["mcD", "wendys", "pizzahut", "kfc"],
        }
        })
});

// get a particular restaurant
app.get('/api/v1/restaurants/:id', (req, res) => {
    const { id } = req.params;
});

//create a restaurant
app.post('/api/v1/restaurants', (req, res) => {
    console.log(`req.body`, req.body)
});

//update a restaurant
app.put('/api/v1/restaurants/:id', (req, res) => {
    const { id } = req.params;
});

//delete a restaurant
app.delete('/api/v1/restaurants/:id', (req, res) => {
    const { id } = req.params;
});

//fire up an express server
app.listen(PORT, () => {
    console.log('listening at port:', PORT)
});