'use client'
import { useProducts } from "@/features/products/hooks";

const ProductsPage = () => {
    const {data, error} = useProducts()
    return (
        <div>
            <h1>Products Page</h1>
            {
                data ? (
                    <ul>
                        {data.results.map((product) => (
                            <li key={product.id}>
                                <h2>{product.description}</h2>
                                <p>{product.price}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )   
            }
            
        </div>
    );
};

export default ProductsPage;