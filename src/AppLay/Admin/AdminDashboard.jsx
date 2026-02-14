import { useEffect, useState } from "react";
import bgthim from "../../assets/bgthim.png";
const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/user/admin/orders", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const updateStatus = async (orderId, status) => {
    await fetch(`http://localhost:8000/api/admin/order/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ status }),
    });

    setOrders((prev) =>
      prev.map((o) => (o._id === orderId ? { ...o, status } : o)),
    );
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${bgthim})` }}
    >
      {/* Glass Card Container */}
      <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-orange-700">Orders</h1>

        <div className="overflow-x-auto">
          <table className="w-full border border-orange-200">
            <thead className="bg-orange-100">
              <tr>
                <th className="p-3 border">User</th>
                <th className="p-3 border">Book</th>
                <th className="p-3 border">Qty</th>
                <th className="p-3 border">Total</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-orange-50 transition">
                  <td className="p-2 border">{order.user.email}</td>
                  <td className="p-2 border">{order.book.title}</td>
                  <td className="p-2 border">{order.quantity}</td>
                  <td className="p-2 border">₹{order.totalPrice}</td>
                  <td className="p-2 border font-semibold text-orange-700">
                    {order.status}
                  </td>
                  <td className="p-2 border">
                    <select
                      className="border border-orange-300 rounded-md p-1 focus:outline-none"
                      value={order.status}
                      onChange={(e) => updateStatus(order._id, e.target.value)}
                    >
                      <option>Pending</option>
                      <option>Shipped</option>
                      <option>Delivered</option>
                      <option>Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;