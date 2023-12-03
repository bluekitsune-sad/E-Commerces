import React from "react";
import './CP.css';

function CartPage() {
  return (
<div className="cartpage">
    <div className="lsbar">
<div className="lsbdata">
<table className="tabled">
  <tr className="trh">
    <th>Image</th>
    <th>Product name</th>
    <th>price</th>
    <th>Quantity</th>
    <th>Total (Rs)</th>
    <th>Action</th>

  </tr>
  <tr >
    <td>img</td>
    <td>Shirt</td>
    <td>$20</td>
    <td>2</td>
    <td>20$</td>
    <td>Ordered</td>
  </tr>
  <tr>
  <td>img</td>
    <td>Shirt</td>
    <td>$20</td>
    <td>2</td>
    <td>20$</td>
    <td>Ordered</td>
  </tr>
</table>
</div>
    </div>
    <div className="rsbar">
       <div className="tabledata">
         <div className="ct">
          <p>Cart Total</p>
          <hr />
         </div>
         <div className="st">
          <p>Sub Total</p>
          <hr />
         </div>
         <div className="t">
          <p className="tcolor">Total</p>
        
         </div>
       <div className="btncart">
        <button className="bcr" >Proceed to checkout</button>
       </div>
       </div>
    </div>
  </div>
  )
  ;
}

export default CartPage;
