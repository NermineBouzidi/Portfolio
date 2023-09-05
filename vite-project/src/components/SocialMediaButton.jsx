import React from "react";
import { OverlayTrigger, Tooltip, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SocialMediaButton = ({ icon, tooltip }) => {
  return (
    <OverlayTrigger placement="top" overlay={<Tooltip>{tooltip}</Tooltip>}>
      <button className="btn btn-lg btn-outline-dark">
        {" "}
        <Image src={icon} roundedCircle />
      </button>
    </OverlayTrigger>
  );
};

export default SocialMediaButton;
