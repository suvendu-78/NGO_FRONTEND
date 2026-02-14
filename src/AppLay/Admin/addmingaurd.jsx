// import { useUser } from "@clerk/clerk-react";
// import { Navigate } from "react-router-dom";

// const AdminGuard = ({ children }) => {
//   const { user, isLoaded } = useUser();

//   if (!isLoaded) return null;

//   if (user?.publicMetadata?.role !== "admin") {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default AdminGuard;
