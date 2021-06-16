import React, { useEffect, useContext } from 'react';
import axios from '../api/axios';
import { useHistory } from 'react-router-dom';
import { RestaurantContext } from '../context/restaurant-context';
import { Link } from 'react-router-dom';

function RestaurantList(props) {
    const history = useHistory();
    const { restaurants, setRestaurants } = useContext(RestaurantContext);
    useEffect(() => {
        async function fetchRestaurants() {
            const res = await axios.get("/");
            setRestaurants(res.data.data.restaurants)
        }
        try {
            fetchRestaurants();
        } catch (err) {
            console.log(`err`, err)
        }
    }, [setRestaurants]);

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`/${id}`);
            setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
        } catch (err) {
            console.log(`err`, err)
        }
    }
    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th className="bg-secondary display-6">Restaurant</th>
                        <th className="bg-secondary display-6">Location</th>
                        <th className="bg-secondary display-6">Price Range</th>
                        <th className="bg-secondary display-6">Ratings</th>
                        <th className="bg-secondary display-6">Edit</th>
                        <th className="bg-secondary display-6">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants && restaurants.map(restaurant => (
                        <tr key={restaurant.id}>
                            <td onClick={() => { history.push(`/restaurants/${restaurant.id}`) }}>{restaurant.name}</td>
                            <td onClick={() => { history.push(`/restaurants/${restaurant.id}`) }}>{restaurant.location}</td>
                            <td onClick={() => { history.push(`/restaurants/${restaurant.id}`) }}>{"$".repeat(restaurant.price_range)}</td>
                            <td onClick={() => { history.push(`/restaurants/${restaurant.id}`) }}>ratings</td>
                            <td><Link to={`/restaurants/${restaurant.id}/update`} className="btn btn-warning">Update</Link></td>
                            <td><button onClick={() => { handleDelete(restaurant.id) }} className="btn btn-danger">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RestaurantList;
