import { useState, useEffect } from "react";

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
        <div>
            {loading ? <p>Cargando categorías...</p>: <h1>Categorías</h1>}
            {categories.map((category) => (
                <div key={category.id_category}>
                    <img src={category.img_url} alt={category.category_name} />
                    <p>{category.category_name}</p>
                </div>
            ))}
        </div>
    );
};