import React from 'react';
import { connect } from 'react-redux'

const RestaurantInfoContainer = () => {
    return (
        <React.Fragment>
            Hello from {this.PaymentResponse.restaurant.name}
        </React.Fragment>
    )
}

const stateMapper = state => ({
    restaurant: state.restaurant.selectedRestaurant,
})

export default connect(stateMapper)(RestaurantInfoContainer);