import React from 'react';
import Button from '../../Part/Buttons/Button'; // Assuming Button component is located at '../../Part/Buttons/Button'
import RegisterMain from '../../Part/registerMain/RegisterMain'; // Assuming RegisterMain component is located at '../../Part/registerMain/RegisterMain'
import Heading from '../../Part/Heading/heading';
import Second from '../../Part/secondpart/Second';
import Third from '../../Part/thirdpart/third';
import Fifth from '../../Part/fifth/fifth';
import Forth from '../../Part/forth/forth';
import RegisterButton from '../../Part/registerButton/RegisterButton';


const Main = () => {
  return (
    <div>
       <div style={{marginTop:"50px"}}>
      <Heading/>
      </div>
      <div  style={{marginTop:"50px"}}>
        <Second/>
      </div>
      <div style={{marginTop:"50px"}}>
        <Button />
      </div>
      <div style={{marginTop:"80px"}}>
        <Third/>
      </div>
      <div style={{marginTop:"120px", textAlign:"center"}}>
<RegisterButton/>
      </div>
      <div style={{marginTop:"100px"}}>
        <RegisterMain />
      </div>
     
      <div style={{marginTop:"110px"}}>
     <Fifth/>
      </div>
      <div style={{marginTop:"170px", textAlign:"center", marginBottom:"50px"}}>
         <Forth/>
      </div>
    </div>
  );
}

export default Main;
