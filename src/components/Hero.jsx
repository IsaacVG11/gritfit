import Box from '@mui/material/Box';

export default function Hero() {
    return(
        <Box className="hero-container">
            <video
                autoPlay
                loop
                muted
                playsInline>
                <source src="https://res.cloudinary.com/dmlspkqyz/video/upload/v1737215236/clip_terminado_w27yl9.mp4" type="video/mp4" />
            </video>
            <Box className="hero-content-wrapper">
                <h1> EMBRACE <br /> THE <br /> DIFFICULT. </h1>
                <p> No excuses. </p>
            </Box>
        </Box>
    );
};