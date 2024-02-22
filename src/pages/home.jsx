import { useState,useEffect } from "react";
import ProductCard from "../components/productCard"






export default function Home() {


    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
        .then(response=>response.json())
        .then(products=>setProducts(products))
        
    },[])
    return(
        <div className=' flex flex-wrap gap-[10px] pl-24 pr-24 p-8'>
          

            {products.map(product=><ProductCard key={product.id} title={product.title} price={product.price} image={product.images[1]}/>)}
         
        </div>
    )
};
