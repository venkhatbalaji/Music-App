
export const UPDATE_ALL_SONGS = 'ma/allSongs/UPDATE_ALL_SONGS';
export const UPDATE_ALL_SONGS_ASYNC = 'ma/allSongs/UPDATE_ALL_SONGS_ASYNC';

const initialState = {
    songs: undefined,
    updated: false,
}

export const songs = (state = initialState, action={}) =>{
    switch(action.type){
        case UPDATE_ALL_SONGS:
            return{
                ...state,
                songs: action.payload.data.albums,
                updated: action.payload.updated,
            }
        default:
            return{
                ...state,
            }
    }
}

export const updateSongs = (data, updated) =>{
    return{
        type: UPDATE_ALL_SONGS_ASYNC,
        payload:{
            data: data,
            updated: updated,
        }
    }
};

export default songs;