import React from "react";
import { cityOptions, countryOptions } from "./components/Constants/Constant";

function extra() {
  return (
    <div>
      <div className="page-wrapper">
        <header className="header header-intro-clearance header-4">
          <div className="header-top">
            <div className="container">
              <div className="header-left">
                {/*<a href="mailto:info@dukan24h.com" style="margin-left:7px;">Email: info@dukan24h.com</a>*/}
                <a
                  href="#signin-modal"
                  className="btn btn-primary"
                  id="signinmodal"
                  data-toggle="modal"
                >
                  Shop - Login / Register
                </a>
              </div>
              {/* End .header-left */}
              <div className="header-right">
                <a
                  href="#signin-modal-user"
                  className="btn btn-primary"
                  id="signin-modal-user-btn"
                  data-toggle="modal"
                >
                  Customer - Login / Register
                </a>
              </div>
            </div>
            {/* End .container */}
          </div>
          {/* End .header-top */}
          <div className="header-middle sticky-header border">
            <div className="container">
              <div className="header-left">
                <button className="mobile-menu-toggler">
                  <span className="sr-only">Toggle mobile menu</span>
                  <i className="icon-bars" />
                </button>
                <a href="https://dukan24h.com" className="logo">
                  <img
                    src="https://dukan24h.com/public/d24h/userend/assets/images/logo/logo-head.png"
                    alt="Dukan24h"
                  />
                </a>
              </div>
              {/* End .header-left */}
              <div className="header-center">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                            .scroll_div {\n overflow-y: scroll; height:327px;touch-action: pan-y;\n}\n.scroll_div::-webkit-scrollbar {\n    width: 2px;\n}\n.scroll_div::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    border-radius: 10px;\n}\n.scroll_div::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);\n}\n.h6{\n    font-size:13px;\n}\n                        ",
                  }}
                />
                <div
                  className="dropdown category-dropdown "
                  data-visible="false"
                >
                  <a
                    href="#"
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-display="static"
                    title="Browse Categories"
                  >
                    Browse Categories
                  </a>
                  <div className="dropdown-menu " style={{}}>
                    <nav className="side-nav">
                      <input
                        type="text"
                        id="myInput"
                        onkeyup="myFunction()"
                        className="form-control"
                        placeholder="Search for names.."
                        title="Type in a name"
                      />
                      <ul
                        className="menu-vertical sf-arrows sf-js-enabled scroll_div"
                        id="category_search"
                      >
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Pharmacy / Grocery store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row">
                                    <div className="col-md-4">
                                      <a
                                        href="https://dukan24h.com/shopProducts/demo-pharmacy"
                                        alt="Demo Pharmacy"
                                      >
                                        <div className="menu-title row p-2">
                                          <div className="col-md-8">
                                            Demo Pharmacy99999
                                          </div>
                                          <div className="col-md-4">
                                            <img
                                              src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1680687323.png"
                                              alt="Shop image"
                                              width={40}
                                              height={40}
                                              style={{ float: "right" }}
                                            />
                                          </div>
                                        </div>
                                        {/* End .menu-title */}
                                      </a>
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Phone:
                                        </span>
                                        03332071178
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Email:
                                        </span>
                                        mindaqua.faisal@gmail.com
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Address:
                                        </span>
                                        dha{" "}
                                      </span>
                                    </div>
                                    {/* End .col-md-4 */}
                                    <div className="col-md-4">
                                      <a
                                        href="https://dukan24h.com/shopProducts/arora-farms"
                                        alt="Arora Farms"
                                      >
                                        <div className="menu-title row p-2">
                                          <div className="col-md-8">
                                            Arora Farms99999
                                          </div>
                                          <div className="col-md-4">
                                            <img
                                              src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1690805637.jpeg"
                                              alt="Shop image"
                                              width={40}
                                              height={40}
                                              style={{ float: "right" }}
                                            />
                                          </div>
                                        </div>
                                        {/* End .menu-title */}
                                      </a>
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Phone:
                                        </span>
                                        03331234567
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Email:
                                        </span>
                                        aghanisiil@gmail.com
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Address:
                                        </span>
                                        pechs karachi pakistan{" "}
                                      </span>
                                    </div>
                                    {/* End .col-md-4 */}
                                    <div className="col-md-4">
                                      <a
                                        href="https://dukan24h.com/shopProducts/zncpharmacy"
                                        alt="ZNCPharmacy"
                                      >
                                        <div className="menu-title row p-2">
                                          <div className="col-md-8">
                                            ZNCPharmacy99999
                                          </div>
                                          <div className="col-md-4">
                                            <img
                                              src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1698383419.png"
                                              alt="Shop image"
                                              width={40}
                                              height={40}
                                              style={{ float: "right" }}
                                            />
                                          </div>
                                        </div>
                                        {/* End .menu-title */}
                                      </a>
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Phone:
                                        </span>
                                        03211234567
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Email:
                                        </span>
                                        znc.pharmacy.clinic@gmail.com
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Address:
                                        </span>
                                        Shop No. S1, Plot No. SB-25, Sector Y,
                                        Sub Sector II, Gulshan-e-Maymar,
                                        Karachi, Pakistan{" "}
                                      </span>
                                    </div>
                                    {/* End .col-md-4 */}
                                  </div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Electrical store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row">
                                    <div className="col-md-4">
                                      <a
                                        href="https://dukan24h.com/shopProducts/gadgetguyspk"
                                        alt="gadgetguys.pk"
                                      >
                                        <div className="menu-title row p-2">
                                          <div className="col-md-8">
                                            gadgetguys.pk99999
                                          </div>
                                          <div className="col-md-4">
                                            <img
                                              src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1672481675.png"
                                              alt="Shop image"
                                              width={40}
                                              height={40}
                                              style={{ float: "right" }}
                                            />
                                          </div>
                                        </div>
                                        {/* End .menu-title */}
                                      </a>
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Phone:
                                        </span>
                                        03199228093
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Email:
                                        </span>
                                        gadgetguys.pk@gmail.com
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Address:
                                        </span>
                                        I.I.Chundrugar Road.{" "}
                                      </span>
                                    </div>
                                    {/* End .col-md-4 */}
                                    <div className="col-md-4">
                                      <a
                                        href="https://dukan24h.com/shopProducts/kmh-electric"
                                        alt="KMH Electric Store"
                                      >
                                        <div className="menu-title row p-2">
                                          <div className="col-md-8">
                                            KMH Electric Store99999
                                          </div>
                                          <div className="col-md-4">
                                            <img
                                              src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1673701252.jpeg"
                                              alt="Shop image"
                                              width={40}
                                              height={40}
                                              style={{ float: "right" }}
                                            />
                                          </div>
                                        </div>
                                        {/* End .menu-title */}
                                      </a>
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Phone:
                                        </span>
                                        03222891217
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Email:
                                        </span>
                                        imadkhatri7@gmail.com
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Address:
                                        </span>
                                        Ali Budha Street, Bohra Pir , Ranchor
                                        Line, Karachi.{" "}
                                      </span>
                                    </div>
                                    {/* End .col-md-4 */}
                                  </div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            E-commerce Apparel store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row">
                                    <div className="col-md-4">
                                      <a
                                        href="https://dukan24h.com/shopProducts/fizas-collection"
                                        alt="FIZA'S Collection"
                                      >
                                        <div className="menu-title row p-2">
                                          <div className="col-md-8">
                                            FIZA'S Collection99999
                                          </div>
                                          <div className="col-md-4">
                                            <img
                                              src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1676955525.png"
                                              alt="Shop image"
                                              width={40}
                                              height={40}
                                              style={{ float: "right" }}
                                            />
                                          </div>
                                        </div>
                                        {/* End .menu-title */}
                                      </a>
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Phone:
                                        </span>
                                        03323646776
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Email:
                                        </span>
                                        sanaullah.ishaq985@gmail.com
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Address:
                                        </span>
                                        Scheme 33 Karachi, Pakistan{" "}
                                      </span>
                                    </div>
                                    {/* End .col-md-4 */}
                                  </div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Antique shop
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Art supply store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row">
                                    <div className="col-md-4">
                                      <a
                                        href="https://dukan24h.com/shopProducts/add-value-advertiser"
                                        alt="Add Value Advertiser"
                                      >
                                        <div className="menu-title row p-2">
                                          <div className="col-md-8">
                                            Add Value Advertiser99999
                                          </div>
                                          <div className="col-md-4">
                                            <img
                                              src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1678086752.jpg"
                                              alt="Shop image"
                                              width={40}
                                              height={40}
                                              style={{ float: "right" }}
                                            />
                                          </div>
                                        </div>
                                        {/* End .menu-title */}
                                      </a>
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Phone:
                                        </span>
                                        03152571880
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Email:
                                        </span>
                                        hameedcreator01@gmail.com
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Address:
                                        </span>
                                        B-27, Mez Floor, Rabia City,
                                        Gulastan-e-Johar, Block-18, Karachi,
                                        Pakistan{" "}
                                      </span>
                                    </div>
                                    {/* End .col-md-4 */}
                                  </div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Bakery store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row">
                                    <div className="col-md-4">
                                      <a
                                        href="https://dukan24h.com/shopProducts/celebrations-the-cake-shop"
                                        alt="Celebrations (The cake shop)"
                                      >
                                        <div className="menu-title row p-2">
                                          <div className="col-md-8">
                                            Celebrations (The cake shop)99999
                                          </div>
                                          <div className="col-md-4">
                                            <img
                                              src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1698384148.jpeg"
                                              alt="Shop image"
                                              width={40}
                                              height={40}
                                              style={{ float: "right" }}
                                            />
                                          </div>
                                        </div>
                                        {/* End .menu-title */}
                                      </a>
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Phone:
                                        </span>
                                        03232561636
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Email:
                                        </span>
                                        kinzaaamir2@gmail.com
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Address:
                                        </span>
                                        B-201 "Ansari tower" North nazimabad
                                        block I{" "}
                                      </span>
                                    </div>
                                    {/* End .col-md-4 */}
                                  </div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Beauty &amp; body care products store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Bookstore
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row">
                                    <div className="col-md-4">
                                      <a
                                        href="https://dukan24h.com/shopProducts/saima-a-ghafoor"
                                        alt="Saima A ghafoor"
                                      >
                                        <div className="menu-title row p-2">
                                          <div className="col-md-8">
                                            Saima A ghafoor99999
                                          </div>
                                          <div className="col-md-4">
                                            <img
                                              src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1690793741.jpg"
                                              alt="Shop image"
                                              width={40}
                                              height={40}
                                              style={{ float: "right" }}
                                            />
                                          </div>
                                        </div>
                                        {/* End .menu-title */}
                                      </a>
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Phone:
                                        </span>
                                        03242006465
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Email:
                                        </span>
                                        saimasagt@gmail.com
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Address:
                                        </span>
                                        B 36 Street 13 sector x2 Gulshan maymar{" "}
                                      </span>
                                    </div>
                                    {/* End .col-md-4 */}
                                  </div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Butcher store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Candy store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Car accessories
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Car store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Cleaning supplies store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Clothes shop
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Coffee shop
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Convenience store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Cosmetics &amp; make up store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Department store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row">
                                    <div className="col-md-4">
                                      <a
                                        href="https://dukan24h.com/shopProducts/munawar-store"
                                        alt="Munawar Store"
                                      >
                                        <div className="menu-title row p-2">
                                          <div className="col-md-8">
                                            Munawar Store99999
                                          </div>
                                          <div className="col-md-4">
                                            <img
                                              src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1679408942.jpg"
                                              alt="Shop image"
                                              width={40}
                                              height={40}
                                              style={{ float: "right" }}
                                            />
                                          </div>
                                        </div>
                                        {/* End .menu-title */}
                                      </a>
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Phone:
                                        </span>
                                        02132511304
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Email:
                                        </span>
                                        slikclick2@gmail.com
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Address:
                                        </span>
                                        Ghulam Hussain building , 1st floor
                                        chalna gali jodia bazaar, Karachi
                                        Pakistan{" "}
                                      </span>
                                    </div>
                                    {/* End .col-md-4 */}
                                  </div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Disabled accessories store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Discount store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            E-commerce store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Electrical Industrial store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Electronics Store{" "}
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Fishing shop
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Florist
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Furniture store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row">
                                    <div className="col-md-4">
                                      <a
                                        href="https://dukan24h.com/shopProducts/zaryab-furniture-store"
                                        alt="Zaryab  Furniture Store"
                                      >
                                        <div className="menu-title row p-2">
                                          <div className="col-md-8">
                                            Zaryab Furniture Store99999
                                          </div>
                                          <div className="col-md-4">
                                            <img
                                              src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1698381365.jpeg"
                                              alt="Shop image"
                                              width={40}
                                              height={40}
                                              style={{ float: "right" }}
                                            />
                                          </div>
                                        </div>
                                        {/* End .menu-title */}
                                      </a>
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Phone:
                                        </span>
                                        03032563283
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Email:
                                        </span>
                                        khanzar996@gmail.com
                                      </span>
                                      <br />
                                      <span className="h6 text-black">
                                        {" "}
                                        <span className="text-muted">
                                          Address:
                                        </span>
                                        3/1017 liaquatabad near bilal
                                        masjid,karachi{" "}
                                      </span>
                                    </div>
                                    {/* End .col-md-4 */}
                                  </div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Gaming Store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Garden store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Gift shop
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Greengrocer
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Grocery store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Handbags store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Hardware store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Herbal store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Home appliances &amp; household goods store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Home decor store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Hunting shop
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Hypermarket
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Jewelry store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Kiosk
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Music shop
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Organic food store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Pet store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Pharmacy / Drug store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Regional foods store{" "}
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Retail outlet{" "}
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Scented candles, soap and perfume shop
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Sculptures, paintings and art store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Shoe store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Skate shop
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Souvenir shop
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Stall
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Stationery shop
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Supermarket
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Thrift store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Tobacco shop
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Toy store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Vape shop
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Warehouse store
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                        <li className="megamenu-container show">
                          <a className="sf-with-ul" href="#">
                            <i className="icon-laptop" />
                            Mobile and Telecom Shop
                          </a>
                          <div
                            className="megamenu"
                            style={{ display: "block" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-12">
                                <div className="menu-col">
                                  <div className="row"></div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                      </ul>
                      {/* End .menu-vertical */}
                    </nav>
                    {/* End .side-nav */}
                  </div>
                  {/* End .dropdown-menu */}
                </div>
                <nav className="main-nav">
                  <ul className="menu sf-arrows">
                    <li className="megamenu-container   active ">
                      <a href="https://dukan24h.com">Home</a>
                    </li>
                    {/*<li class="megamenu-container  ">*/}
                    {/*    <a href="" >Pricing</a>*/}
                    {/*</li>*/}
                  </ul>
                  {/* End .menu */}
                </nav>
                {/* End .main-nav */}
                <div className="header-search header-search-extended header-search-visible header-search-no-round d-none d-lg-block">
                  <a href="#" className="search-toggle" role="button">
                    <i className="icon-search" />
                  </a>
                  <form
                    id="searchform"
                    action="https://dukan24h.com/searchProductResult"
                    method="get"
                  >
                    <div className="header-search-wrapper search-wrapper-wide">
                      <label htmlFor="q" className="sr-only">
                        Search
                      </label>
                      <input
                        type="search"
                        className="form-control pl-2"
                        name="s"
                        id="searchinput"
                        placeholder="Search Shop & Product"
                        required
                      />
                      <input
                        type="hidden"
                        defaultValue="product"
                        name="search_type"
                        id="search_type"
                      />
                      <button className="btn btn-primary " type="submit">
                        <i className="icon-search" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="header-right">
                <div className="div">
                  <form
                    action="https://dukan24h.com/searchProductaResult"
                    className="mt-1 mb-1 d-none d-lg-block"
                    method="get"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="rUBDtb9zIqsa2xs5XaifXSNFTRKvYqDtJOWmIiWh"
                    />
                    <div className="input-group" style={{ width: "65%" }}>
                      <select
                        name="country"
                        id="pharmacy_country"
                        className="col-sm-4 col-lg-3 col-xl-3 country form-control chosen-select"
                        required
                      >
                        <option value="">Country</option>
                        {countryOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <select
                        name="city"
                        id="city"
                        className="col-sm-4 col-lg-3 col-xl-3 city form-control chosen-select"
                        required
                      >
                        <option value="">City</option>
                        {cityOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <input
                        type="text"
                        name="a"
                        id="searchinputa"
                        className="searchinputa form-control"
                        placeholder="Location"
                      />
                      <input
                        type="submit"
                        name="submit"
                        className="btn btn-primary"
                        style={{ minWidth: "27px !important" }}
                        value="GO"
                      />
                    </div>
                  </form>
                </div>
                <div className="dropdown cart-dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-display="static"
                  >
                    <div className="icon">
                      <i className="icon-shopping-cart" />
                      <span className="cart-count">0</span>
                    </div>
                    <p>Cart</p>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-cart-products">
                      <h3 className="text-center dropdown-cart-total">
                        No products in the cart.
                      </h3>
                    </div>
                    {/* End .cart-product */}
                    <div className="dropdown-cart-action">
                      <a
                        href="https://dukan24h.com/viewcart"
                        className="btn btn-primary"
                      >
                        View Cart
                      </a>
                      <a
                        href="https://dukan24h.com/checkout"
                        className="btn btn-outline-primary-2"
                      >
                        <span>Checkout</span>
                        <i className="icon-long-arrow-right" />
                      </a>
                    </div>
                    {/* End .dropdown-cart-total */}
                  </div>
                  {/* End .dropdown-menu */}
                </div>
                {/* End .cart-dropdown */}
              </div>
            </div>
            {/* End .container */}
          </div>
          {/* End .header-middle */}
        </header>
        {/* End .header */}
        <br />
        <link
          rel="stylesheet"
          href="https://dukan24h.com/public/d24h/userend/assets/css/stylenew.css"
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-1" />
            <div className="col-lg-10 col-md-10 col-sm-10">
              <div
                id="carouselExample"
                className="carousel slide"
                data-ride="carousel"
              >
                {/* Indicators */}
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExample"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#carouselExample" data-slide-to={1} />
                  <li data-target="#carouselExample" data-slide-to={2} />
                  <li data-target="#carouselExample" data-slide-to={3} />
                  <li data-target="#carouselExample" data-slide-to={4} />
                  <li data-target="#carouselExample" data-slide-to={5} />
                  <li data-target="#carouselExample" data-slide-to={6} />
                  <li data-target="#carouselExample" data-slide-to={7} />
                  <li data-target="#carouselExample" data-slide-to={8} />
                  <li data-target="#carouselExample" data-slide-to={9} />
                </ol>
                {/* Slides */}
                <div className="carousel-inner">
                  <div className="carousel-item items  active ">
                    <img
                      src="https://dukan24h.com/public/uploads/HpMainSliderImages/11691642776.svg"
                      alt="Slider Image"
                      className="img-fluid d-block w-100"
                    />
                  </div>
                  <div className="carousel-item items">
                    <img
                      src="https://dukan24h.com/public/uploads/HpMainSliderImages/21672212633.svg"
                      alt="Slider Image"
                      className="img-fluid d-block w-100"
                    />
                  </div>
                  <div className="carousel-item items">
                    <img
                      src="https://dukan24h.com/public/uploads/HpMainSliderImages/31672228234.svg"
                      alt="Slider Image"
                      className="img-fluid d-block w-100"
                    />
                  </div>
                  <div className="carousel-item items">
                    <img
                      src="https://dukan24h.com/public/uploads/HpMainSliderImages/41672228234.svg"
                      alt="Slider Image"
                      className="img-fluid d-block w-100"
                    />
                  </div>
                  <div className="carousel-item items ">
                    <img
                      src="https://dukan24h.com/public/uploads/HpMainSliderImages/51672228235.svg"
                      alt="Slider Image"
                      className="img-fluid d-block w-100"
                    />
                  </div>
                  <div className="carousel-item items">
                    <img
                      src="https://dukan24h.com/public/uploads/HpMainSliderImages/61672228236.svg"
                      alt="Slider Image"
                      className="img-fluid d-block w-100"
                    />
                  </div>
                  <div className="carousel-item items">
                    <img
                      src="https://dukan24h.com/public/uploads/HpMainSliderImages/71672228236.svg"
                      alt="Slider Image"
                      className="img-fluid d-block w-100"
                    />
                  </div>
                  <div className="carousel-item items">
                    <img
                      src="https://dukan24h.com/public/uploads/HpMainSliderImages/81672228236.svg"
                      alt="Slider Image"
                      className="img-fluid d-block w-100"
                    />
                  </div>
                  <div className="carousel-item items">
                    <img
                      src="https://dukan24h.com/public/uploads/HpMainSliderImages/91672228338.svg"
                      alt="Slider Image"
                      className="img-fluid d-block w-100"
                    />
                  </div>
                  <div className="carousel-item items">
                    <img
                      src="https://dukan24h.com/public/uploads/HpMainSliderImages/101672228438.svg"
                      alt="Slider Image"
                      className="img-fluid d-block w-100"
                    />
                  </div>
                </div>
                {/* Controls */}
                <a
                  className="carousel-control-prev"
                  href="#carouselExample"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExample"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1" />
          </div>
        </div>
        <br />
        <br />
        <div className="container-fluid">
          <div className="row shadow">
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-2">
                  <span>
                    <i className="fa fa-id-card" />
                  </span>
                </div>
                <div className="col-md-10 text">
                  <b>Free Membership for shops</b>
                  <p style={{ color: "#a19f9f" }} />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-2">
                  <span>
                    <i className="fa fa-credit-card " />
                  </span>
                </div>
                <div className="col-md-10 text">
                  <b>POS Facility for shops</b>
                  <p style={{ color: "#a19f9f" }} />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-2">
                  <span>
                    <i className="fa fa-credit-card" />
                  </span>
                </div>
                <div className="col-md-10 text">
                  <b>Connectivity in just one click</b>
                  <p style={{ color: "#a19f9f" }} />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-2">
                  <span className="fa">
                    <i className="fas fa-money-check-alt" />
                  </span>
                </div>
                <div className="col-md-10 text">
                  <b>24th/7 Support</b>
                  <p style={{ color: "#a19f9f" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <h6 className="text-center">VIEW ALL SHOPS</h6>
          <h2 className="text-center" style={{ color: "#f57224" }}>
            Dukan24h Shop
          </h2>
          <br />
          <div
            id="shopCarousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <a href="https://dukan24h.com/shopProducts/demo-pharmacy">
                      <br />
                      <div className="card shadow">
                        <img
                          className="card-img"
                          src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1680687323.png"
                          alt="Demo Pharmacy"
                        />
                        <div className="card-footer d-flex justify-content-between">
                          <div>
                            <span>Demo Pharmacy</span>
                            <p>Pharmacy / Grocery store</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <a href="https://dukan24h.com/shopProducts/gadgetguyspk">
                      <br />
                      <div className="card shadow">
                        <img
                          className="card-img"
                          src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1672481675.png"
                          alt="gadgetguys.pk"
                        />
                        <div className="card-footer d-flex justify-content-between">
                          <div>
                            <span>gadgetguys.pk</span>
                            <p>Electrical store</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <a href="https://dukan24h.com/shopProducts/kmh-electric">
                      <br />
                      <div className="card shadow">
                        <img
                          className="card-img"
                          src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1673701252.jpeg"
                          alt="KMH Electric Store"
                        />
                        <div className="card-footer d-flex justify-content-between">
                          <div>
                            <span>KMH Electric Store</span>
                            <p>Electrical store</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <a href="https://dukan24h.com/shopProducts/fizas-collection">
                      <br />
                      <div className="card shadow">
                        <img
                          className="card-img"
                          src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1676955525.png"
                          alt="FIZA'S Collection"
                        />
                        <div className="card-footer d-flex justify-content-between">
                          <div>
                            <span>FIZA'S Collection</span>
                            <p>E-commerce Apparel store</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <a href="https://dukan24h.com/shopProducts/celebrations-the-cake-shop">
                      <br />
                      <div className="card shadow">
                        <img
                          className="card-img"
                          src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1698384148.jpeg"
                          alt="Celebrations (The cake shop)"
                        />
                        <div className="card-footer d-flex justify-content-between">
                          <div>
                            <span>Celebrations (The cake shop)</span>
                            <p>Bakery store</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <a href="https://dukan24h.com/shopProducts/add-value-advertiser">
                      <br />
                      <div className="card shadow">
                        <img
                          className="card-img"
                          src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1678086752.jpg"
                          alt="Add Value Advertiser"
                        />
                        <div className="card-footer d-flex justify-content-between">
                          <div>
                            <span>Add Value Advertiser</span>
                            <p>Art supply store</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <a href="https://dukan24h.com/shopProducts/munawar-store">
                      <br />
                      <div className="card shadow">
                        <img
                          className="card-img"
                          src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1679408942.jpg"
                          alt="Munawar Store"
                        />
                        <div className="card-footer d-flex justify-content-between">
                          <div>
                            <span>Munawar Store</span>
                            <p>Department store</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <a href="https://dukan24h.com/shopProducts/saima-a-ghafoor">
                      <br />
                      <div className="card shadow">
                        <img
                          className="card-img"
                          src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1690793741.jpg"
                          alt="Saima A ghafoor"
                        />
                        <div className="card-footer d-flex justify-content-between">
                          <div>
                            <span>Saima A ghafoor</span>
                            <p>Bookstore</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <a href="https://dukan24h.com/shopProducts/arora-farms">
                      <br />
                      <div className="card shadow">
                        <img
                          className="card-img"
                          src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1690805637.jpeg"
                          alt="Arora Farms"
                        />
                        <div className="card-footer d-flex justify-content-between">
                          <div>
                            <span>Arora Farms</span>
                            <p>Pharmacy / Grocery store</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <a href="https://dukan24h.com/shopProducts/zaryab-furniture-store">
                      <br />
                      <div className="card shadow">
                        <img
                          className="card-img"
                          src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1698381365.jpeg"
                          alt="Zaryab  Furniture Store"
                        />
                        <div className="card-footer d-flex justify-content-between">
                          <div>
                            <span>Zaryab Furniture Store</span>
                            <p>Furniture store</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <a href="https://dukan24h.com/shopProducts/zncpharmacy">
                      <br />
                      <div className="card shadow">
                        <img
                          className="card-img"
                          src="https://dukan24h.com/public/uploads/PharmacyImagesSave/1698383419.png"
                          alt="ZNCPharmacy"
                        />
                        <div className="card-footer d-flex justify-content-between">
                          <div>
                            <span>ZNCPharmacy</span>
                            <p>Pharmacy / Grocery store</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#shopCarousel"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#shopCarousel"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <br />
        <br />
        <div className="container-fluid">
          <div
            className="row"
            style={{
              backgroundColor: "#323639",
              color: "white",
              padding: "20px",
            }}
          >
            <div className="col-lg-6 col-md-4 col-sm-12">
              <h4 className="text-white">Subscribe Our Newsletter!</h4>
              <p className="text-white">
                Subscribe to our newsletter for featured promotions and new
                products!
              </p>
            </div>
            <div className="col-lg-5 col-md-8 col-sm-12">
              <form className>
                <div className="input-group" style={{ marginTop: "20px" }}>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter Your Email Address"
                    required
                  />
                  <div className="input-group-append">
                    <button
                      className="text-white"
                      style={{
                        backgroundColor: "#F57224",
                        height: "40px",
                        width: "94px",
                        border: "none",
                      }}
                      type="submit"
                    >
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-1" />
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <h6 className="text-center">LATEST</h6>
          <h2 className="text-center" style={{ color: "#f57224" }}>
            PRODUCTS
          </h2>
          <br />
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/AJRAK-FABRIC-MASK"
                style={{ textDecoration: "none" }}
                title="AJRAK FABRIC MASK"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/2e0ae043733a39eba46b4623cb1f5398.jpg"
                    alt="AJRAK FABRIC MASK"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      AJRAK FABRIC MASK {/* Display only first 25 words */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 words */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/NIDO-MILK-[900GM]"
                style={{ textDecoration: "none" }}
                title="NIDO MILK [900GM]"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/13993.png"
                    alt="NIDO MILK [900GM]"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      NIDO MILK [900GM] {/* Display only first 25 words */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 words */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/INFRARED-THERMOMETER-ROSSMAX"
                style={{ textDecoration: "none" }}
                title="INFRARED THERMOMETER ROSSMAX"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/6d69d7b055750b873214164898b4aeae.png"
                    alt="INFRARED THERMOMETER ROSSMAX"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      INFRARED THERMOMETER ROSS...{" "}
                      {/* Display only first 25 words */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 words */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/PALMOLIVE-SHAMPO-SILKY-STRAIGHT-180ML"
                style={{ textDecoration: "none" }}
                title="PALMOLIVE SHAMPO SILKY STRAIGHT 180ML"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/13271.jpg"
                    alt="PALMOLIVE SHAMPO SILKY STRAIGHT 180ML"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      PALMOLIVE SHAMPO SILKY ST...{" "}
                      {/* Display only first 25 words */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 words */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/BeGe-COLOR-Feeder-150ml-with-Handle"
                style={{ textDecoration: "none" }}
                title="BeGe COLOR Feeder 150ml with Handle"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/61dbdf38c5a5cc7c065cd1011e2bf15d.jpeg"
                    alt="BeGe COLOR Feeder 150ml with Handle"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      BeGe COLOR Feeder 150ml w...{" "}
                      {/* Display only first 25 words */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 words */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/CARESENS-N-ECO-BLOOD-GLUCOSE-MONITOR"
                style={{ textDecoration: "none" }}
                title="CARESENS N ECO BLOOD GLUCOSE MONITOR"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/588090cfa75727af38827cd1db1bf924.jpg"
                    alt="CARESENS N ECO BLOOD GLUCOSE MONITOR"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      CARESENS N ECO BLOOD GLUC...{" "}
                      {/* Display only first 25 words */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 words */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/RELIANCE-HAND-SANITIZER-500ml-"
                style={{ textDecoration: "none" }}
                title="RELIANCE HAND SANITIZER 500ml "
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/17832353534cab3db983ade138ef3858.jpg"
                    alt="RELIANCE HAND SANITIZER 500ml "
                  />
                  <div className="card-body">
                    <p className="card-title">
                      RELIANCE HAND SANITIZER 5...{" "}
                      {/* Display only first 25 words */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 words */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/DETTOL-SURFACE-CLEANER"
                style={{ textDecoration: "none" }}
                title="DETTOL SURFACE CLEANER"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/c8a6c4c77285b48f56943f61b16a9e2a.jpg"
                    alt="DETTOL SURFACE CLEANER"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      DETTOL SURFACE CLEANER {/* Display only first 25 words */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 words */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/MECHICO-BABY-PURE-WIPES-80's"
                style={{ textDecoration: "none" }}
                title="MECHICO BABY PURE WIPES 80's"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/d4d12a1a1b9254076a14a6b74348b463.jpg"
                    alt="MECHICO BABY PURE WIPES 80's"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      MECHICO BABY PURE WIPES 8...{" "}
                      {/* Display only first 25 words */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 words */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/COCA-COLA-CAN-250ML"
                style={{ textDecoration: "none" }}
                title="COCA COLA CAN 250ML"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/980ea9bd595b2e64fa7adbefa18b39ef.jpg"
                    alt="COCA COLA CAN 250ML"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      COCA COLA CAN 250ML {/* Display only first 25 words */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 words */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/LP-6-OIL-NOUR-OIL-100ML"
                style={{ textDecoration: "none" }}
                title="LP 6 OIL NOUR OIL 100ML"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/1234.jpg"
                    alt="LP 6 OIL NOUR OIL 100ML"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      LP 6 OIL NOUR OIL 100ML{" "}
                      {/* Display only first 25 words */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 words */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/DE-W-PERFECT-NIGHT-CREAM-50ML"
                style={{ textDecoration: "none" }}
                title="DE W PERFECT NIGHT CREAM 50ML"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/1223.jpg"
                    alt="DE W PERFECT NIGHT CREAM 50ML"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      DE W PERFECT NIGHT CREAM...{" "}
                      {/* Display only first 25 words */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 words */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <br />
        {/* <div class="container">
      <div class="row">
          <div class="col-md-6">
          <img class="card-img-top border" height="250" src="https://dukan24h.com/public/d24h/userend/assets/images/new_concept/shop.png" alt="Card Image">
          </div>
          <div class="col-md-6">
          <img class="card-img-top border" height="250"src="https://dukan24h.com/public/d24h/userend/assets/images/new_concept/shop.png" alt="Card Image">
          </div>
      </div>
  </div> */}
        <br />
        <div className="container">
          <h6 className="text-center">FEATURE</h6>
          <h2 className="text-center" style={{ color: "#f57224" }}>
            PRODUCTS
          </h2>
          <br />
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/jj-baby-lotion-new-100ml"
                style={{ textDecoration: "none" }}
                title="J&J Baby Lotion New 100ml"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/11-20200412.jpg"
                    alt="J&J Baby Lotion New 100ml"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      J&amp;J Baby Lotion New 100ml{" "}
                      {/* Display only first 25 characters */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 characters */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/PROTECT-ABC-Orange-TOOTH-PASTE"
                style={{ textDecoration: "none" }}
                title="PROTECT ABC Orange TOOTH PASTE"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/155.jpg"
                    alt="PROTECT ABC Orange TOOTH PASTE"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      PROTECT ABC Orange TOOTH...{" "}
                      {/* Display only first 25 characters */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 characters */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/Colgate-Misvak-TPaste-100gm"
                style={{ textDecoration: "none" }}
                title="Colgate Misvak TPaste 100gm"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/133.jpg"
                    alt="Colgate Misvak TPaste 100gm"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      Colgate Misvak TPaste 100...{" "}
                      {/* Display only first 25 characters */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 characters */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/PANADOL-CF--Tabs"
                style={{ textDecoration: "none" }}
                title="PANADOL-CF  Tabs"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/11664.jpg"
                    alt="PANADOL-CF  Tabs"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      PANADOL-CF Tabs {/* Display only first 25 characters */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 characters */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/PROTECT-ABC-Banana-TOOTH-PASTE"
                style={{ textDecoration: "none" }}
                title="PROTECT ABC Banana TOOTH PASTE"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/156.jpg"
                    alt="PROTECT ABC Banana TOOTH PASTE"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      PROTECT ABC Banana TOOTH...{" "}
                      {/* Display only first 25 characters */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 characters */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/Quaker-Blue-Oatmeal-Tin-400g"
                style={{ textDecoration: "none" }}
                title="Quaker Blue Oatmeal Tin 400g"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/179.jpg"
                    alt="Quaker Blue Oatmeal Tin 400g"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      Quaker Blue Oatmeal Tin 4...{" "}
                      {/* Display only first 25 characters */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 characters */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/Doctor-Tooth-Paste-Small"
                style={{ textDecoration: "none" }}
                title="Doctor Tooth Paste Small"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/141.jpg"
                    alt="Doctor Tooth Paste Small"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      Doctor Tooth Paste Small{" "}
                      {/* Display only first 25 characters */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 characters */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/kmh-electric/6-switches-2-sockets-plate-opal-century-golden"
                style={{ textDecoration: "none" }}
                title="6 Switches + 2 Sockets Plate OPAL Century Golden"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/1673601151.jpg"
                    alt="6 Switches + 2 Sockets Plate OPAL Century Golden"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      6 Switches + 2 Sockets Pl...{" "}
                      {/* Display only first 25 characters */}
                    </p>
                    <p className="card-text" title="KMH Electric Store">
                      KMH Electric Store{" "}
                      {/* Display only first 25 characters */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/kmh-electric/6-switches-1-socket-plate-opal-century-golden"
                style={{ textDecoration: "none" }}
                title="6 Switches + 1 Socket Plate OPAL Century Golden"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/1673601094.jpg"
                    alt="6 Switches + 1 Socket Plate OPAL Century Golden"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      6 Switches + 1 Socket Pla...{" "}
                      {/* Display only first 25 characters */}
                    </p>
                    <p className="card-text" title="KMH Electric Store">
                      KMH Electric Store{" "}
                      {/* Display only first 25 characters */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/kmh-electric/4-switches-1-socket-plate-opal-century-golden"
                style={{ textDecoration: "none" }}
                title="4 Switches + 1 Socket Plate OPAL Century Golden"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/1673600671.jpg"
                    alt="4 Switches + 1 Socket Plate OPAL Century Golden"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      4 Switches + 1 Socket Pla...{" "}
                      {/* Display only first 25 characters */}
                    </p>
                    <p className="card-text" title="KMH Electric Store">
                      KMH Electric Store{" "}
                      {/* Display only first 25 characters */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/SENSODYN-RAPID-ACTION-100GM"
                style={{ textDecoration: "none" }}
                title="SENSODYN RAPID ACTION 100GM"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/147.jpg"
                    alt="SENSODYN RAPID ACTION 100GM"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      SENSODYN RAPID ACTION 100...{" "}
                      {/* Display only first 25 characters */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 characters */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
              {/* Card 1 */}
              <a
                href="https://dukan24h.com/productdetail/demo-pharmacy/Colgate-Misvak-TPaste-27gm"
                style={{ textDecoration: "none" }}
                title="Colgate Misvak TPaste 27gm"
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://dukan24h.com/public/uploads/products/140.jpg"
                    alt="Colgate Misvak TPaste 27gm"
                  />
                  <div className="card-body">
                    <p className="card-title">
                      Colgate Misvak TPaste 27g...{" "}
                      {/* Display only first 25 characters */}
                    </p>
                    <p className="card-text" title="Demo Pharmacy">
                      Demo Pharmacy {/* Display only first 25 characters */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <br />
        <footer className="footer ">
          <div className="footer-middle">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="widget widget-about r">
                    <img
                      src="https://dukan24h.com/public/d24h/userend/assets/images/logo/logo-head.png"
                      className="footer-logo"
                      alt="Footer Logo"
                      width={50}
                      height={50}
                    />
                    <br />
                    <span style={{ fontSize: "12px" }}>
                      Dukan24h allows you to run your business 24/7, helps to
                      reduce your overhead cost, improves customer satisfaction,
                      and grows your business.
                    </span>
                  </div>
                </div>
                {/* End .col-sm-6 col-lg-3 */}
                <div className="col-lg-1" />
                <div className="col-lg-2">
                  <div className="widget">
                    <h4 className="widget-title">Menu</h4>
                    {/* End .widget-title */}
                    <ul className="widget-list">
                      <li>
                        <a href="https://dukan24h.com">Home</a>
                      </li>
                      <li className="widget-list">
                        <a href="https://dukan24h.com/faq">FAQ</a>
                      </li>
                      <li className="widget-list">
                        <a href="https://dukan24h.com/contact">Contact</a>
                      </li>
                      <li className="widget-list">
                        <a
                          href="#signin-modal"
                          id="signinmodal"
                          data-toggle="modal"
                        >
                          Shop - Login / Register
                        </a>
                      </li>
                    </ul>
                    {/* End .widget-list */}
                  </div>
                  {/* End .widget */}
                </div>
                {/* End .col-sm-6 col-lg-3 */}
                <div className="col-lg-3">
                  <div className="widget">
                    <h4 className="widget-title">INFORMATION</h4>
                    {/* End .widget-title */}
                    <ul className="widget-list">
                      <li>
                        {" "}
                        <a href="tel:+1234567890">
                          <i className="fas fa-phone " /> 03366867902
                        </a>{" "}
                      </li>
                      <li className="widget-list">
                        <a href="mailto:info@dukan24h.com">
                          {" "}
                          <i className="fas fa-envelope" /> info@dukan24h.com
                        </a>
                      </li>
                      <li className="widget-list">
                        <p>
                          <i className="fas fa-paper-plane" /> Powered by{" "}
                          <a href="https://kodevglobal.com" target="_blank">
                            Kodev Global PVT(LTD.)
                          </a>
                        </p>
                      </li>
                    </ul>
                    {/* End .widget-list */}
                  </div>
                  {/* End .widget */}
                </div>
                {/* End .col-sm-6 col-lg-3 */}
                <div className="col-lg-2">
                  <h4 className="widget-title">FOLLOW US</h4>
                  <ul
                    className="list-inline social-icons"
                    style={{ marginRight: "10px" }}
                  >
                    <li className="list-inline-item ">
                      <a
                        target="_blank"
                        href="https://www.facebook.com/kodevglobal/"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        href="https://twitter.com/kodevglobal?lang=ar-x-fm"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        href="https://www.instagram.com/kodevglobal/?hl=en"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End .col-sm-6 col-lg-3 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </div>
          {/* End .footer-middle */}
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <p className="footer-copyright">
                  Copyright © 2023 Dukan 24h. All Rights Reserved.
                </p>
                {/* End .footer-copyright */}
              </div>
            </div>
            {/* End .container */}
          </div>
          {/* End .footer-bottom */}
        </footer>
        {/* End .footer */}
      </div>
      {/* End .page-wrapper */}
      <button
        id="scroll-top"
        className="bg-primary  rounded"
        title="Back to Top"
      >
        <i className="icon-arrow-up" />
      </button>
      {/* Mobile Menu */}
      <div className="mobile-menu-overlay" />
      {/* End .mobil-menu-overlay */}
      <div className="mobile-menu-container mobile-menu-light">
        <div className="mobile-menu-wrapper">
          <span className="mobile-menu-close">
            <i className="icon-close" />
          </span>
          <form
            action="https://dukan24h.com/searchProductaResult"
            method="get"
            className="mobile-search"
          >
            <input
              type="hidden"
              name="_token"
              defaultValue="rUBDtb9zIqsa2xs5XaifXSNFTRKvYqDtJOWmIiWh"
            />
            <div className="row ">
              <select
                name="country"
                id="pharmacy_country"
                className="col-3 country form-control chosen-select"
                required
              >
                <option value="">Country</option>
                {countryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <select
                name="city"
                id="city"
                className="col-3 city form-control chosen-select"
                required
              >
                <option value="">City</option>
                {cityOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="a"
                id="searchinputa"
                className="col-4 searchinputa form-control"
                placeholder="Location"
                style={{ height: "inherit" }}
              />
              {/* &nbsp; */}
              <input
                type="submit"
                name="submit"
                defaultValue="GO"
                className="col-2 btn btn-primary"
              />
            </div>
          </form>
          <form
            id="searchforms"
            action="https://dukan24h.com/searchProductResult"
            method="get"
            className="mobile-search"
          >
            <label htmlFor="mobile-search" className="sr-only">
              Search
            </label>
            <input
              type="search"
              className="form-control"
              name="s"
              id="searchinputs"
              placeholder="Search Shop & Product"
              required
            />
            <input type="hidden" defaultValue="product" name="search_type" />
            <button className="btn btn-primary" type="submit">
              <i className="icon-search" />
            </button>
          </form>
          <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="mobile-menu-link"
                data-toggle="tab"
                href="#mobile-menu-tab"
                role="tab"
                aria-controls="mobile-menu-tab"
                aria-selected="true"
              >
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="mobile-cats-link"
                data-toggle="tab"
                href="#mobile-cats-tab"
                role="tab"
                aria-controls="mobile-cats-tab"
                aria-selected="false"
              >
                Categories
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="mobile-menu-tab"
              role="tabpanel"
              aria-labelledby="mobile-menu-link"
            >
              <nav className="mobile-nav">
                <ul className="mobile-menu">
                  <li className="megamenu-container ">
                    <a href="https://dukan24h.com">Home</a>
                  </li>
                  <li>
                    <a href="https://dukan24h.com/faq">FAQ</a>
                  </li>
                  <li>
                    <a href="https://dukan24h.com/contact">Contact</a>
                  </li>
                  {/*<li>*/}
                  {/*    <a href="" >Pricing</a>*/}
                  {/*</li>*/}
                </ul>
              </nav>
              {/* End .mobile-nav */}
            </div>
            {/* .End .tab-pane */}
            <div
              className="tab-pane fade"
              id="mobile-cats-tab"
              role="tabpanel"
              aria-labelledby="mobile-cats-link"
            >
              <nav className="mobile-cats-nav"></nav>
              {/* End .mobile-cats-nav */}
            </div>
            {/* .End .tab-pane */}
          </div>
          {/* End .tab-content */}
        </div>
        {/* End .mobile-menu-wrapper */}
      </div>
      {/* End .mobile-menu-container */}
      {/* Sign in / Register Modal */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .social-login > span {\n\tcolor: #a0a0a0;\n\tmargin-right: 8px;\n}\n.social-login > a {\n\tbackground-color: #ccc;\n\tborder-radius: 4px;\n\tcolor: #fff;\n\tdisplay: inline-block;\n\tfont-size: 18px;\n\theight: 32px;\n\tline-height: 32px;\n\tmargin-right: 6px;\n\ttext-align: center;\n\twidth: 32px;\n}\n\n.forgot-link {\n    color: #3d3d3d;\n    display: inline-block;\n    font-size: 13px;\n    margin-bottom: 10px;\n\tfont-weight:400;\n}\n.btn-facebook {\n    background-color: #3a559f;\n    color: #fff !important;\n    text-decoration:none;\n    font-size: 13px;\n    padding: 8px 12px;\n    transition:0.5s ease-in;\n}\n.btn-facebook:hover{\n    color: #3a559f !important;\n    border:1px solid  #3a559f;\n}\n.btn-google {\n    background-color: #dd4b39;\n    color: #fff !important;\n    font-size: 13px;\n    padding: 8px 12px;\n    text-decoration:none;\n    transition:0.5s ease-in;\n}\n.btn-google:hover{\n     color: #dd4b39 !important;\n    border:1px solid  #dd4b39;\n}\n.account-subtitle {\n    color: #4c4c4c;\n    font-size: 20px;\n        font-weight: 500;\n    margin-bottom: 1rem;\n    text-align: center;\n}\n    ",
        }}
      />
      {/* registration  */}
      <div
        className="modal fade"
        id="registor_modal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="icon-close" />
                </span>
              </button>
              <div className="form-box p-4">
                <div className="form-tab">
                  <p className="account-subtitle">Customer Registeration</p>
                  <form
                    action="https://dukan24h.com/cust_registor"
                    name="addPharmacy"
                    id="addPharmacy"
                    method="POST"
                    encType="multipart/form-data"
                  >
                    <div className="row">
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="rUBDtb9zIqsa2xs5XaifXSNFTRKvYqDtJOWmIiWh"
                      />
                      <div className="col-sm-6">
                        <label className="mb-0">
                          First Name <span className="text-danger"></span>
                        </label>
                        <input
                          type="text"
                          name="r_fname"
                          defaultValue=" "
                          className="form-control"
                        />
                      </div>
                      {/* End .col-sm-6 */}
                      <div className="col-sm-6">
                        <label className="mb-0">
                          Last Name <span className="text-danger"></span>
                        </label>
                        <input
                          type="text"
                          name="r_lname"
                          defaultValue
                          className="form-control"
                        />
                      </div>
                      {/* End .col-sm-6 */}
                      <div className="col-sm-6">
                        <label className="mb-0">
                          Phone <span className="text-danger"></span>
                        </label>
                        <input
                          type="tel"
                          name="r_phone"
                          defaultValue=" "
                          className="form-control"
                        />
                      </div>
                      {/* End .col-sm-6 */}
                      <div className="col-sm-6">
                        <label className="mb-0">
                          Email address <span className="text-danger"></span>{" "}
                        </label>
                        <input
                          type="email"
                          name="r_email"
                          defaultValue=" "
                          className="form-control"
                        />
                      </div>
                      {/* End .col-sm-6 */}
                      <div className="col-6">
                        <div className="form-group">
                          <label className="mb-0">
                            Password
                            <span className="text-danger" />
                          </label>
                          <input
                            className="form-control password"
                            id="password"
                            type="password"
                            name="r_new_password"
                            placeholder="Change Password"
                            defaultValue
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label className="mb-0">
                            Confirm Password <span className="text-danger" />
                          </label>
                          <input
                            className="form-control password"
                            id="password"
                            type="password"
                            name="r_cnew_password"
                            placeholder="Confirm New Password"
                            defaultValue
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <label className="mb-0">
                          County <span className="text-danger"></span>
                        </label>
                        <select
                          name="r_country"
                          id="country"
                          className="country form-control chosen-select"
                        >
                          <option value="">Country</option>
                          {countryOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* End .col-sm-6 */}
                      <div className="col-sm-6">
                        <label className="mb-0">
                          Town / City <span className="text-danger"></span>
                        </label>
                        <select
                          name="r_city"
                          className="city form-control chosen-select"
                        >
                          <option value>City</option>
                        </select>
                      </div>
                      {/* End .col-sm-6 */}
                      <div className="col-sm-6">
                        <label className="mb-0">
                          Postcode / ZIP <span className="text-danger"> </span>
                        </label>
                        <input
                          type="text"
                          name="r_zipcode"
                          defaultValue=" "
                          className="form-control"
                        />
                      </div>
                      {/* End .col-sm-6 */}
                      <div className="col-sm-6">
                        <label className="mb-0">
                          Street address <span className="text-danger"> </span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="r_address"
                          defaultValue=" "
                          placeholder="House number and Street name"
                        />
                      </div>
                      {/* End .col-sm-6 */}
                      <div>
                        <label htmlFor="brand_name" className="mb-0">
                          Profile Image: <span className="text-danger"> </span>
                        </label>
                      </div>
                      <div className="form-group pb-0 col-9">
                        <input
                          type="file"
                          name="r_img"
                          id="product_image"
                          className="form-control"
                          accept="image/*"
                          onchange="loadFile(event)"
                          style={{ border: "1px solid lightgray" }}
                        />
                      </div>
                      <div className=" col-3">
                        <img
                          id="output"
                          src
                          alt="Selected img"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "20px",
                          }}
                        />
                      </div>
                      <div className="form-group pb-0 text-center mt-2">
                        <input
                          type="submit"
                          name="submit"
                          defaultValue="Submit"
                          className="btn btn-primary"
                        />
                      </div>
                    </div>
                  </form>
                  <br />
                  <div className="text-center dont-have">
                    If you have an account{" "}
                    <a
                      data-dismiss="modal"
                      aria-label="Close"
                      href="#signin-modal-user"
                      data-toggle="modal"
                    >
                      Login
                    </a>
                  </div>
                </div>
                {/* End .form-tab */}
              </div>
              {/* End .form-box */}
            </div>
            {/* End .modal-body */}
          </div>
          {/* End .modal-content */}
        </div>
        {/* End .modal-dialog */}
      </div>
      {/* End .modal */}
      {/* /registration */}
      {/* Sign in / Register Modal */}
      <div
        className="modal fade"
        id="signin-modal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="icon-close" />
                </span>
              </button>
              <div className="form-box">
                <div className="form-tab">
                  <p className="account-subtitle">Login to your Shop</p>
                  <form action="https://dukan24h.com/pos/check" method="post">
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="rUBDtb9zIqsa2xs5XaifXSNFTRKvYqDtJOWmIiWh"
                    />{" "}
                    <div className="form-group">
                      <label htmlFor="singin-email">Phone No</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone no"
                        name="pharmacy_phone"
                        required
                      />
                      <span className="text-danger" />
                    </div>
                    {/* End .form-group */}
                    <div className="form-group">
                      <label htmlFor="singin-password">Password </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        required
                      />
                      <span className="text-danger" />
                    </div>
                    {/* End .form-group */}
                    <div className="form-footer">
                      <button
                        type="submit"
                        className="btn btn-outline-primary-2"
                      >
                        LOG IN
                      </button>
                      <a
                        data-dismiss="modal"
                        aria-label="Close"
                        href="#forget-modal"
                        id="shop_forget_pass"
                        data-toggle="modal"
                        className="forgot-link"
                      >
                        Forgot Your Password?
                      </a>
                    </div>
                    {/* End .form-footer */}
                  </form>
                  <div className="row form-row social-login">
                    <div className="col-12">
                      <a
                        href="https://dukan24h.com/g_login"
                        className="btn btn-google btn-block"
                      >
                        <i className="icon-google-plus-g mr-2" /> Login
                      </a>
                    </div>
                  </div>
                  <br />
                  <div className="text-center dont-have">
                    Don’t have an account?{" "}
                    <a href="https://dukan24h.com/pos/pharmacyRegistration">
                      Register
                    </a>
                  </div>
                </div>
                {/* End .form-tab */}
              </div>
              {/* End .form-box */}
            </div>
            {/* End .modal-body */}
          </div>
          {/* End .modal-content */}
        </div>
        {/* End .modal-dialog */}
      </div>
      {/* End .modal */}
      {/* Sign in / Register Modal */}
      <div
        className="modal fade"
        id="signin-modal-user"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="icon-close" />
                </span>
              </button>
              <div className="form-box">
                <div className="form-tab">
                  <p className="account-subtitle">Customer Login</p>
                  <form
                    action="https://dukan24h.com/c_login_process"
                    method="post"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="rUBDtb9zIqsa2xs5XaifXSNFTRKvYqDtJOWmIiWh"
                    />{" "}
                    <div className="form-group">
                      <label htmlFor="singin-email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="singin-email"
                        name="email"
                      />
                      <span className="text-danger" />
                    </div>
                    {/* End .form-group */}
                    <div className="form-group">
                      <label htmlFor="singin-password">Password </label>
                      <input
                        type="password"
                        className="form-control"
                        id="singin-password"
                        name="password"
                        placeholder="Password"
                      />
                      <span className="text-danger" />
                    </div>
                    {/* End .form-group */}
                    <div className="form-footer">
                      <button
                        type="submit"
                        className="btn btn-outline-primary-2"
                      >
                        LOG IN
                      </button>
                      <a
                        data-dismiss="modal"
                        aria-label="Close"
                        id="cust_btn_forget"
                        href="#forget-modal-cust"
                        data-toggle="modal"
                        className="forgot-link"
                      >
                        Forgot Your Password?
                      </a>
                    </div>
                    {/* End .form-footer */}
                  </form>
                  <div className="row form-row social-login">
                    <div className="col-12">
                      <a
                        href="https://dukan24h.com/gcustomer_login"
                        className="btn btn-google btn-block"
                      >
                        <i className="icon-google-plus-g mr-2" /> Login
                      </a>
                    </div>
                  </div>
                  <br />
                  <div className="text-center dont-have">
                    Don’t have an account?{" "}
                    <a
                      data-dismiss="modal"
                      aria-label="Close"
                      id="pop_reg"
                      href="#registor_modal"
                      data-toggle="modal"
                      className="forgot-link"
                    >
                      Register
                    </a>
                  </div>
                </div>
                {/* End .form-tab */}
              </div>
              {/* End .form-box */}
            </div>
            {/* End .modal-body */}
          </div>
          {/* End .modal-content */}
        </div>
        {/* End .modal-dialog */}
      </div>
      {/* End .modal */}
      <div
        className="modal fade"
        id="popupsign"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body p-5">
              <div className="text-center">
                <input
                  type="button"
                  id="msgok"
                  data-dismiss="modal"
                  aria-label="Close"
                  defaultValue="OK"
                  className="btn btn-primary"
                />
              </div>
            </div>
            {/* End .modal-body */}
          </div>
          {/* End .modal-content */}
        </div>
        {/* End .modal-dialog */}
      </div>
      {/* End .modal */}
      <div
        className="modal fade"
        id="forget-modal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="icon-close" />
                </span>
              </button>
              <div className="form-box">
                <div className="form-tab">
                  <p className="account-subtitle">Forget Password</p>
                  <form
                    action="https://dukan24h.com/pos/forgotPasswordProcess"
                    method="post"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="rUBDtb9zIqsa2xs5XaifXSNFTRKvYqDtJOWmIiWh"
                    />{" "}
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="pharmacy_email"
                        placeholder="Email Address"
                        defaultValue
                      />
                      <span className="text-danger" />
                    </div>
                    <div className="form-group text-center">
                      <button
                        type="submit"
                        className="btn btn-outline-primary-2"
                        style={{ width: "100%" }}
                      >
                        Send Link
                      </button>
                    </div>
                  </form>
                  {/* /Form */}
                  <div className="text-center dont-have">
                    Don’t have an account?{" "}
                    <a href="https://dukan24h.com/pos/pharmacyRegistration">
                      Register
                    </a>{" "}
                    or{" "}
                    <a
                      data-dismiss="modal"
                      aria-label="Close"
                      href="#signin-modal"
                      id="signinmodal"
                      data-toggle="modal"
                    >
                      Login
                    </a>
                  </div>
                </div>
                {/* End .form-tab */}
              </div>
              {/* End .form-box */}
            </div>
            {/* End .modal-body */}
          </div>
          {/* End .modal-content */}
        </div>
        {/* End .modal-dialog */}
      </div>
      {/* End .modal */}
      {/* Plugins JS File */}
      <div
        className="modal fade"
        id="forget-modal-cust"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="icon-close" />
                </span>
              </button>
              <div className="form-box">
                <div className="form-tab">
                  <p className="account-subtitle">Forget Password</p>
                  <form
                    action="https://dukan24h.com/forgotPasswordProcess"
                    name="customer_forget"
                    method="post"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="rUBDtb9zIqsa2xs5XaifXSNFTRKvYqDtJOWmIiWh"
                    />{" "}
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="c_f_email"
                        placeholder="Email"
                        defaultValue
                      />
                      <span className="text-danger" />
                    </div>
                    <div className="form-group text-center">
                      <button
                        type="submit"
                        name="customer_forget_f"
                        className="btn btn-outline-primary-2"
                        style={{ width: "100%" }}
                      >
                        Send Link
                      </button>
                    </div>
                  </form>
                  <div className="text-center dont-have">
                    Don’t have an account?{" "}
                    <a
                      data-dismiss="modal"
                      aria-label="Close"
                      id="pop_reg"
                      href="#registor_modal"
                      data-toggle="modal"
                      className="forgot-link"
                    >
                      Register
                    </a>{" "}
                    or{" "}
                    <a
                      data-dismiss="modal"
                      aria-label="Close"
                      href="#signin-modal-user"
                      data-toggle="modal"
                    >
                      Login
                    </a>
                  </div>
                </div>
                {/* End .form-tab */}
              </div>
              {/* End .form-box */}
            </div>
            {/* End .modal-body */}
          </div>
          {/* End .modal-content */}
        </div>
        {/* End .modal-dialog */}
      </div>
      {/* End .modal */}
      {/* Main JS File */}
    </div>
  );
}
export default extra;
