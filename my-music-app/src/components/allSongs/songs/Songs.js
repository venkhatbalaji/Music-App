import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

function Song(props) {
    if (props.song) {
        return (
            <div className="song">
                <h4>{props.song.title}</h4>
                <div className="play-icon">
                    <FaPlayCircle />
                </div>
            </div>
        );
    } else {
        return(
            <div className="song">
                <h4>NOT FOUND</h4>
            </div>
        );
    }
}

export default Song;