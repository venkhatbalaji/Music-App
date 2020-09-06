import React, { Component } from 'react';
import Header from '../components/header/Header';
import Albums from '../components/albums/Albums';
import { connect } from 'react-redux';
import AllSongs from '../components/allSongs/AllSongs';
//import Loader from '../components/loader/Loader';

class AppContainer extends Component {

    render() {
        return (
            <div>
                <Header />
                {this.props.updated === true ? <AllSongs /> : <Albums />}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        updated: state.allSongs.updated
    };
}

export default connect(mapStateToProps, null)(AppContainer);