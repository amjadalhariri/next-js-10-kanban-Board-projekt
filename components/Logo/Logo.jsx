import React from "react";
import { Link } from "react-router-dom";


class Logo extends React.Component {
  render() {
    return (
      <Link to="/">
        <section className="kanban__logo">
          <span>Kanban Board React</span>
        </section>
      </Link>
    );
  }
}

export default Logo;
