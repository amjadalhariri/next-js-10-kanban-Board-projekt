import React from "react";

class Notification extends React.Component {
  render() {
    return (
      <div className="notification-icon">
        <i className="material-icons">notifications_none</i>
        <div className="notification-icon__alert" />
        <div className="notification-icon__not">
          <div className="notification-author">
            {/* <img src={`${process.env.PUBLIC_URL}/assets/img/cobain.jpg`} /> */}
            <span>@Amjad:</span>
          </div>
          <div className="notification-text">React</div>
        </div>
      </div>
    );
  }
}

export default Notification;
