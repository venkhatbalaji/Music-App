import React, { Component } from 'react';
import { connect } from 'react-redux';
import Songs from './songs/Songs';

class AllSongs extends Component {
    constructor(props){
        super(props);
        this.state={
            items: 12,
            isLoading: false,
            songs: this.props.allSongs.songs,
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

    searchTypeAhead(){
        const search = document.getElementById('type-ahead').value;
        console.log(search)
        if(search){
            const searchFilter = this.props.allSongs.songs.filter((item) =>{
                return item.title.indexOf(search) !== -1
            })
            console.log(searchFilter);
            this.setState({songs: searchFilter})
        }
        else{
            this.setState({songs: this.props.allSongs.songs})
        }
    }

    displaySongs(){
        var CardItems = [];
        for (var i = 0; i < this.state.items; i++) {
            if(i <= this.state.songs.length){
                CardItems.push(<Songs key={this.state.songs[i] ? 
                                           this.state.songs[i].id :
                                            ""}
                                          song={this.state.songs[i]} />);
            }
        }
        return CardItems;
    }

    render(){
        return(
            <div className="all-songs-content">
                <div className="songs-type-ahead">
                    <input id="type-ahead" className="songs-type-ahead-text" type="text" onKeyUp={() => this.searchTypeAhead()} placeholder="Seach for any songs" />
                </div>
                <div className="all-songs">
                    {this.displaySongs()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allSongs: state.allSongs
    };
}


const mapDispatchToProps = (dispatch) => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllSongs);