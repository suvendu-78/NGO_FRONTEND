import { NavLink } from "react-router-dom";
const AdminLogin = () => {
  return (
    <>
      <h1>AdminLogin</h1>
      <NavLink to="/adminBooks">
        <p>BookUpload</p>
      </NavLink>
    </>
  );
};
export default AdminLogin;
