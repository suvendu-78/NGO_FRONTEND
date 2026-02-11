import { useEffect, useState } from "react";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookOrders")) || [];
    setOrders(stored);
  }, []);

  const downloadInvoice = (order) => {
    const invoiceWindow = window.open("", "_blank");

    invoiceWindow.document.write(`
      <html>
      <head>
        <title>Invoice ${order.orderId}</title>
        <style>
          body { font-family: Arial; padding: 20px; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          td, th { border: 1px solid #ccc; padding: 8px; }
          th { background: #f2f2f2; }
        </style>
      </head>
      <body>
        <h1>Sahitya Store Invoice</h1>
        <p><strong>Order ID:</strong> ${order.orderId}</p>
        <p><strong>Date:</strong> ${new Date(order.orderDate).toLocaleDateString()}</p>
        <p><strong>Estimated Delivery:</strong> ${new Date(order.estimatedDelivery).toLocaleDateString()}</p>

        <h3>Customer</h3>
        <p>${order.customerName}</p>
        <p>${order.customerEmail}</p>
        <p>${order.phone}</p>
        <p>${order.address} - ${order.pincode}</p>

        <table>
          <tr>
            <th>Book</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>${order.title}</td>
            <td>${order.author}</td>
            <td>₹${order.price}</td>
          </tr>
        </table>

        <h2>Total: ₹${(order.price * 1.05).toFixed(2)}</h2>
      </body>
      </html>
    `);

    invoiceWindow.document.close();
    invoiceWindow.print();
  };

  return (
    <div className="min-h-screen bg-[#fdf6ef] p-8">
      <h1 className="text-3xl font-bold mb-6">📦 Order History</h1>

      {orders.length === 0 && <p>No orders yet.</p>}

      {orders.map((order) => (
        <div key={order.id} className="bg-white p-6 rounded-xl shadow mb-4">
          <h3 className="font-bold">{order.title}</h3>
          <p>Author: {order.author}</p>
          <p>Price: ₹{order.price}</p>
          <p>Status: {order.status}</p>
          <p>
            Estimated Delivery:{" "}
            {new Date(order.estimatedDelivery).toLocaleDateString()}
          </p>

          <button
            onClick={() => downloadInvoice(order)}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Download Invoice
          </button>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
