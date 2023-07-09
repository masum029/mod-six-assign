
import React from "react";
import Marque from "./Marque";
import FooterSlider from "./Carousel";



const marqueeData=["Read, ˹O Prophet,˺ in the Name of your Lord Who created.----","“O, happy the soul that saw its own faults.” Rumi--------","A self-absorbed person only can see the faults of others but they are often color blind to their own.---------","“Before raise any question about others make sure that you are perfect.” aam"];
const Footer = (props) => {
  return (
    <>
    <footer>
        
        <marquee behavior="scroll" direction="left">
            {marqueeData.map((item, index) => (
            <span key={index}>{index+'-'}{item}</span>
            ))}
        </marquee>

        <FooterSlider/>

        <p>&copy; {new Date().getFullYear()} Design and Developed by <strong>aam</strong> </p>
    </footer>    
    </>
  );
};

export default Footer;
