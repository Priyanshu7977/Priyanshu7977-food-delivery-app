import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { total } = location.state || { total: 0 };

  const orderId = "TMT" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="order-success">
      <div className="success-card">

        <div className="checkmark">✔</div>

        <h1>Order Placed Successfully</h1>

        <p>Order ID: <strong>{orderId}</strong></p>
        <p>Total Paid: <strong>${total}</strong></p>

        <button onClick={() => navigate("/home")}>
          Continue Shopping
        </button>

      </div>
    </div>
  );
};

export default OrderSuccess;