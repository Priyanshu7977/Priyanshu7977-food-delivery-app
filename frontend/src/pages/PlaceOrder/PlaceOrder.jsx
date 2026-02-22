import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const subtotal = getTotalCartAmount();
  const [showOffers, setShowOffers] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [appliedCode, setAppliedCode] = useState("");

  const delivery = subtotal === 0 ? 0 : 5;
  const total = subtotal + delivery - discount;

  const offers = [
    {
      code: "SAVE20",
      label: "20% OFF (Max $50)",
      apply: () => {
        if (subtotal < 100) return "Cart value too low";
        const disc = Math.min(subtotal * 0.2, 50);
        setDiscount(disc);
        setAppliedCode("SAVE20");
        return "Applied";
      }
    },
    {
      code: "BIG100",
      label: "$100 OFF on orders above $500",
      apply: () => {
        if (subtotal < 500) return "Cart value too low";
        setDiscount(100);
        setAppliedCode("BIG100");
        return "Applied";
      }
    },
    {
      code: "FREESHIP",
      label: "Free Delivery",
      apply: () => {
        if (subtotal < 50) return "Cart value too low";
        setDiscount(5);
        setAppliedCode("FREESHIP");
        return "Applied";
      }
    }
  ];

  const handlePayment = (e) => {
    e.preventDefault();
    if (subtotal === 0) {
      alert("Cart is empty");
      return;
    }
    alert("Payment Successful ✅");
    navigate("/home");
  };

  return (
    <div className="place-order-container">

      <form className="place-order" onSubmit={handlePayment}>

        <div className="place-order-left">
          <h2>Delivery Information</h2>

          <div className="grid-2">
            <input placeholder="First Name" required />
            <input placeholder="Last Name" required />
          </div>

          <input placeholder="Email" required />
          <input placeholder="Address" required />

          <div className="grid-2">
            <input placeholder="City" required />
            <input placeholder="State" required />
          </div>

          <div className="grid-2">
            <input placeholder="Zip Code" required />
            <input placeholder="Phone Number" required />
          </div>
        </div>


        <div className="place-order-right">

          <div className="promo-section">

            <button
              type="button"
              className="toggle-offers"
              onClick={() => setShowOffers(!showOffers)}
            >
              {showOffers ? "Hide Offers" : "Have a promo code?"}
            </button>

            {showOffers && (
              <div className="offers-box">
                {offers.map((offer, index) => {
                  const result =
                    appliedCode === offer.code
                      ? "Applied"
                      : "";

                  return (
                    <div
                      key={index}
                      className={`offer-card ${
                        appliedCode === offer.code ? "active" : ""
                      }`}
                      onClick={() => {
                        const res = offer.apply();
                        if (res === "Cart value too low") {
                          alert("Cart value too low");
                        }
                      }}
                    >
                      <strong>{offer.code}</strong>
                      <span>{offer.label}</span>
                    </div>
                  );
                })}
              </div>
            )}

          </div>

          <div className="cart-total">

            <h2>Cart Total</h2>

            <div className="row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="row">
              <span>Delivery</span>
              <span>${delivery.toFixed(2)}</span>
            </div>

            {discount > 0 && (
              <div className="row discount">
                <span>Discount</span>
                <span>- ${discount.toFixed(2)}</span>
              </div>
            )}

            <hr />

            <div className="row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button type="submit">
              PROCEED TO PAYMENT
            </button>

          </div>
        </div>

      </form>

    </div>
  );
};

export default PlaceOrder;