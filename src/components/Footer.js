import React, { Component } from "react";

class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <footer>
        <p>Copyright ⓒ {year} Yash Vardhan ❤️</p>
      </footer>
    );
  }
}

export default Footer;
