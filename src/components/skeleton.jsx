export default function Skeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center mt-40 lg:m-10">

      {[1, 2, 3, 4].map((_, i) => (

        <div key={i} className="bg-white w-full sm:max-w-sm p-5 rounded-2xl shadow-xl lg:w-70">

          <div className="shimmer h-64 w-full rounded-lg"></div>

          <div className="mt-4 space-y-3 flex flex-col w-full">
            <div className="shimmer h-4 rounded"></div>
            <div className="shimmer h-4 rounded w-3/4"></div>
            <div className="shimmer h-4 rounded w-3/4"></div>
            <div className="shimmer h-4 rounded w-1/2"></div>
            <div className="shimmer h-4 rounded w-1/4"></div>
          </div>

          <div className="mt-4 shimmer h-8 rounded"></div>

        </div>
      ))}

    </div>
  )
}