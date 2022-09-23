import { Container, Card, CardContent,TextField, FormControl, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AddNewPost } from "../redux/actions/postActions";

const AddPost = () =>{
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [error, setError] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            userId:1
        }
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts',data);
        console.log("insert",response);
        dispatch(AddNewPost(response.data));
        navigate('/')
    };

    return (
        <Container>
            <h1> Add post</h1>
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
                    <Button type ="submit" variant="contained"  color="success">Submit</Button>
                    </FormControl>
                    </form> 
                </CardContent>
            </Card>
        </Container>
    );
};

export default AddPost;