import React, { useState, createContext } from "react";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = props => {
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const addRestaurant = restaurant => {
        setRestaurants([...restaurants, restaurant]);
    };
    return (
        <RestaurantContext.Provider value={{ selectedRestaurant, setSelectedRestaurant ,restaurants, setRestaurants, addRestaurant }}>{props.children}</RestaurantContext.Provider>
    )
}