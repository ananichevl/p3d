import './App.css';
import {Base} from "./component/Base";
import {Decal} from "./component/Decal";

function App() {
  return (
      <div style={{height: '480px'}}>
        <h1>Select configuration</h1>
        <Base />
        <Decal />
        <button style={{marginTop: '20px', width: '60px', height: '60px'}} onClick={() => {
            window.location.href = 'https://p3d.in/ar/p0da1';
        }
        }>AR</button>
      </div>
  );
}

export default App;
