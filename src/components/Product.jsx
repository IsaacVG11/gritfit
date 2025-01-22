import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Product() {
    const[ products, setProducts ] = useState([]);
    const[ loading, setLoading ] = useState(true);

    //Obtiene los productos de la base de datos
    const getProducts = async () => {
        const response = await fetch('http://localhost:3001/api/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
        console.log(data);
    };

    //Solo se ejecuta 1 vez cuando se renderiza el componente
    useEffect(() => {
        getProducts();
    },[]);

    return (
        <div className="product">
            {loading ? <p>Cargando...</p> : <h1>Productos</h1>}
            <div className="product-container">
                {products.map((product) => (
                    <Card key={product.id_product}>
                        <CardActionArea sx={{display: { xs: 'none', md: 'block' }}}>
                            <CardMedia
                                className="c-media"
                                component="img"
                                image={product.image_url}
                                alt={product.product_name}
                            />
                            <CardContent>
                                <Typography className="typo" gutterBottom variant="h5" component="div">
                                    {product.product_name}
                                </Typography>
                                <Typography className="typo" variant="body2" sx={{ color: 'text.secondary' }}>
                                    {product.product_description}
                                </Typography>
                                <Typography className="typo" variant="body2" sx={{ color: 'text.secondary' }}>
                                    {product.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        </div>
    );
};