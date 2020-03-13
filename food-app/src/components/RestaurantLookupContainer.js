import React from 'react';
import { connect } from 'react-redux';
import * as EatStreetService from '../service/EatStreetService';


class RestaurantLookupContainer extends React.Component {
    state = {
        streetAddress: "",
        radius: "",
    }

    render = () => {
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </nav>


                <div className="container">
                    <form>
                        <div className="row">
                            <h1>Restaurant Lookup</h1>
                        </div>

                        <React.Fragment>
                            <div className="row form-group">
                                <input
                                    className="form-control"
                                    onChange={e => {
                                        const newAddress = e.target.value;
                                        this.setState(prevState => ({
                                            streetAddress: newAddress
                                        }))
                                    }}
                                    value={this.state.streetAddress}
                                    placeholder="Enter your address"
                                />
                            </div>
                            <div className="row form-group">
                                <input
                                    className="form-control"
                                    onChange={e => {
                                        const newRadius = e.target.value;
                                        this.setState(prevState => ({
                                            radius: newRadius
                                        }))
                                    }}
                                    value={this.state.radius}
                                    placeholder="Enter your desired radius in miles"
                                />
                            </div>
                            <div className="row">
                                <button 
                                    type="button" 
                                    className="btn btn-primary"
                                    onClick={this.props.lookupRestaurants(this.state.streetAddress, this.state.radius)}
                                >
                                    Primary
                                </button>
                            </div>

                        </React.Fragment>


                    </form>
                </div>
            </React.Fragment>
        )
    }

}

const dispatchMapper = (dispatch) => ({
    lookupRestaurants: (streetAddress, radius) =>
        EatStreetService.lookupRestaurants(streetAddress, radius)
            .then(response => dispatch ({
                type: "UPDATE_RESTAURANT_LIST",
                restaurants: response.restaurants
            })),
    
})

export default connect(null, dispatchMapper)(RestaurantLookupContainer);