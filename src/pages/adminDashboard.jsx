import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

export default function AdminDashboard() {


    const navigate = useNavigate()

const handleLogout = () => {
  if (window.confirm("Are u sure Log out?")) {
    Cookies.remove("user")
    navigate("/login")
    window.location.reload()   // 🔥 important
  }
}

    return (
        <>

            <div className="bg-[#dcfff9] p-5">

                <h1 className="text-2xl font-bold mb-5">Admin Dashboard</h1>

                <div className="flex flex-col gap-3 w-full  items-center">
                    <Link to={'/admin/products'}
                        className="bg-green-600 text-white px-4 py-2 rounded">
                        📦 View Products
                    </Link>
                    <Link to={'/admin/users'}
                        className="bg-green-600 text-white px-4 py-2 rounded">
                        View All Users
                    </Link>
                    <Link to={'/admin/contact'}
                        className="bg-green-600 text-white px-4 py-2 rounded">
                        View All user Experience
                    </Link>

                    <button onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >Logout
                    </button>

                </div>

            </div>

        </>
    )
}