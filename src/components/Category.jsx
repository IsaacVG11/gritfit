import { useState, useEffect } from "react";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

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
            {loading ? <p>Cargando categorías...</p>: <h1>Categorías</h1>}
            <div className="category-container">
                {categories.map((category) => (
                    <Card key={category.id_category} sx={{ maxWidth: 345 }}>
                        <CardActionArea sx={{display: { xs: 'none', md: 'block' } }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={category.image_url}
                                alt={category.category_name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {category.category_name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        </div>
    );
};