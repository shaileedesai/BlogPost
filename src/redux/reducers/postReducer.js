import { ActionTypes } from "../constants/action-types"

const initialState = {
    posts: [],
    post: {},
    comments: []
}

export const PostReducer = (state = initialState,{type, payload}) => {
    switch(type){
        case ActionTypes.SET_POSTS: 
            return {...state, posts:payload};
        case ActionTypes.SELECTED_POST: 
            return {...state, post:payload};
        case ActionTypes.SET_POST_COMMENTS: 
            return {...state, comments:payload};
        case ActionTypes.CLEAR_POST_COMMENTS: 
            return {...state, comments:[]};
        case ActionTypes.ADD_POST: 
            const finalPayload = state.posts.concat(payload);
            return {...state, posts:finalPayload};
        case ActionTypes.EDIT_SELECTED_POST:
            const finaleditPayload = state.posts.concat(payload);
            return {...state, posts:finaleditPayload};
        case ActionTypes.REMOVE_SELECTED_POST: 
            const filterpayload = state.posts.filter(post=> post.id !== payload && post);
            return {...state, posts:filterpayload};
        default:    
            return state;

    }
}
