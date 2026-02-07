import { SignIn } from "@clerk/clerk-react";

const AdminLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <SignIn
          routing="path"
          path="/adminlogin"
          signUpUrl="/adminlogin"
          appearance={{
            elements: {
              card: "shadow-xl rounded-xl",
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
            },
          }}
        />
      </div>
    </div>
  );
};

export default AdminLogin;
