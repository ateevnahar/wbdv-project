import React from 'react';
import { Link } from 'react-router-dom';


const RestaurantCardComponent = ({ restaurant, selectRestaurant }) => {
    return (
        <div className="col-3">
            <div className="card">
                <img className="card-img-top" src={restaurant.logoUrl} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{restaurant.name}</h5>
                    <p className="card-text">{restaurant.streetAddress}, {restaurant.city}</p>
                    <Link to={`/restaurants/${restaurant.apiKey}`} onClick={() => selectRestaurant(restaurant)}>Restaurant Info</Link>
                </div>
            </div>
        </div>

    )
}

export default RestaurantCardComponent;