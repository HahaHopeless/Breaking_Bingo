import "./Button_style.scss";
import { ArrowClockwise } from "react-bootstrap-icons";
import React from "react";

const Button = () => {
  return (
    <div>
      <div className="btn">
        <ArrowClockwise size={26} color="#fff" />
      </div>
    </div>
  );
};

export default Button;
