import axios from "axios";
import { ActionTypes } from "../constants/action-types"

export const setPosts = (posts) => {
    return {
        type: ActionTypes.SET_POSTS,
        payload: posts
    };
};

export const selectedPost = (post) => {
    return {
        type: ActionTypes.SELECTED_POST,
        payload: post
    };
};

export const selectedPostComment = (comments) => {
    return {
        type: ActionTypes.SET_POST_COMMENTS,
        payload: comments
    };
};

export const clearSelectedPostComment = () => {
    return {
        type: ActionTypes.CLEAR_POST_COMMENTS,
        payload: []
    };
};

export const AddNewPost =  (post) => {
    return {
        type: ActionTypes.ADD_POST,
        payload: post
    };
}

export const UpdatePost =  (post) => {
    return {
        type: ActionTypes.EDIT_SELECTED_POST,
        payload: post
    };
}

export const deletePost =  (post) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_POST,
        payload: post
    };
}
