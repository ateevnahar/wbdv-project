import React from 'react';
import { Link } from 'react-router-dom';


const RestaurantCardComponent = ({ restaurant, selectRestaurant }) => {
    return (
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src={restaurant.logoUrl} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{restaurant.name}</h5>
                    <p class="card-text">Sample Text</p>
                    <Link to={`/restaurants/${restaurant.apiKey}`} onClick={() => selectRestaurant(restaurant)}>Restaurant Info</Link>
                </div>
        </div>
            )
        }
        
export default RestaurantCardComponent;