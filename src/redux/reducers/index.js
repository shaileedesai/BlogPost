import { combineReducers } from "redux";
import { PostReducer } from "./postReducer";

const reducers = combineReducers({
    allPosts : PostReducer
}); 

export default reducers;