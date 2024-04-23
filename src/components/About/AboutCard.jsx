import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Halo semuanya, saya <span className="purple">Dinda Pakiding </span>
            dari <span className="purple"> Toraja, Indonesia.</span>
            <br />
            saya bekerja sebagai pengembang perangkat lunak di Google.
            <br />
            Saya telah menyelesaikan D3 Teknik Komputer di Unipa
            <br />
            <br />
            Selain coding, ada beberapa aktivitas lain yang saya suka lakukan!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Bermain Game
            </li>
            <li className="about-activity">
              <ImPointRight /> Menulis Blog Teknologi
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling/Bepergian
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Berusaha keras untuk membangun hal-hal yang membuat perbedaan!"{" "}
          </p>
          <footer className="blockquote-footer">Dolfis</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
