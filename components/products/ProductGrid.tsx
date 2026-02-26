'use client'

import { useProductQuery } from "@/features/products/composables/useProductQuery";
import { useEffect } from "react";


const ListProducts = () => {
  const { loading, data, error, fetchProducts} = useProductQuery()

  useEffect(()=>{
    fetchProducts()
  }, [])

    return (
        <div>
            <h1>Products List</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && (
                <ul>
                    {data.products.map((product) => (
                        <li key={product._id}>
                            <h2>{product.name}</h2>
                            <p>{product.price}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ListProducts;