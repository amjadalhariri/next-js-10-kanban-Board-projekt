import React, { Fragment } from "react";
//import img from "../../assets/img/thompson.jpg";
//import Image from "next/image";

class Info extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="name-user">M. Amjad</div>
        <div className="avatar-user">
          {/* <img
            src={img}
            alt="me"
            width="64"
            height="64"
          /> */}
          ;{/* <img src={require("../../assets/img/thompson.jpg")} /> */}
        </div>
      </Fragment>
    );
  }
}

export default Info;
