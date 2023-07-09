import React from "react";


const marqueeData=["Read, ˹O Prophet,˺ in the Name of your Lord Who created.","“O, happy the soul that saw its own faults.” Rumi","A self-absorbed person only can see the faults of others but they are often color blind to their own.","“Before raise any question about others make sure that you are perfect.” aam"];
const Marque=(props)=>{

return(
<footer>
  <marquee behavior="scroll" direction="left">
    {marqueeData.map((item, index) => (
      <span key={index}>{item}</span>
    ))}
  </marquee>
</footer>



//     <marquee behavior="scroll" direction="left">
//     {marqueData.map((item,index)=>(
//     <span key={index}>{item}</span>
//     ))}
//   </marquee>
);
}

export default Marque;