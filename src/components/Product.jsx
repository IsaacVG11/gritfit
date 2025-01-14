import { useState, useEffect } from 'react';

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
        <div>
            {loading ? <p>Cargando...</p> : <h1>Productos</h1>}
            {products.map((product) => (
                <div key={product.id_product}>
                    <img src={product.image_url} alt={product.product_name}/>
                    <h2>{product.product_name}</h2>
                    <p>{product.product_description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
};