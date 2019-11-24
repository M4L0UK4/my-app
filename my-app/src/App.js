import React from 'react';
import './style.css';
import './MyComponent';
import Wrapper from './Wrapper';
import Photo from "./Photo";
import Title from "./Title";
import MyComponent from './MyComponent';
import MyButton from "./Mybutton";
const data = [
  {
    name:"sara",
    src:"/logo192.png",
    text:'1st simple text'
  },
  {
    name:"Daniel",
    src:"/logo512.png",
    text:'2nd simple text'
  },
  {
    name:"Arnold",
    src:"/react.png",
    text:'3rd simple text'
  }
]
export default class App extends React.Component {
  state={
      name : "",
      src : "",
      text : ""
  }
  render(){
  return(
  <Wrapper>

	
<MyButton onSimpleClick={()=>data.map(e =>{
  if(e.name =="sara"){
    this.setState({name:e.name,src:e.src,text:e.text})
  }})}>
Sarra
</MyButton>
<MyButton onSimpleClick={()=>data.map(e =>{
  if(e.name =="Daniel"){
    this.setState({name:e.name,src:e.src,text:e.text})
  }})}>
Daniel
</MyButton>
<MyButton onSimpleClick={()=>data.map(e =>{
  if(e.name =="Arnold"){
    this.setState({name:e.name,src:e.src,text:e.text})
  }})}>
Arnold
</MyButton>
{/* <MyButton  onSimpleClick={()=>this.setState({name:'Daniel',src:'/logo512.png',text:'2nd simple text'})}>
Daniel
</MyButton>
<MyButton   onSimpleClick={()=>this.setState({name:'Arnold',src:'/react.png',text:'3rd simple text'})}>
Arnold
</MyButton> */}
	<Title >{this.state.name}</Title>
  <Photo src={this.state.src} />
  <p>{this.state.text}</p>
</Wrapper>
  );  
}
}


