import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from '../api/axios';
import { RestaurantContext } from '../context/restaurant-context';
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';

function Detail() {
    const { id } = useParams();
    const history = useHistory();
    const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantContext);

    useEffect(() => {
        const fetchRestaurant = async () => {
            const res = await axios.get(`/${id}`);
            setSelectedRestaurant(res.data.data);
        }
        try {
            fetchRestaurant();
        } catch (err) {
            console.log(`err`, err);
        }
    }, [id, setSelectedRestaurant]);
    
    return (
        <div>
            <h1 className="text-center display-1">{selectedRestaurant && selectedRestaurant.restaurant.name}</h1>
            <StarRating rating={4.5} />
            {selectedRestaurant && (<div className="mt-3">
                <Reviews reviews={selectedRestaurant.reviews} />
            </div>)}
            <AddReview />
        </div>
    )
}

export default Detail;
