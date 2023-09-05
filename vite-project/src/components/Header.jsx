import React from "react";
import Text from "./Text";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import SocialMediaButton from "./SocialMediaButton";

function Header() {
  return (
    <>
      <Container>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: "1" }}>
            <Text />
            <p>
              a passionate web developer with a strong background in creating
              visually appealing and user-friendly websites. My love for coding
              and problem-solving drives me to continuously learn and adapt to
              the ever-evolving world of web development. With expertise in
              front-end development, I specialize in HTML, CSS, and JavaScript.
              I am proficient in using modern frameworks and libraries such as
              ReactJS and Bootstrap to build responsive and interactive
              websites. I also have experience working with back-end
              technologies like Node.js and Express, allowing me to create
              dynamic web applications.
            </p>
          </div>
          <div style={{ flex: "1", textAlign: "right" }}>
            <Image
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
              roundedCircle
              style={{
                maxWidth: "90%",
                marginTop: "10px",
                maxHeight: "90%",
              }}
            />
          </div>
        </div>

        <a href="cv.pdf" download>
          <button>Download CV</button>
        </a>
      </Container>
      <div>
        <SocialMediaButton icon="Facebook" tooltip="Facebook" />
        <SocialMediaButton icon="Twitter" tooltip="Twitter" />
        <SocialMediaButton icon="Instagram" tooltip="Instagram" />
        <SocialMediaButton
          icon="https://example.com/facebook.png"
          tooltip="Facebook"
        />

        {/* Add more social media buttons */}
      </div>
    </>
  );
}

export default Header;
