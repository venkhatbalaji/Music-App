
export const GET_ALBUMS = 'ma/albums/GET_ALBUMS';
export const GET_ALBUMS_ASYNC = 'ma/albums/GET_ALBUMS_ASYNC';

export const initialState = {
    albums:[]
}

export const albums = (state = initialState, action={}) =>{

    switch(action.type){
        case GET_ALBUMS:
            return{
                ...state,
                albums:[
                    ...action.payload.data,
                ]
            };
        default:
            return{
                ...state,
            }
    }
}

export const getAlbums = () =>{
    return{
        type: GET_ALBUMS_ASYNC,
    }
};

export default albums;

