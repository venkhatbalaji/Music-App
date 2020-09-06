import React, { Component } from 'react';
import AlbumCard from '../albumCard/AlbumCard';

class AlbumCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: 12,
            isLoading: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if ((window.innerHeight + window.scrollY)> document.body.offsetHeight ){
                this.loadMoreItems();
            }
        });
    }

    loadMoreItems() {
        this.setState({ isLoading: true });
        this.setState({ items: this.state.items + 6, isLoading: false })
    }

    displayItems() {
        var CardItems = [];
        for (var i = 0; i < this.state.items; i++) {
            if(i <= this.props.Albums.albums.length){
                CardItems.push(<AlbumCard key={this.props.Albums.albums[i] ? 
                                               this.props.Albums.albums[i].id :
                                               ""} 
                                          Album={this.props.Albums.albums[i]} />);
            }
        }
        return CardItems;
    }

    render() {
        return (
            <div className="album-list-row">
                {this.displayItems()}
            </div>
        )
    }

}

export default AlbumCardList;