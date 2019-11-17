import React from 'react';
import './style.css';

function App() {
  return(
  <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
 
  <h1 className="title red">My title</h1>
     {
       ["/react.png","/logo192.png"].map(e =><p><img src={e}></img></p>)
     }
    
  </div> 
  );  
  
}

export default App;
