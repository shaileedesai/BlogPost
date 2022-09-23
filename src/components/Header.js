import React from "react";
import { Link } from "react-router-dom";
import {Box,Button,Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Header = () => {
    return (
        <Container style={{backgroundColor:'blue'}} maxWidth="xl">
             <Grid container spacing={2}>
                <Grid item xs={11}>
                <Typography variant="h3" component="h3" style={{ color:'white'}}>
                    Blog
                </Typography>
                </Grid>
                <Grid>
                <Link to={`/Add`}>
                    <Typography variant="body" component="h3" style={{ color:'white'}}>
                        Add Post
                    </Typography>
                </Link>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Header;