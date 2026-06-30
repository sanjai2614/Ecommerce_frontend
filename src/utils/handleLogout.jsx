import Swal from "sweetalert2";

export const handleLogout = (
  logoutUser,
  navigate
) => {
  Swal.fire({
    title: "Logout?",
    text: "Are you sure you want to logout?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#16a34a",
    cancelButtonColor: "#ef4444",
    confirmButtonText: "Yes, Logout",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      logoutUser(undefined, {
        onSuccess: () => {
          Swal.fire({
            icon: "success",
            title: "Logged Out",
            text: "You have been logged out successfully.",
            timer: 1500,
            showConfirmButton: false,
          });

          navigate("/login", { replace: true });
        },

        onError: () => {
          Swal.fire({
            icon: "error",
            title: "Logout Failed",
            text: "Something went wrong.",
          });
        },
      });
    }
  });
};