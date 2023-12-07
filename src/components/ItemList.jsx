import React from "react";
import { ProductCard } from "./ProductCard";

export const ItemList = ({products}) => {


  return (
    <>
        
        <h2 style={{display:"none"}}>productos</h2>
        <div className="block-card">
            {products.map((prod)=>(
              <ProductCard product={prod} key={prod.id}/>
              ))}
        </div>
    </>
  );
};
