import './App.css';
import {Base} from "./component/Base";
import {Decal} from "./component/Decal";

function App() {
  return (
      <div style={{height: '480px'}}>
        <h1>Select configuration</h1>
        <Base />
        <Decal />
      </div>
  );
}

export default App;
