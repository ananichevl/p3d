import './App.css';
import {Colore} from "./component/Colore";
import {Personalizzazione} from "./component/Personalizzazione";
import {Button, createTheme, ThemeProvider, Typography} from "@mui/material";
import QRCode from "react-qr-code";
import {useState} from "react";
import ar from './buttons/ar.png'

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
            <div style={{height: '480px'}} className='container_mobile'>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant="h3">Seleziona la configurazione</Typography>
                    <Button
                        variant="contained"
                        className='button_mobile'
                        href={qrLinks[selectedBase][selectedDecal]}
                        style={{
                            marginBottom: '0 !important',
                            minWidth: '0px',
                            padding: '3px',
                            backgroundColor: '#fff'
                        }}
                    >
                        <div
                            style={{
                                backgroundImage: `url(${ar})`,
                                backgroundSize: '50px',
                                width: '50px',
                                height: '84px',
                            }}>

                        </div>
                    </Button>
                </div>
                <Colore selected={selectedBase} setSelected={setSelectedBase}/>
                <Personalizzazione selected={selectedDecal} setSelected={setSelectedDecal}/>
                <Button
                    className='button_desktop'
                    style={{
                    marginTop: '20px',
                    boxShadow: '#999999 0 1px 5px 1px',
                    marginBottom: '20px'
                }} variant="contained" href={qrLinks[selectedBase][selectedDecal]}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        alignContent: 'center',
                        marginBottom: '10px'
                    }}>
                        <Typography variant="h7">AR vista</Typography>
                        <QRCode className='qrcode'
                            size={128}
                            value={qrLinks[selectedBase][selectedDecal]}
                        />
                    </div>
                </Button>
            </div>
        </ThemeProvider>
    );
}

export default App;
