import React from "react";
// Declare the Footer Class
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        {/* <Container>
          <Row>
            <Col md="3"> */}
        <div className="footer-copyright">
          <p>
            Copyright © 2020 • All Rights Reserved • Designed by{" "}
            <a
              href="https://quadrito.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quadrito
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
