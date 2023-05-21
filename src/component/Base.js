import {MaterialButton} from "./common/MaterialButton";
import {useEffect} from "react";
import baseColor1 from '../base/Empire-basecolor_1.png';
import baseColor2 from '../base/Empire-basecolor_2.png';
import baseColor3 from '../base/Empire-basecolor_3.png';
import P3dEmbedApi from "@p3d/embed-api";
import {Typography} from "@mui/material";

export const Base = ({selected, setSelected}) => {
    const p3d = new P3dEmbedApi(document.getElementById("p3d-embed"));
    const colors = [baseColor1, baseColor2, baseColor3];

    useEffect(() => {
        async function getBlob() {
            return await fetch(colors[selected - 1]).then(r => r.blob());
        }

        getBlob().then(result => {
            p3d.listMaterials().then((materials) => {
                // This will only fire when / if model has finished loading

                const back = materials.find(material => 'fab1_BACK' === material.name);
                back.baseColorTexture = result;
            });
        })

    }, [selected])

    return (
        <div style={{marginTop: '10px'}}>
            <Typography variant="h5">Colore di base</Typography>
            <div className='base' style={{display: 'flex', justifyContent: 'space-between', width: '300px', marginTop: '20px'}}>
                <MaterialButton name={'Color1'} icon={baseColor1} isSelected={1 === selected} onClick={() => setSelected(1)}/>
                <MaterialButton name={'Color2'} icon={baseColor2} isSelected={2 === selected}  onClick={() => setSelected(2)}/>
                <MaterialButton name={'Color3'} icon={baseColor3} isSelected={3 === selected}  onClick={() => setSelected(3)}/>
            </div>
        </div>
    );
}