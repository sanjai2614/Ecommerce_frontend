import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/productCard'
import axios from 'axios'
import { useDeleteProduct } from '../hooks/useDeleteProduct'

export default function AdminProducts() {

    const {data,isLoading,error}=useProducts()
    const navigate =useNavigate()


  const deleteMutation=useDeleteProduct()


   if (isLoading) return <h1>Loading...</h1>
   if (error) return <h1>Eroor..</h1>


  return (
     <div className="bg-[#dcfff9]">
    
          <div className="container mx-auto p-5 ">
    
            <h1 className="text-2xl font-bold">All Products</h1>
    
            {/* Loading */}
          
    
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 my-10">
              {
                 data.map((item) => (
                    <div key={item._id}>

                  <ProductCard  item={item} />
            <button
              onClick={() =>navigate(`/admin/edit/${item._id}`)}
              className="bg-blue-600 text-white px-2 py-1 mt-2 ml-2"
            >
              Edit
            </button>
                    <button disabled={deleteMutation.isPending}
              onClick={() => {
                if(window.confirm("Delete this product?"))
                deleteMutation.mutate(item._id)}}
              className="bg-red-600 text-white px-2 py-1 mt-2"
            >
              Delete
            </button>

                    </div>
                  
                ))
              }
            </div>
    
          </div>
        </div>
  )
}
