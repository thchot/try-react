import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {} from "./Footer.css"


class Footer extends React.Component {

    render() {
        return (
            <Container component="footer"
                disableGutters={true}
                maxWidth={false}
                className="footer"
            >
                <Typography variant="h5" color="inherit">
                    Footer
          </Typography>
            </Container>
        )
    }
}

export default Footer