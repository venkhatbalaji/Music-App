import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const AlbumCard = (props) => {
    if (props.Album) {
        return (
            <div className="album-card">
                <img src={props.Album.url} alt="album"></img>
                <div className="album-card-icon"><FaPlayCircle /></div>
                <div className="album-card-body">
                    <h4>{props.Album.title}</h4>
                </div>
            </div>
        );
    }
    return null;
}

export default AlbumCard;