import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

const Admin = () => {
  return (
    <>
      <SignedIn>
        <h1 className="text-3xl font-bold p-10">Admin Dashboard 🔐</h1>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default Admin;
