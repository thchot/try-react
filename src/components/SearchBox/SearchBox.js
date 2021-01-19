import React from 'react';
import { } from "./SearchBox.css"
import Box from '@material-ui/core/Box';
import { Input, Button, Paper } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

class SearchBox extends React.Component {

    render() {
        return (

            <Box className="seachbox-holder-boundary">
                <Box className="searbox-holder" component="div">
                    <Box className="searbox-icon-holder"><SearchIcon className="search-button-icon" /></Box>
                    <Input placeholder="Enter a trail, city or town"
                        margin="none"
                        id="standard-search"
                        disableUnderline="true"
                        type="text"
                        autoFocus="true" />
                    <Button className="search-button">Search</Button>
                </Box>
            </Box>
        )
    }
}

export default SearchBox
