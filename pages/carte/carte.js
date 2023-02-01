
import url from "../../Components/global";
import {useEffect, useRef, useState} from "react";
import MyRequest from "../../Components/request";
import {useRouter} from "next/router";
import AjouterShapTable from "../../Components/shapshap/AjouterShapTable";
import {Alert, Grid} from "@mui/material";
import Button from "@mui/material/Button";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import * as React from "react";
import Typography from "@mui/material/Typography";
import FaireShapshapTable from "../../Components/shapshap/FaireShapshapTable";
import FaireCarteTable from "../../Components/carte/FaireCarteTable";

export default function Ajouter() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            await MyRequest('shapdashboard', 'GET', {}, {'Content-Type': 'application/json'})
                .then(async (response) => {
                    if (response.status === 200) {
                        setData(response.data)
                    }
                })

        }
        fetchData()
    }, []);
    return (
        <div style={{flexGrow: 1}}>
            <Grid container spacing={3}>
                <Grid item xs={12} display="flex"
                      justifyContent="center"
                      alignItems="center">
                    <Typography component="h3" sx={{fontSize: 53,fontFamily:"bold"}} variant="h5">
                        Vente de Carte
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    {data?parseInt(data["orange"])<=10000?
                        <Grid item xs={12} display="flex"
                              justifyContent="center"
                              alignItems="center">
                            <Alert variant="filled" severity="error">Credit Canal inferieur a 100 000 CFA</Alert>
                        </Grid>:null:null}
                    <FaireCarteTable type={"orange"}/>
                </Grid>
                <Grid item xs={4}>
                    {data?parseInt(data["airtel"])<=10000?
                        <Grid item xs={12} display="flex"
                              justifyContent="center"
                              alignItems="center">
                            <Alert variant="filled" severity="error">Credit Canal inferieur a 10 000 CFA</Alert>
                        </Grid>:null:null}
                    <FaireShapshapTable type={"airtel"}/>
                </Grid>
                <Grid item xs={4}>
                    {data?parseInt(data["moov"])<=10000?
                        <Grid item xs={12} display="flex"
                              justifyContent="center"
                              alignItems="center">
                            <Alert variant="filled" severity="error">Credit Canal inferieur a 10 000 CFA</Alert>
                        </Grid>:null:null}
                    <FaireShapshapTable type={"moov"}/>
                </Grid>
            </Grid>
        </div>
    );

}

// export async function getStaticProps() {
//     const res = await fetch('https://mouhtada.allcine227.com/api/entresorties');
//     const entresorties=await res.json();
//
//     return {
//         props: {entresorties},
//         revalidate: 10,// will be passed to the page component as props
//     }
//
// }

