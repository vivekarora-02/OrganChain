import "./landing.css";
import Top2 from "../Navbar/Top2";
import { FaPlayCircle } from "react-icons/fa";
import styled, { keyframes } from 'styled-components';

const glitterAnimation = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 200% 0%; }
`;

const GlitterText = styled.p`
  color: rgb(54, 152, 235);
  font-family: Arial, sans-serif;
  font-size: 20px;
  background-image: linear-gradient(45deg, #00f, #f0f, #0ff);
  background-size: 200% auto;
  animation: ${glitterAnimation} 2s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function Landing_page() {
  return (
    <>
      <Top2 />
      <div className="commn_login">
        <div className="initiate">
          Thank You for Being a Part of This Initiative
        </div>
      </div>
      <center>
        <div className="video-container">
          <div className="check-it-out">
            <FaPlayCircle className="play-icon" />
            <span><GlitterText>Lets Talk!!</GlitterText></span>
          </div>
          <iframe
            width="800"
            height="400"
            src="https://www.youtube.com/embed/k6xgSB6A9Eg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </center>
    </>
  );
}

export default Landing_page;
