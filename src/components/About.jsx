import Box from '@mui/material/Box';

export default function About (){
    return (
        <Box className="about">
            <Box className="about-hero-wrapper">
                <img src="https://res.cloudinary.com/dmlspkqyz/image/upload/v1736907131/virtualD_pnuura.png" alt="algo"/>
                <Box className="about-hero-info">
                    <h1> ABOUT US </h1>
                    <p> We are a group of three friends which want to make the difference...</p>
                </Box>
            </Box>
            <Box className="about-wrapper">
                <Box className="block">
                    <img className="img-about" src="https://res.cloudinary.com/dmlspkqyz/image/upload/v1736907131/virtualD_pnuura.png" alt="algo"/>
                    <p> Texto que acompañe la imagen </p>
                </Box>
                <Box className="block">
                    <img className="img-about" src="https://res.cloudinary.com/dmlspkqyz/image/upload/v1736907131/virtualD_pnuura.png" alt="algo"/>
                    <p> Texto que acompañe la imagen </p>
                </Box>
                <Box className="block">
                    <img className="img-about" src="https://res.cloudinary.com/dmlspkqyz/image/upload/v1736907131/virtualD_pnuura.png" alt="algo"/>
                    <p> Texto que acompañe la imagen </p>
                </Box>
            </Box>
        </Box>
    );
}