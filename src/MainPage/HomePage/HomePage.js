import React from 'react';
import Container from '@material-ui/core/Container';

import Box from '@material-ui/core/Box';
import { } from "./HomePage.css"
import { Input, Button, Paper } from '@material-ui/core';
import SearchBox from '../../components/SearchBox/SearchBox'


class HomePage extends React.Component {

    render() {
        return (
            <React.Fragment>

                <Container component="main"
                    disableGutters={true}
                    maxWidth={false}
                    className="main"
                >
                    <Box className="search-section-box" component="div">
                        <Box className="search-section" component="section">
                            <Box className="search-section-header"><h2>Find your next favorite trail</h2></Box>
                            <SearchBox/>
                        </Box>
                    </Box>

                    <Box className="another-section">
                        <div style={{ display: "flex", flexDirection: 'column' }}>
                            <Box style={{ display: "block", width: '40rem', margin: 'auto' }}>
                                <h1>100,000+ trails. 20 million explorers. Endless memories.</h1>
                                <h3>The beauty of nature doesn’t need to be hard to find. Our goal is simple - build the largest collection of hand-curated trail guides, so you can explore the outdoors with confidence. Anytime. Anywhere.</h3>
                            </Box>
                            <Box style={{ display: "block", margin: "auto", width: '40rem' }} >
                                <Box style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', verticalAlign: 'middle' }}>
                                    <Button variant="contained" color="primary" size="large" style={{ margin: '2rem' }}>Sign Up for free</Button>
                                    <Button variant="outlined" size="large" style={{ margin: '2rem' }}>Get All Pro</Button>
                                </Box>
                            </Box>
                        </div>
                    </Box>
                </Container>
            </React.Fragment>

        )
    }
}


export default HomePage