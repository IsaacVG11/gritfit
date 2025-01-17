import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const pages = ['Products', 'About Us', 'Contact'];

export default function Navbar() {

    const handleCloseNavMenu = () => {
       console.log("Le di a un item del navbar!")
    };

    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 5,
                            ml: 5,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        GRITFIT
                    </Typography>
                    <Avatar
                        sx={{width: 55, height: 50}}
                        alt="gritfit logo" src="src/assets/logo.png"
                    />
                    <Box sx={{
                        mr: 5,
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'flex-end',
                        gap: 10,
                    }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
