import React, { Component, Suspense } from 'react';
import { getAlbums } from '../../redux/modules/albums/albums';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from '../loader/Loader';
const AlbumCardList = React.lazy(() => import('./albumCardList/AlbumCardList'));

class Albums extends Component {
    componentDidMount() {
        this.props.getAlbums();
    }

    render() {
        return (
            <div className="albums-content">
                {this.props.albums ? <Suspense fallback={<Loader />}>
                    <AlbumCardList Albums={this.props.albums}/>
                </Suspense> : <Loader/>}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        albums: state.albums,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAlbums: bindActionCreators(getAlbums, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Albums);