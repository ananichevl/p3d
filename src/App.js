import './App.css';
import {Base} from "./component/Base";
import {Decal} from "./component/Decal";
import {useState} from "react";
import {Box, Link, Modal} from "@mui/material";
import QRCode from "react-qr-code";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
function App() {
    const [isOpen, setIsOpen] = useState(false);


  return (
      <div style={{height: '480px'}}>
        <h1>Select configuration</h1>
        <Base />
        <Decal />
        <button style={{marginTop: '20px', width: '60px', height: '60px'}} onClick={() => setIsOpen(true)}>AR</button>
          <Modal
              open={isOpen}
              onClose={() => setIsOpen(false)}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
          >
              <Box sx={style}>
                  <div>
                      <QRCode
                          size={128}
                          value={'https://p3d.in/ar/p0da1'}
                      />
                  </div>
                  <Link href="https://p3d.in/ar/p0da1">View</Link>
              </Box>
          </Modal>
      </div>
  );
}

export default App;
