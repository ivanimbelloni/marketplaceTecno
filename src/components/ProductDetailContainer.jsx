import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/FireBase'
import { ProductDetail } from './ProductDetail'
import { LoadingPant } from './LoadingPant'

export const ProductDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const id = useParams().id
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        const docRef = doc(db, "products", id)
        getDoc(docRef)
        .then((resp) =>{
            setProduct(
                { ...resp.data(), id: resp.id}
            )
        })
        .finally(()=> setLoading(false))
    }, [id])

  return (
    <div>
        {!loading ? product && <ProductDetail product={product}/> : <LoadingPant/>}
    </div>
  )
}
