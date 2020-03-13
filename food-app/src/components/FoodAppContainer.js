import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import restaurantReducer from '../reducers/RestaurantReducer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RestaurantLookupContainer from './RestaurantLookupContainer';
import RestaurantInfoContainer from './RestaurantInfoContainer';
import RestaurantListContainer from './RestaurantListContainer';

const rootReducer = combineReducers({
    restaurants: restaurantReducer,
})

const store = createStore(rootReducer)

const FoodAppContainer = ({ history, match }) => {
    return (
        <Provider store={store}>
        <Router>
            <Route 
                path="/"
                exact={true}
                render={() => <RestaurantLookupContainer></RestaurantLookupContainer>}/>
            <Route 
                path="/restaurants/:restaurantId"
                exact={true}
                render={() => <RestaurantInfoContainer></RestaurantInfoContainer>}/>
            <Route
                path="/restaurants"
                exact={true}
                render={() => <RestaurantListContainer></RestaurantListContainer>}/>
        </Router>
    </Provider>
    )
    
}

export default FoodAppContainer;

