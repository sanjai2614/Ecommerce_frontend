import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { useAddcart } from "../hooks/useAddToCart";
import { useGetProductsById } from "../hooks/useGetProductsById";
import ProductDetailsSkeleton from "./productdetailSkeleton";
import { handleBuyNow } from "../utils/deliveryFunction";

export default function ProductDetails() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const { id } = useParams();

  const { mutate: addToCart, isPending: cartLoading } = useAddcart();

  const { data, isLoading, error } = useGetProductsById(id);

  if (isLoading) return <ProductDetailsSkeleton />;
  if (error) return <h1>Error</h1>;

  return (
    <div className="min-h-screen bg-[#dcfff9] flex justify-center items-center p-5">
      <div className="bg-white rounded-2xl shadow-lg p-5 md:p-10 grid md:grid-cols-2 gap-10 max-w-5xl w-full">
        <div className="flex justify-center items-center">
          <img
            src={data.image}
            alt={data.name}
            className="w-80 h-80 object-contain hover:scale-105 transition duration-300"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-2xl md:text-3xl font-bold">
            {data.name}
          </h1>

          <p>{data.description || "No description available"}</p>

          <h2 className="text-3xl font-semibold flex gap-2 text-green-600">
            <span className="text-red-600 line-through">
              ₹{data.price}
            </span>

            ₹{data.discountPrice}
          </h2>

          <div className="flex gap-4">
            <button
              className="bg-green-600 text-white px-6 py-2 rounded-lg"
              disabled={cartLoading}
              onClick={() => {
                if (!user) {
                  return toast.error("Please login", {
                    theme: "colored",
                  });
                }

                addToCart(data._id);
              }}
            >
              {cartLoading ? "Adding..." : "Add to Cart"}
            </button>

            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg"
              onClick={() => handleBuyNow(user, navigate)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}