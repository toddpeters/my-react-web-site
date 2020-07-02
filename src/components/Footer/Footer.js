import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
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
                  >Quadrito
                  </a>
                </p>
              </div>
              {/* <h4 className="title">Quadrito • Portfolio Site</h4> */}
            {/* </Col>
            <Col md="3"> */}
              {/* <Nav>
                <NavItem>
                  <NavLink to="/" tag={Link}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/landing-page" tag={Link}>
                    Landing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/register-page" tag={Link}>
                    Register
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/profile-page" tag={Link}>
                    Profile
                  </NavLink>
                </NavItem>
              </Nav> */}
            {/* </Col>
            <Col md="3"> */}
              {/* <Nav>
                <NavItem>
                  <NavLink href="https://">Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://">Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://opensource.org/licenses/MIT">
                    License
                  </NavLink>
                </NavItem>
              </Nav> */}
            {/* </Col>
            <Col md="3"> */}
              {/* <h3 className="title">Follow:</h3> */}
              {/* <div className="btn-wrapper profile">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://twitter.com/"
                  id="tooltip622135962"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">
                  Follow
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.facebook.com/"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">
                  Like
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://dribbble.com/"
                  id="tooltip318450378"
                  target="_blank"
                >
                  <i className="fab fa-dribbble" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip318450378">
                  Follow
                </UncontrolledTooltip>
              </div> */}
            {/* </Col>
          </Row>
        </Container> */}
      </footer>
    );
  }
}

export default Footer;
