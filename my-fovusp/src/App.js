import logo from './logo.svg';
import './App.css';
import myFunction from "./input.js";
function App() {

  
  return (
    <div className="App">
    

    <div className='appWrapper'>
<div className="formwrapper">
<form action= " submit">
<label>Text input: </label>
<input type="text"></input>

<br></br>
<br></br>

<label>File input: </label>
<input type="file"></input>

<br></br>

<button  onclick=""> submit</button>
</form>
</div>
    </div>




    <button onclick="myFunction()">Try it</button>









    </div>





    
  );
}

export default App;


