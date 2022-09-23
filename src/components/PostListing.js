import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Box,Grid,Container} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

import usePagination from "./Pagination";
import PostComponenet from "./PostComponent";
import { setPosts } from "../redux/actions/postActions";

const PostLisiting = () => {
    let [page, setPage] = useState(1);
    const PER_PAGE = 10;
    

    const dispatch = useDispatch();
    const posts = useSelector((state)=>state.allPosts.posts);

    const count = Math.ceil(posts.length / PER_PAGE);
    const _DATA = usePagination(posts, PER_PAGE);
    const fetchPost = async () =>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts").catch(err=>{
            console.log(err);
        });
        
        dispatch(setPosts(response.data));
    }

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    useEffect(()=>{
        fetchPost();
    },[]);
    
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2}>
                <PostComponenet post={_DATA}/>
            </Grid>
            <Container maxWidth="sm" style={{magingTop:"10px"}}>
                <Pagination
                    count={count}
                    size="large"
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChange}
                />
            </Container>
        </Container>
    
    );
};

export default PostLisiting;