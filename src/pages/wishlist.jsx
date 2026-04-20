import { useWishlist, useRemoveWishlist } from "../hooks/useWishlist";
import { getUser } from "../utils/getUser";

export default function Wishlist() {

  const user = getUser()
  const userId = user?._id

  const { data, isLoading, error } = useWishlist(userId);
  const { mutate: removeWishlist } = useRemoveWishlist();

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>Error</h1>

  if (data?.length === 0) {
    return <h1 className="text-center mt-10">No wishlist items ❤️</h1>
  }

  return (
    <div className="p-6 bg-[#dcfff9]">

      <h1 className="text-3xl font-bold mb-6">❤️ Wishlist</h1>

      <div className="grid grid-cols-4 gap-5">
        {
          data?.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded-xl shadow">

              <img 
                src={item.productId?.image} 
                className="h-40 w-full object-cover rounded"
              />

              <h2 className="font-semibold mt-2">
                {item.productId?.name}
              </h2>

              <p>₹{item.productId?.price}</p>

              <button
                onClick={() =>
                  removeWishlist({
                    userId,
                    productId: item.productId?._id
                  })
                }
                className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>

            </div>
          ))
        }
      </div>

    </div>
  );
}