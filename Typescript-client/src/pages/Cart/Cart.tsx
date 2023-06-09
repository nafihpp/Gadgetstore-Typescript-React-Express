import React from "react";
import { CartCard } from "../../components/CartCard"
import { CartContext } from "../../context/CartContext/CartContext"
import "./Cart.css";
import 'react-toastify/dist/ReactToastify.css';
import { CartReducer } from "../../context/CartContext/CartReducer";

export const Cart = () => {
    const { cart } = React.useContext(CartContext);
    const [state, dispatch] = React.useReducer(CartReducer, { currentState: cart });
    let isCartLength = cart?.length !== 0;
    const [couponCode, setCouponCode] = React.useState('');
    const handleCouponCodeChange = (e: any) => {
        setCouponCode(e?.target?.value);
    };
    const totalAmount = () => {
        const total = cart?.reduce((acc: number, item: any): number => {
            console.log(acc);
            return acc = item?.price * item?.quantity;
        }, 0)
        return total;
    }
    return (
        <div className="cart-page">
            <h1 className="cart-title">Cart</h1>
            <div className="cart-items">
                <div className="card-container">
                    {/* Render the cart items here */}
                    {cart?.length !== 0 ? (
                        cart?.map((cartproduct) => (
                            <CartCard cartproduct={cartproduct} key={cartproduct?.id} />
                        ))
                    ) : (
                        <h1>Your cart is empty.</h1>
                    )}
                </div>
            </div>
            {isCartLength && <div className="coupon-container">
                <p>Have a Coupon Code??</p>
                <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={handleCouponCodeChange}
                    className="coupon-input"
                />
                <button className="coupon-button" onClick={handleCouponCodeChange} >
                    Apply Coupon
                </button>
            </div>}
            {isCartLength && <div className="cart-total">
                <h2 className="total-text">Sub Total: AED {totalAmount()}</h2>
                <h2 className="total-text">Coupon Discount: AED {100}</h2>
                <h2 className="total-text">Total: AED {100}</h2>
            </div>}
            {isCartLength && <button className="checkout-button">Checkout</button>}
        </div>
    )
}
