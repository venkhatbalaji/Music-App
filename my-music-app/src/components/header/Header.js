import React, {Component} from 'react';
import {FaNapster} from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSongs } from '../../redux/modules/allSongs/allSongs';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            clicked: false
        }
    }

    updateSongs(){
        if(this.props.albums){
            this.props.updateSongs(this.props.albums, !this.state.clicked);
            this.setState({clicked: !this.state.clicked})
            const button = document.getElementById('button-click-song');
            if(this.state.clicked === false){
                button.style.backgroundColor = "#3494e6";
            }
            if(this.state.clicked=== true){
                button.style.backgroundColor = "#ec6ead";
            }
        }
    }
    
    render(){
        return(
            <header>
                <div className="app-tittle">
                   <div className="app-icon">
                       <FaNapster />
                    </div> 
                   <h1>Loose yourself in</h1>
                   <h1>In 60 million songs</h1>
                </div>
                <div className="app-main-tab">
                    <button id="button-click-song" onClick={() => this.updateSongs()}>All Songs</button>
                    <button>Playlists</button>
                </div>
            </header>
        );
    }

}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        allSongs: state.allSongs,
        albums: state.albums
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSongs: bindActionCreators(updateSongs, dispatch),  
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);