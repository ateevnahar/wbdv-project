import React from 'react';
import { connect } from 'react-redux';
import * as EatStreetService from '../service/EatStreetService';
import { Link } from 'react-router-dom';


class RestaurantLookupContainer extends React.Component {

    state = {
        streetAddress: "",
        radius: "",
    }




    render = () => {
        return (
            <React.Fragment>
                {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </nav> */}


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
                                <Link
                                    to="/restaurants"
                                    onClick={() => this.props.lookupRestaurants(this.state.streetAddress, this.state.radius)}
                                >
                                    Lookup Restaurants
                                </Link>
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
            .then(response => {
                // console.log(response)
                dispatch({
                    type: "UPDATE_RESTAURANT_LIST",
                    restaurants: response.restaurants
                })
            }),

})

export default connect(null, dispatchMapper)(RestaurantLookupContainer);