import logo from './logo.svg';
import './App.css';
import myFunction from "./input.js";
function App() {

  
  return (
    <div className="App">
    

    <div className='appWrapper'>
<div className="formwrapper">

<form action= "submit" method="get" enctype="multipart/form-data">
<label for="text">Text input: </label>
<input type="text" required></input>

<br></br>
<br></br>

<label>File input: </label>
<input type="file" name="text file" required></input>

<br></br>

<button  onclick="" className='submitB'> submit</button>
</form>
</div>
    </div>




    <button onclick="myFunction()">Try it</button>









    </div>





    
  );
}

export default App;


