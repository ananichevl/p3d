import {MaterialButton} from "./common/MaterialButton";
import P3dEmbedApi from "@p3d/embed-api";
import {useEffect, useState} from "react";
import decal1 from "../decal/Empire-decalcolor_1.png";
import decal2 from "../decal/Empire-decalcolor_2.png";
import decal3 from "../decal/Empire-decalcolor_3.png";
import decal4 from "../decal/Empire-decalcolor_4.png";
import decal5 from "../decal/Empire-decalcolor_5.png";
import {Typography} from "@mui/material";

export const Decal = ({selected, setSelected}) => {
    const p3d = new P3dEmbedApi(document.getElementById("p3d-embed"));
    const decals = [decal1, decal2, decal3, decal4, decal5];

    useEffect(() => {
        async function getBlob() {
            return await fetch(decals[selected - 1]).then(r => r.blob());
        }

        getBlob().then(result => {
            p3d.listMaterials().then((materials) => {
                // This will only fire when / if model has finished loading

                const decal = materials.find(material => 'T-shirt_masterMAT.001' === material.name);
                decal.baseColorTexture = result;
            });
        })

    }, [selected])

    return (
        <div style={{marginTop: '10px'}}>
            <Typography variant="h5">Decal</Typography>
            <div className='decal' style={{display: 'flex', justifyContent: 'space-between', width: '500px', marginTop: '20px'}}>
                <MaterialButton name={'Decal1'} color={'#CC6325'} isSelected={1 === selected} onClick={() => setSelected(1)}/>
                <MaterialButton name={'Decal2'} color={'#BB1D7B'} isSelected={2 === selected}  onClick={() => setSelected(2)}/>
                <MaterialButton name={'Decal3'} color={'#301BAE'} isSelected={3 === selected}  onClick={() => setSelected(3)}/>
                <MaterialButton name={'Decal4'} color={'#20A6C1'} isSelected={4 === selected}  onClick={() => setSelected(4)}/>
                <MaterialButton name={'Decal5'} color={'#C72D25'} isSelected={5 === selected}  onClick={() => setSelected(5)}/>
            </div>
        </div>
    );
}