import React from "react";
import './cop.css';
function CheckoutPage() {
  return <div className="Checkoutpage">
   <div className="upperdata">
 <div className="lsdata">
        
    <form action="" className="innerdataf">
    <h3>Billing details</h3>
      <div className="ls">
        <label htmlFor="">FIRST NAME</label>
        <input type="text" />
      </div>
      <div className="rs">
        <label htmlFor="">LAST NAME</label>
        <input type="text" />
      </div>
      <div className="ls">
        <label htmlFor="">PHONE</label>
        <input type="text" />
      </div>
      <div className="rs">
        <label htmlFor="">EMAIL</label>
        <input type="text" />
      </div>
      <div className="ls">
        <label htmlFor="">CITY</label>
        <input type="text" />
      </div>
      <div className="rs">
        <label htmlFor="">COUNTRY</label>
        <input type="text" />
      </div>
      <div className="ls">
        <label htmlFor="">POST CODE</label>
        <input type="text" />
      </div>
      <div className="rs">
        <label htmlFor="">STREET ADRESS</label>
        <input type="text" />
      </div>
    </form>
    
 </div>
 <div className="rsdata">
  <div className="rsdinnerd">

    <p>Your order</p>

    <span>Product Quantity</span>
    <span>Sub total</span>
    <h3>Total</h3>
    <label htmlFor="">Cash on delivery <input type="radio" /></label>
    <button className="pobtn">Place order</button>
 </div>
 </div>
   </div>
      <div className="betweendetail">
        <p> Shipping adress will same as billing adress</p>
        <input type="checkbox" className="cbb"/>
      </div>
      <div className="deepdata">
       <div className="lsdata">        
    <form action="" className="innerdataf">
    <h3>Shipping details</h3>
      <div className="ls">
        <label htmlFor="">FIRST NAME</label>
        <input type="text" />
      </div>
      <div className="rs">
        <label htmlFor="">LAST NAME</label>
        <input type="text" />
      </div>
      <div className="ls">
        <label htmlFor="">PHONE</label>
        <input type="text" />
      </div>
      <div className="rs">
        <label htmlFor="">EMAIL</label>
        <input type="text" />
      </div>
      <div className="ls">
        <label htmlFor="">CITY</label>
        <input type="text" />
      </div>
      <div className="rs">
        <label htmlFor="">COUNTRY</label>
        <input type="text" />
      </div>
      <div className="ls">
        <label htmlFor="">POST CODE</label>
        <input type="text" />
      </div>
      <div className="rs">
        <label htmlFor="">STREET ADRESS</label>
        <input type="text" />
      </div>
    </form>
      </div>
  </div>
  </div>

}
export default CheckoutPage;
