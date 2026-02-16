import { useEffect, useState } from "react";
import {
  CheckCircle,
  Download,
  Info,
  Clock,
  Calendar,
  Hash,
} from "lucide-react";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(
          "http://localhost:8000/api/v1/user/my-orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();

        if (data.success) {
          setOrders(data.orders);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  const downloadInvoice = (order) => {
    const invoiceWindow = window.open("", "_blank");

    const orderDateObj = new Date(order.createdAt);
    const deliveryDateObj = new Date(order.deliveryDate);

    invoiceWindow.document.write(`
      <html>
      <head>
        <title>Invoice ${order._id}</title>
        <style>
          body { font-family: Arial; padding: 20px; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          td, th { border: 1px solid #ccc; padding: 8px; }
          th { background: #f2f2f2; }
        </style>
      </head>
      <body>
        <h1>Sahitya Store Invoice</h1>
        <p><strong>Order ID:</strong> ${order._id}</p>
        <p><strong>Order Date:</strong> ${orderDateObj.toLocaleDateString()}</p>
        <p><strong>Order Time:</strong> ${orderDateObj.toLocaleTimeString()}</p>
        <p><strong>Estimated Delivery:</strong> ${deliveryDateObj.toLocaleDateString()}</p>

        <h3>Books</h3>
        <table>
          <tr>
            <th>Book</th>
            <th>Price</th>
            <th>Qty</th>
          </tr>
          ${order.books
            .map(
              (book) => `
              <tr>
                <td>${book.name}</td>
                <td>₹${book.price}</td>
                <td>${book.quantity}</td>
              </tr>
            `
            )
            .join("")}
        </table>

        <h2>Total: ₹${order.totalPrice}</h2>
      </body>
      </html>
    `);

    invoiceWindow.document.close();
    invoiceWindow.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-yellow-50 p-8">
      {/* TITLE */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-amber-800 inline-block relative">
          📦 Your Order History
          <span className="block h-1 bg-amber-600 mt-2 rounded-full"></span>
        </h1>
      </div>

      {orders.length === 0 && (
        <p className="text-center text-gray-600 text-lg">
          No orders yet.
        </p>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {orders.map((order) => {
          const orderDateObj = new Date(order.createdAt);
          const deliveryDateObj = new Date(order.deliveryDate);

          return (
            <div
              key={order._id}
              className="bg-white rounded-2xl shadow-xl p-6 border border-amber-200"
            >
              {/* HEADER */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-amber-700">
                  Order Summary
                </h3>

                <span className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  <CheckCircle size={16} />
                  {order.status}
                </span>
              </div>

              {/* ORDER ID */}
              <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                <Hash size={16} />
                <span>
                  <strong>Order ID:</strong> {order._id}
                </span>
              </div>

              {/* DATE */}
              <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                <Calendar size={16} />
                <span>
                  <strong>Order Date:</strong>{" "}
                  {orderDateObj.toLocaleDateString()}
                </span>
              </div>

              {/* TIME */}
              <div className="flex items-center gap-2 text-sm text-gray-700 mb-3">
                <Clock size={16} />
                <span>
                  <strong>Order Time:</strong>{" "}
                  {orderDateObj.toLocaleTimeString()}
                </span>
              </div>

              {/* BOOK LIST */}
              <div className="space-y-2 text-gray-700">
                {order.books.map((book, index) => (
                  <div key={index} className="border-b pb-2">
                    <p><strong>{book.name}</strong></p>
                    <p>Price: ₹{book.price}</p>
                    <p>Quantity: {book.quantity}</p>
                  </div>
                ))}
              </div>

              {/* DELIVERY */}
              <div className="mt-4 text-gray-700">
                <p>
                  <strong>Estimated Delivery:</strong>{" "}
                  {deliveryDateObj.toLocaleDateString()}
                </p>
              </div>

              {/* INFO */}
              <div className="mt-4 flex items-start gap-2 bg-blue-50 p-3 rounded-lg border border-blue-200 text-blue-800 text-sm">
                <Info size={18} className="mt-1" />
                <p>
                  For far locations, delivery may take slightly longer than expected.
                  We sincerely apologize for the inconvenience and thank you for
                  considering us.
                </p>
              </div>

              {/* TOTAL */}
              <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                <p className="font-semibold text-amber-800">
                  Total: ₹{order.totalPrice}
                </p>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => downloadInvoice(order)}
                className="mt-5 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl"
              >
                <Download size={18} />
                Download Invoice
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderHistory;
