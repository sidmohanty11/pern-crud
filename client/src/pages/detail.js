import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from '../api/axios';
import { RestaurantContext } from '../context/restaurant-context';

function Detail() {
    const { id } = useParams();
    const history = useHistory();
    const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantContext);

    useEffect(() => {
        const fetchRestaurant = async () => {
            const res = await axios.get(`/${id}`);
            setSelectedRestaurant(res.data.data.restaurant);
        }
        try {
            fetchRestaurant();
        } catch (err) {
            console.log(`err`, err);
        }
    }, [id]);
    return (
        <div>
            <h1 className="text-center display-1">{selectedRestaurant && selectedRestaurant.name }</h1>
        </div>
    )
}

export default Detail;
