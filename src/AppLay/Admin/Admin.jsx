// import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

// const Admin = () => {
//   return (
//     <>
//       <SignedIn>
//         <h1 className="text-3xl font-bold p-10">Admin Dashboard 🔐</h1>
//       </SignedIn>

//       <SignedOut>
//         <RedirectToSignIn />
//       </SignedOut>
//     </>
//   );
// };

// export default Admin;

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import AdminGuard from "../guards/AdminGuard";

const Admin = () => {
  return (
    <>
      <SignedIn>
        <AdminGuard>
          <h1 className="text-3xl font-bold p-10">
            Admin Dashboard 🔐
          </h1>
        </AdminGuard>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default Admin;
