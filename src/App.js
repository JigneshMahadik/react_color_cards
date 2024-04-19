// import logo from './logo.svg';
import './App.css';
import colorData from "./colors.json"
import { ColorCards } from './ColorCards';

function App() {
  return (
    <div className="color-wrapper">
      {
        colorData.colors.map((color,id)=>{
          return(
            <div key={id}>
              <ColorCards prop={color}/>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
