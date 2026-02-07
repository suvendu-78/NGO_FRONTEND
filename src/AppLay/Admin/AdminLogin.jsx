import { SignIn } from "@clerk/clerk-react";

export default function AdminLogin() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn
        routing="path"
        path="/adminlogin"
        signUpUrl="/register"
        afterSignInUrl="/adminBooks"
        redirectUrl="/adminBooks"
      />
    </div>
  );
}
