import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { Box,Grid,Card,CardContent,Typography,CardActions,Button ,CardActionArea,Pagination} from "@material-ui/core";

import { deletePost } from "../redux/actions/postActions";

const PostComponenet = (props) => {
    const posts = useSelector((state)=>state.allPosts.posts);
    const dispatch = useDispatch();
    const handleDelete = async (id) => {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).catch(error=>{console.log(error)});
        console.log("responseeeeeee",response);
        dispatch(deletePost(id));
    }
    console.log(props);
    const renderList = props.post.currentData().map((p)=>{
        const {title,body,id} = p;
        return (
            <Grid  item xs={4}>
                
                    <Card sx={{ minWidth: 275  }} key={id} >
                        <CardActionArea>
                            <CardContent>
                                <Link to={`/post/${id}`}>
                                <Typography variant="h5" component="div">
                                    {title}
                                </Typography>
                                <Typography variant="body2">
                                {body}
                                </Typography>
                                </Link>
                                <Link to={`/Edit/${id}`}> Edit </Link>
                                <Button onClick={()=>handleDelete(id)}>Remove</Button>
                            </CardContent>
                        </CardActionArea>
                    </Card> 
                
            </Grid>
        );
    })
    
   return <>{renderList}</>;
};

export default PostComponenet;