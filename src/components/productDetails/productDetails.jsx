import React from "react";
import "./productDetails.css";
import second from "../images/b20.jpg";

function productDetails() {
  return (
    <div className="container gaping">
      <div className="row">
        <img
          src="https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg"
          alt=""
          srcset=""
          width={50}
          height={500}
        />
        <div className="container">
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            facere. Reprehenderit cum qui eaque ipsa nisi aperiam, ipsum sint
            voluptatibus labore neque. Molestiae quia qui sint ea numquam quos
            laboriosam!
          </p>
          <p>This product is available in following places:</p>
          <ul>
            <li>COUNTRY: didkdd</li>
            <li>CITY: didkdd</li>
          </ul>
          <table>
            <tr>
              <th>Selection</th>
              <th>Dukan Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
            <tr>
              <td></td>
              <td>Demo Pharmacy</td>
              <td>Rs.500</td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default productDetails;
