import React from "react";
import "./FeatureItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faCreditCard,
  faMoneyCheckAlt,
} from "@fortawesome/free-solid-svg-icons";

const iconMapping = {
  faIdCard,
  faCreditCard,
  faMoneyCheckAlt,
};

const FeatureItem = ({ iconName, title, description }) => {
  const icon = iconMapping[iconName];
  return (
    <div className="feature-item">
      <span className="feature-icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <div className="feature-details">
        <b>{title}</b>
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
};

export default FeatureItem;
