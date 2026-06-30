import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddcart } from "../hooks/useAddToCart";
import {
  useAddWishlist,
  useRemoveWishlist,
  useWishlist,
} from "../hooks/useWishlist";
import { useAuth } from "../context/AuthContext";
import Skeleton from "./Skeleton";

export default function ProductCard({ item }) {

  // Current logged in user
  const { user, isLoading: authLoading } = useAuth();

  const navigate = useNavigate();

  // Cart
  const { mutate: addToCart, isPending: cartLoading } = useAddcart();

  // Wishlist
  const { mutate: addToWishlist } = useAddWishlist();
  const { mutate: removeWishlist } = useRemoveWishlist();

  const {
    data: wishlist,
    isLoading: wishlistLoading,
    error,
  } = useWishlist();

  if (authLoading || wishlistLoading) return <Skeleton />;

  if (error) return null;

  const isLiked = wishlist?.some(
    (w) => w.productId?._id === item._id
  );

  const handleWishlist = (e) => {
    e.stopPropagation();

    if (!user) {
      return toast.error("Please login first", {
        theme: "colored",
      });
    }

    if (isLiked) {
      removeWishlist(item._id);
    } else {
      addToWishlist(item._id);
    }
  };

  return (
    <div
      onClick={() => navigate(`/products/${item._id}`)}
      className="p-3 bg-white relative text-center shadow-lg rounded-lg hover:scale-105 cursor-pointer transition duration-300"
    >

      <button
        onClick={handleWishlist}
        className="absolute top-2 right-2 text-2xl"
      >
        {isLiked ? "❤️" : "🤍"}
      </button>

      <div
        style={{ backgroundImage: `url(${item.image})` }}
        className="w-full h-48 bg-cover bg-center rounded"
      />

      <div className="mt-2">
        <h1 className="font-semibold">{item.name}</h1>

        <h1 className="text-green-600 flex justify-center gap-2">
          <span className="text-red-600 line-through">
            ₹{item.price}
          </span>

          ₹{item.discountPrice}
        </h1>

        <h1>{item.rating}</h1>

        <p className="text-sm line-clamp-1">
          {item.description}
        </p>
      </div>

      <button
        className="bg-green-600 rounded p-2 text-white w-full mt-2"
        disabled={cartLoading}
        onClick={(e) => {
          e.stopPropagation();

          if (!user) {
            return toast.error("Please login first", {
              theme: "colored",
            });
          }

          addToCart(item._id);
        }}
      >
        {cartLoading ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
}