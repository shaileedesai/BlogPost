import React,{useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box,Container,Typography,Button  } from "@material-ui/core";

import { selectedPost, selectedPostComment,clearSelectedPostComment } from "../redux/actions/postActions";


const PostDetail = () => {
    const post = useSelector((state)=> state.allPosts.post);
    const comments = useSelector((state)=> state.allPosts.comments);
    const {title, body} = post;
    const { postId } = useParams();
    const dispatch = useDispatch();
    const fetchPostDetail = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).catch(error=>{console.log(error)});
        dispatch(selectedPost(response.data));
    }
    const fetchPostcomments = async () => {
        const cmtResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).catch(error=>{console.log(error)});
        dispatch(selectedPostComment(cmtResponse.data));
    }

    useEffect (()=>{
        if(postId && postId !== ""){
            fetchPostDetail();
        }
        dispatch(clearSelectedPostComment());
    },[postId]);

    const renderCmt = comments.map((comment)=>{
            return (
                <Container style={{backgroundColor:"grey", marginBottom:"5px"}}>
                    <Typography variant="h4" component="h5">
                        {comment.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {comment.email}
                    </Typography>
                    <Typography variant="body1" component="body2">
                        {comment.body}
                    </Typography>
                </Container>
            );
        });

    return(
        <Box>
            <Container>
            <Typography variant="h3" component="div">
                {title}
            </Typography>
            <Typography variant="body1" component="div">
                {body}
            </Typography>
            <Button variant="contained" onClick={fetchPostcomments}>
                {/* <CommentIcon color="primary" sx={{ fontSize: 40 }}/> */}
                Comment
            </Button>
            {comments && comments.length > 0 ? renderCmt : null}
            </Container>
        </Box>
   );
};

export default PostDetail;