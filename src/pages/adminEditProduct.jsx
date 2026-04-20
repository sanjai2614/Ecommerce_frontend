import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useUpdateProduct } from "../hooks/useUpdateProduct";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsbyId } from "../api/productApi";

export  function AdminEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const updateMutation = useUpdateProduct();

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductsbyId(id),
  });

  useEffect(() => {
    if (data) {
      setImage(data.image);
      setName(data.name);
      setPrice(data.price);
      setDiscountPrice(data.discountPrice);
      setDescription(data.description);
      setRating(data.rating);
    }
  }, [data]);

  if (isLoading)
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">Error loading product</div>;

  const handleUpdate = () => {
    updateMutation.mutate(
      {
        id,
        data: { image, name, price, discountPrice, description, rating },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["products"]);
          navigate("/admin/products");
        },
      }
    );
  };

  return (
    <div className="min-h-screen bg-[#dcfff9] flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Product</h2>

        <div className="grid grid-cols-1 gap-4">
          <input
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <input
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Discount Price"
              value={discountPrice}
              onChange={(e) => setDiscountPrice(e.target.value)}
            />
          </div>

          <textarea
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />

          {image && (
            <img
              src={image}
              alt="preview"
              className="w-full h-48 object-cover rounded-lg border"
            />
          )}

          <button
            onClick={handleUpdate}
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold"
          >
            {updateMutation.isPending ? "Updating..." : "Update Product"}
          </button>
        </div>
      </div>
    </div>
  );
}
