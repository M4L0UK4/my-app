import React from 'react';
import './style.css';
import './MyComponent';
import Wrapper from './Wrapper';
import Photo from "./Photo";
import Title from "./Title";
import MyComponent from './MyComponent';
function App() {
  return(
  <Wrapper>

	<Photo src="/logo192.png" />

	<Title style={{

		color:'red'

}}>My Name here</Title>

	<Title small>My job here</Title>


</Wrapper>
  );  
  
}

export default App;
