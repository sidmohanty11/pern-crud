import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from '../api/axios';

function Update() {
    const { id } = useParams();
    const history = useHistory();
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");

    useEffect(() => {
        const fetchRestaurant = async () => {
            const res = await axios.get(`/${id}`);
            setName(res.data.data.restaurant.name);
            setLocation(res.data.data.restaurant.location);
            setPriceRange(res.data.data.restaurant.price_range);
        }
        fetchRestaurant();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedRestaurant = await axios.put(`/${id}`, {
            name, location, price_range:priceRange
        });
        history.push('/');
    }
    
    return (
        <div className="">
            <h1 className="text-center">Update Restaurant</h1>
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" id="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input value={location} onChange={e => setLocation(e.target.value)} type="text" id="location" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="price_range">Price Range</label>
                    <input value={priceRange} onChange={e => setPriceRange(e.target.value)} type="number" id="price_range" className="form-control" />
                </div>
                <button onClick={handleSubmit} className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Update;
