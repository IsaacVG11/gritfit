import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';

//Funciones-estilos de para componentes de categoría
const ImageButton = styled(ButtonBase)(() => ({
    position: 'relative',
    height: 500,

    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

export default function Category() {
    const [ categories, setCategories ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    //Obtenemos las categorías
    const getCategory = async () => {
        const response = await fetch('http://localhost:3001/api/categories');
        const data = await response.json();
        setCategories(data);
        setLoading(false);
        console.log(data);
    }

    //
    useEffect(() => {
        getCategory();
    },[]);

    return (
        <div className="category">
            {loading ? <p>Cargando categorías...</p>: <h1>OUR MERCH</h1>}
            <Box className="category-container">
                {categories.map((category) => (
                    <ImageButton
                        focusRipple
                        key={category.id_category}
                    >
                        <ImageSrc style={{ backgroundImage: `url(${category.image_url})` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>
                            <Typography
                                className="category-typography"
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={(theme) => ({
                                    position: 'relative',
                                    p: 4,
                                    pt: 2,
                                    pb: `calc(${theme.spacing(1)} + 5px)`,
                                })}
                            >
                                {category.category_name}
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                    </ImageButton>
                ))}
            </Box>
        </div>
    );
};