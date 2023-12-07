import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/FireBase'
import { ItemList } from './ItemList'
import { LoadingPant } from './LoadingPant'

export const ItemListContainer = () => {
    const [products , setProducts] = useState([])
    const category = useParams().category
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        const productsRef = collection(db, "products")
        const q = category ? query(productsRef, where("category", "==", category)) : productsRef

        getDocs(q).then((resp)=>{
            setProducts(
                resp.docs.map((doc)=>{
                    return {
                        ...doc.data(), id: doc.id
                    }
                })
            )
        })
        .finally(()=> setLoading(false))
    }, [category])

  return (
    <>
        {!loading ? <ItemList products={products}/> : <LoadingPant/>} 
    </>
  )
}
