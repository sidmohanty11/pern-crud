import React, {useContext, useState} from 'react';
import axios from '../api/axios';
import { RestaurantContext } from '../context/restaurant-context';

function AddRestaurant() {
    const { addRestaurant } = useContext(RestaurantContext)
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("Price Range");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/", { name, location, price_range: priceRange });
            addRestaurant(res.data.data.restaurant);
        } catch (err) {
            console.log(`err`, err)
        }
        setName('')
        setLocation('')
        setPriceRange("Price Range")
    }
    return (
        <div className="mb-4">
            <form action="">
                <div className="row mx-auto">
                    <div className="col">
                        <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col">
                        <input value={location} onChange={e => setLocation(e.target.value)} type="text" className="form-control" placeholder="Location" />
                    </div>
                    <div className="col">
                        <select value={priceRange} onChange={e => setPriceRange(e.target.value)} className="form-select">
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <div onClick={handleSubmit} type="submit" className="col"><button className="btn btn-primary px-4">Add</button></div>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant;
