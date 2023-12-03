import React from "react";
import "./productDetails.css";
import second from '../images/b20.jpg';

function productDetails() {
  return (
    <div className="container gaping">
       <div className="row">
       <div className="col-xl-3">
          <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fweb-banners-template-set-with-text-space_1017-30732.jpg&tbnid=yUynvSAnEmtdvM&vet=12ahUKEwjPuPe-ociCAxXeuCcCHdJXB1UQMygBegQIARB2..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fbanner-design&docid=2uTeXApRd7t4UM&w=626&h=514&q=banner&ved=2ahUKEwjPuPe-ociCAxXeuCcCHdJXB1UQMygBegQIARB2" alt="" srcset="" width={50}/>
        </div>
        <div className="col-xl 6">
          <h2 className="fw-bold">
            Heading
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, facere. Reprehenderit cum qui eaque ipsa nisi aperiam, ipsum sint voluptatibus labore neque. Molestiae quia qui sint ea numquam quos laboriosam!
          </p>
          <div className="row text-center">
            <div className="col-xl-2">
              Selection
                <input class="form-check-input mt-3" type="radio" name="" id=""/>

            </div>
            <div className="col-xl-5">
              Dukan Name
              <p className="fs-5 mt-3">
                Demo Pharmacy
              </p>
            </div>
            <div className="col-xl-3">
              Price
              <p className="fw-semibold mt-3">
                Rs.500
              </p>
            </div>
            <div className="col-xl-2">
              Quantity
              <p className=" mt-3">
                X
              </p>
            </div>

          </div>
        </div>
        <div className="col-xl-3 ps-5 right-bar">
          <p > This product is available in following places : </p>
          <br />
          <p className="m-0">COUNTRY : dldkdd</p>
          <p>CITY : dldkdd</p>

        </div>
       </div>
          
    </div>
  );
}

export default productDetails;
