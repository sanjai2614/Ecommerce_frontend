import Swal from 'sweetalert2'
import { getUser } from './getUser'

// get delivery date 
export const getDeliveryDate=()=> {

const today = new Date()
today.setDate(today.getDate()+4)

return today.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })

}

// buy function
export const handleBuyNow = () => {

const user =getUser()

// err
  if (!user) {
    Swal.fire({
      icon: "warning",
      title: "Login Required",
      text: "Please login to continue",
      confirmButtonColor: "#16a34a"
    })
    navigate("/login")
    return
  }

  const deliveryDate = getDeliveryDate()

  // success
  Swal.fire({
    icon: "success",
    title: "Order Placed 🎉",
    html: `
      <p>Thanks for your order!</p>
      <p>📦 Delivery by <b>${deliveryDate}</b></p>
    `,
    confirmButtonText: "OK",
    confirmButtonColor: "#16a34a"
  })
}