require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const db = require('./db');
const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//get all restaurants
app.get('/api/v1/restaurants', async (req, res) => {
    try {
        //const result = await db.query("select * from restaurants");
        const result = await db.query("select * from restaurants left join(select restaurant_id, count(*), trunc(avg(rating), 1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;");
        res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                restaurants: result.rows,
            }
        });
    } catch (err) {
        res.status(500).json({
            status: "failed",
            err: err
        });
    }
});

// get a particular restaurant
app.get('/api/v1/restaurants/:id', async (req, res) => {
    const { id } = req.params;
    try {
        // don't use string interpolation => makes vulnerable to sql injection!
        const result = await db.query("select * from restaurants left join(select restaurant_id, count(*), trunc(avg(rating), 1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1", [id]);
        const reviews = await db.query("select * from reviews where restaurant_id = $1", [id]);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: result.rows[0],
                reviews: reviews.rows
            }
        });
    } catch (err) {
        res.status(500).json({
            status: "failed",
            err: err
        });
    }
});

//create a restaurant
app.post('/api/v1/restaurants', async (req, res) => {
    const { name, location, price_range } = req.body;
    try {
        const result = await db.query("insert into restaurants (name,location,price_range) values ($1,$2,$3) returning *", [name, location, price_range]);
        res.status(201).json({
            status: "success",
            data: {
                restaurant: result.rows[0],
            }
        });
    } catch (err) {
        res.status(500).json({
            status: "failed",
            err: err
        });
    }
});

//update a restaurant
app.put('/api/v1/restaurants/:id', async (req, res) => {
    const { id } = req.params;
    const { name, location, price_range } = req.body;
    try {
        const result = await db.query("update restaurants set name = $1, location = $2, price_range = $3 where id = $4 returning *", [name, location, price_range, id]);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: result.rows[0],
            }
        });
    } catch (err) {
        res.status(500).json({
            status: "failed",
            err: err
        });
    }
});

//delete a restaurant
app.delete('/api/v1/restaurants/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query("delete from restaurants where id = $1", [id]);
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        res.status(500).json({
            status: "failed",
            err: err
        });
    }
});

//add review
app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
    const { id } = req.params;
    const { name, review, rating } = req.body;
    try {
        const newReview = await db.query("insert into reviews (restaurant_id, name, review, rating) values ($1,$2,$3,$4) returning *", [id, name, review, rating]);
        res.status(201).json({
            status: "success",
            data: {
                review: newReview.rows[0]
            }
        });
    } catch (err) {
        console.log(`err`, err)
    }
})

//fire up an express server
app.listen(PORT, () => {
    console.log('listening at port:', PORT)
});