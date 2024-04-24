import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import dindaImg from "../../Assets/dinda.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              BIARKAN SAYA<span className="purple"> MEMPERKENALKAN </span> DIRI
            </h1>
            <p className="home-about-body">
              Saya jatuh cinta dengan pemrograman dan setidaknya saya telah
              belajar sesuatu, menurutku…… 🤷‍♂️
              <br />
              <br />
              Saya fasih dalam bahasa klasik seperti
              <i>
                <b className="purple"> C++, Javascript and Java </b>
              </i>
              <br />
              <br />
              Bidang Minat saya sedang berkembang baru &nbsp;
              <i>
                <b className="purple">Teknologi dan Produk Web </b> dan juga di
                bidang yang berkaitan dengan{" "}
                <b className="purple">Blockchain.</b>
              </i>
              <br />
              <br />
              Jika memungkinkan, saya juga menerapkan passion saya untuk
              mengembangkan produk dengan <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; Seperti
              <i>
                <b className="purple"> React.js dan Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={dindaImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TEMUKAN SAYA</h1>
            <p>
              Merasa senang untuk<span className="purple"> terhubung </span>
              dengan saya
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Dolfis123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
