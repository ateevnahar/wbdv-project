import React from 'react';
import { connect } from 'react-redux'
import RestaurantCardComponent from './RestaurantCardComponent';

const RestaurantListContainer = () => {
    return (
        <React.Fragment>
            {this.PaymentResponse.restaurants.map(restaurant => {
                return (
                    <RestaurantCardComponent 
                        selectRestaurant={this.PaymentResponse.selectRestaurant} 
                        restaurant={restaurant}
                    ></RestaurantCardComponent>
                )
            })}
        </React.Fragment>
    )
}

const stateMapper = (state) => ({
    restaurants: state.restaurants.restaurants,
})

const dispatchMapper = (dispatch) => ({
    selectRestaurant: (restaurant) =>
        dispatch({
            type:"SELECT_RESTAURANT",
            restaurant: restaurant
        }),
    
})

export default connect(stateMapper, dispatchMapper)(RestaurantListContainer)