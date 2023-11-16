// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// // import CartContext from "path/to/your/context";
// import "./CartPage.css";

// const CartPage = () => {
//   const { cartItems, removeFromCart } = useContext(CartContext);

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price, 0);
//   };

//   const calculateSubtotal = () => {
//     return calculateTotal();
//   };

//   return (
//     <div className="cart-page">
//       <div className="cart-page-sections">
//         <div className="cart-items-section">
//           <h2>Your Shopping Cart</h2>
//           <div className="cart-table">
//             <table className="cart-item-table">
//               <thead>
//                 <tr className="table-header-row">
//                   <th>Product</th>
//                   <th>Price</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.map((item) => (
//                   <tr key={item.id}>
//                     <td>{item.name}</td>
//                     <td>${item.price}</td>
//                     <td>
//                       <button onClick={() => removeFromCart(item)}>
//                         Remove
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="cart-summary-section">
//           <div className="cart-summary">
//             <h3>Order Summary</h3>
//             <div>
//               <span>Subtotal:</span>
//               <span>${calculateSubtotal()}</span>
//             </div>
//             <div>
//               <span>Total:</span>
//               <span>${calculateTotal()}</span>
//             </div>
//             <Link to="/checkout" className="proceed-to-checkout-btn">
//               <button className="checkout-btn">Proceed to Checkout</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
