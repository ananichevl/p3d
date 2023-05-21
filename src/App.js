import './App.css';
import {Base} from "./component/Base";
import {Decal} from "./component/Decal";
import {Button, createTheme, ThemeProvider, Typography} from "@mui/material";
import QRCode from "react-qr-code";
import {useState} from "react";

const qrLinks = {
    1: {
        1: 'https://p3d.in/ar/p0da1',
        2: 'https://p3d.in/ar/VDPDx',
        3: 'https://p3d.in/ar/qwL8Z',
        4: 'https://p3d.in/ar/ep1dN',
        5: 'https://p3d.in/ar/LhKfZ'
    },
    2: {
        1: 'https://p3d.in/ar/VArhp',
        2: 'https://p3d.in/ar/DK0IJ',
        3: 'https://p3d.in/ar/xBNxA',
        4: 'https://p3d.in/ar/Le7HC',
        5: 'https://p3d.in/ar/ltEtG'
    },
    3: {
        1: 'https://p3d.in/ar/WD7Vf',
        2: 'https://p3d.in/ar/AtL84',
        3: 'https://p3d.in/ar/CbNwj',
        4: 'https://p3d.in/ar/vhAP6',
        5: 'https://p3d.in/ar/je4kN'
    }
}

const theme = createTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

function App() {
    const [selectedBase, setSelectedBase] = useState(1);
    const [selectedDecal, setSelectedDecal] = useState(1);
    return (
        <ThemeProvider theme={theme}>
            <div style={{height: '480px'}}>
                <Typography variant="h3">Select configuration</Typography>
                <Base selected={selectedBase} setSelected={setSelectedBase}/>
                <Decal selected={selectedDecal} setSelected={setSelectedDecal}/>
                <Button style={{marginTop: '20px'}} variant="contained" href={qrLinks[selectedBase][selectedDecal]}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        alignContent: 'center',
                        marginBottom: '10px'
                    }}>
                        <Typography variant="h7">View in your space</Typography>
                        <QRCode className='qrcode'
                            size={128}
                            value={'https://p3d.in/ar/p0da1'}
                        />
                    </div>
                </Button>
            </div>
        </ThemeProvider>
    );
}

export default App;
