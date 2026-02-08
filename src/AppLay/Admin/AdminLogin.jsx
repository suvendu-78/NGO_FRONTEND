import { SignIn, useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function AdminLogin() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return null;

  // ✅ Already logged in AND admin
  if (user && user.publicMetadata?.role === "admin") {
    return <Navigate to="/adminBooks" replace />;
  }

  // ❌ Logged in but NOT admin
  if (user && user.publicMetadata?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn
        routing="path"
        path="/adminlogin"
        forceRedirectUrl="/adminBooks"
        signUpUrl="/register"
      />
    </div>
  );
}
