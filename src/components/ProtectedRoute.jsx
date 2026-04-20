import Cookies from "js-cookie"
import { Navigate} from "react-router-dom"
import CryptoJS from "crypto-js"


export default function ProtectedRoute({ children }) {
  const secretKey = import.meta.env.VITE_SECRET_KEY
  const encryptedData = Cookies.get("user")

  // console.log("Encrypted:", encryptedData)

  if (!encryptedData) {
    console.log("No cookie")
    return <Navigate to="/login" />
  }

  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey)
    const decrypted = bytes.toString(CryptoJS.enc.Utf8)

    // console.log("Decrypted:", decrypted)

    if (!decrypted) {
      console.log("Decryption failed")
      return <Navigate to="/login" />
    }

    const user = JSON.parse(decrypted)

    // console.log("User:", user)

    if (!user?.UserEmail) {
      return <Navigate to="/login" />
    }

    return children

  } catch (err) {
    console.log("Error:", err)
    return <Navigate to="/login" />
  }
}