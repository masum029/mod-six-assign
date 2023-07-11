
import React from "react";
import FooterSocial from "./FooterWithSocial";
import MyImage from "../Images/d.jpg"



const marTop = {
  marginTop: '185px'
};

const marqueeData=["Read, ˹O Prophet,˺ in the Name of your Lord Who created."];
const Footer = (props) => {
  return (
    <>
  <hr className="featurette-divider"></hr>
<div className="row featurette">
      <div className="col-md-7 text-center d-flex justify-content-center">
        <h2 className="featurette-heading" style={marTop}>I may not be there yet, but I am closer than <span className="text-muted">I was yesterday.</span></h2>
      </div>
      <div className="col-md-5">
        {/* <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}

        <img src={MyImage} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"  width="500" height="500" alt="I may not be there yet, but I am closer than I was yesterday" />
    
      </div>
    </div>
    <footer className="bg-dark">
        


        <marquee className="text-info" behavior="scroll" direction="left">
            {marqueeData.map((item, index) => (
            <span key={index}>{item}</span>
            ))}
        </marquee>
        <FooterSocial/>
        {/* <FooterSlider/> */}

        {/* <p>&copy; {new Date().getFullYear()} Design and Developed by <strong>aam</strong> </p> */}
    </footer>    
    </>
  );
};

export default Footer;
