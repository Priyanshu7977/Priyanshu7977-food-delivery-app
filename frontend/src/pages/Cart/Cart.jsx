import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { 
    cartItems, 
    food_list, 
    removeFromCart, 
    addToCart, 
    getTotalCartAmount 
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const subtotal = getTotalCartAmount();
  const delivery = subtotal === 0 ? 0 : 5;
  const total = subtotal + delivery;

  return (
    <div className='cart'>

      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr />

        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className='cart-items-item'>

                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>

                  {/* QUANTITY CONTROL */}
                  <div className="quantity-control">
                    <button 
                      onClick={() => removeFromCart(item._id)}
                    >
                      -
                    </button>

                    <span>{cartItems[item._id]}</span>

                    <button 
                      onClick={() => addToCart(item._id)}
                    >
                      +
                    </button>
                  </div>

                  <p>${item.price * cartItems[item._id]}</p>

                  <p 
                    onClick={() => removeFromCart(item._id)} 
                    className='cross'
                  >
                    X
                  </p>

                </div>
                <hr />
              </div>
            )
          }
          return null;
        })}

      </div>


      <div className="cart-bottom">

        <div className="cart-total">
          <h2>Cart Total</h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>

          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${delivery}</p>
          </div>

          <hr />

          <div className="cart-total-details">
            <b>Total</b>
            <b>${total}</b>
          </div>

          <button 
            disabled={subtotal === 0}
            onClick={() => navigate('/order')}
          >
            {subtotal === 0 ? "CART IS EMPTY" : "PROCEED TO CHECKOUT"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default Cart;