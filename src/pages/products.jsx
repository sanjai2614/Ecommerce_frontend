import Skeleton from "../components/skeleton";
import { toast } from "react-toastify";
import ProductCard from "../components/productCard";
import { useProducts } from "../hooks/useProducts";

export default function Products() {

  const {data,isLoading,error}=useProducts()

  if(isLoading) return <Skeleton/>

  if(error) return <Skeleton/> 

  if (data?.length === 0) return <h1 className="text-center mt-10">No products found 😢</h1>


  return (

    <div className="bg-[#dcfff9]">

      <div className="container mx-auto p-5 ">

        <h1 className="text-2xl font-bold">All Products</h1>

        {/* Loading */}
      

<<<<<<< HEAD
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-10 lg:p-0 sm:px-5 px-10 ">
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-10 lg:p-0 sm:px-5 px-10 ">
>>>>>>> 2df63a12abbe53a87fb1c9873c4344466c3f5b0f
          {
             data.map((item) => (
              <ProductCard key={item._id} item={item} />    
            ))
          }
        </div>

      </div>
    </div>
  )
}