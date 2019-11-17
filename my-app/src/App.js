import React from 'react';
import './style.css';
import './MyComponent';
import Wrapper from './Wrapper';
import Photo from "./Photo";
import Title from "./Title";
import MyComponent from './MyComponent';
import MyButton from "./Mybutton";
function App() {
  return(
  <Wrapper>

	<Photo src="/logo192.png" />

	<Title small>Akrem Ben Achour</Title>
<MyButton profileLink="Facebook" onSimpleClick={()=>{window.location.href = "http://facebook.com"}}>

</MyButton>
<MyButton profileLink="" onSimpleClick={()=>{window.location.href = "http://linkedin.com"}}>

</MyButton>
</Wrapper>
  );  
  
}

export default App;
