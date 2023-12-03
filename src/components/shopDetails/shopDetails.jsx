import React from "react";
import "./shopDetails.css";
import second from '../images/b20.jpg';
import BootstrapCard from '../card/card';
import { Accordion, Card, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function shopDetails() {
  return (
    <>
    <div className="container">
      <div className="dukan">
        <div className="row">
          <div className="col-xl-3">
            <img src={second} alt="" srcset="" className="image w-100 h-100"/>
          </div>
          <div className="col-xl-8 details">
            <div className="row">
              <h1 className="text-center mb-3 mt-3">Demo Pharmacy</h1>
                <h5 className="fw-semibold m-0">
                  Details:
                </h5>
              <div className="col-xl-6">
                mindaqua.faisal@gmail.com
                mindaqua.faisal@gmail.com

              </div>
              <div className="col-xl-6">
              mindaqua.faisal@gmail.com
                mindaqua.faisal@gmail.com
              </div>

            </div>
          </div>
          <div className="col-xl-1 fs-3 d-block text-center">
          <FontAwesomeIcon icon={faFacebookF} className="d-block my-2"/>
          <FontAwesomeIcon icon={faInstagram} className="d-block my-2"/>
          <FontAwesomeIcon icon={faTwitter} className="d-block my-2"/>

          </div>
        </div>
        </div>      
    </div>
    <div className="row mx-4 products">
        <div className="col-xl-2">
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Related Shops</Accordion.Header>
        <Accordion.Body>
        <Form.Check aria-label="option 1" 
        label="Check this switch"/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Brand</Accordion.Header>
        <Accordion.Body>
        <Form.Check aria-label="option 1" 
        label="Check this switch"/>
        <Form.Check aria-label="option 1" 
        label="Check this switch"/>
        <Form.Check aria-label="option 1" 
        label="Check this switch"/>
        <Form.Check aria-label="option 1" 
        label="Check this switch"/>
                </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
        <div className="col-xl-10">
          <div className="row">
            <div className="col-xl-3">
              <BootstrapCard></BootstrapCard>
            </div>
            <div className="col-xl-3">
              <BootstrapCard></BootstrapCard>
            </div>
            <div className="col-xl-3">
              <BootstrapCard></BootstrapCard>
            </div>
            <div className="col-xl-3">
              <BootstrapCard></BootstrapCard>
            </div>
          </div>
        </div>
      </div>
    </>
    

);
}

export default shopDetails;
