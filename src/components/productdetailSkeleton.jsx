export default function ProductDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-[#dcfff9] flex justify-center items-center p-5">
      <div className="bg-white rounded-2xl shadow-lg p-5 md:p-10 grid md:grid-cols-2 gap-10 max-w-5xl w-full animate-pulse">

        {/* Image Skeleton */}
        <div className="flex justify-center items-center">
          <div className="w-80 h-80 bg-gray-300 rounded-lg"></div>
        </div>

        {/* Details Skeleton */}
        <div className="flex flex-col justify-center gap-5">

          <div className="h-6 bg-gray-300 rounded w-3/4"></div>

          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>

          <div className="h-6 bg-gray-300 rounded w-1/2"></div>

          <div className="flex gap-4 mt-3">
            <div className="h-10 w-32 bg-gray-300 rounded-lg"></div>
            <div className="h-10 w-32 bg-gray-300 rounded-lg"></div>
          </div>

        </div>
      </div>
    </div>
  );
}