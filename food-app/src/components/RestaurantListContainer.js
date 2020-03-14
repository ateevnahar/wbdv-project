import React from 'react';
import { connect } from 'react-redux'
import RestaurantCardComponent from './RestaurantCardComponent';
import { Link } from 'react-router-dom';


const RestaurantListContainer = ({ restaurants, selectRestaurant }) =>
    <div className="container">
        <div className="row">
            <Link
                to="/"
            >
                Back to search
            </Link>
        </div>

        <div className="row form-group">
            {restaurants.map(restaurant => {
                return (
                    <RestaurantCardComponent
                        key={restaurant.apiKey}
                        selectRestaurant={selectRestaurant}
                        restaurant={restaurant}
                    ></RestaurantCardComponent>
                )
            })}
        </div>
    </div>



const stateMapper = (state) => ({
    restaurants: state.restaurants.restaurants,
})

const dispatchMapper = (dispatch) => ({
    selectRestaurant: (restaurant) => {
        console.log(restaurant)
        dispatch({
            type: "SELECT_RESTAURANT",
            restaurant: restaurant
        })
    }
        ,

})

export default connect(stateMapper, dispatchMapper)(RestaurantListContainer);