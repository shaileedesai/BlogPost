import { Container, Card, CardContent,TextField,Alert, FormControl, Button } from "@material-ui/core";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { selectedPost,UpdatePost } from "../redux/actions/postActions";

const EditPost = () =>{
    const post = useSelector((state)=> state.allPosts.post);
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [error, setError] = useState();
    const { postId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const fetchPostDetail = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).catch(error=>{console.log(error)});
        dispatch(selectedPost(response.data));
        setTitle(response.data.title);
        setBody(response.data.body);
    }
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(!title || !body){
           return setError("inputs are required!");
        }
        const data= {
            title:title,
            body:body,
            userId:post.userId,
            id: post.id
        }
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`,data);
        console.log("update",response);
        dispatch(UpdatePost(response.data));
        navigate('/');
        

    }

    useEffect (()=>{
        if(postId && postId !== ""){
            fetchPostDetail();
        }
    },[postId]);

    return (
        <Container>
            <h1> Edit post</h1>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                    <FormControl fullWidth>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Title"
                        multiline
                        value={title}
                        onChange={handleTitleChange}
                    />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 6, width: '25ch' }} variant="outlined">
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Body"
                        multiline
                        value={body}
                        onChange={e=> setBody(e.target.value)}
                    />
                    </FormControl>
                    <FormControl sx={{ m: 6, width: '25ch' }} variant="outlined">
                        <Button type="submit" variant="contained"  color="success">Submit</Button>
                        <Button>
                        <Link to="/">Clear</Link>
                        </Button>
                    </FormControl>
                    </form> 
                </CardContent>
            </Card>
        </Container>
    );
};

export default EditPost;