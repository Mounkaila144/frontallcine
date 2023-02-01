
import url from "../../Components/global";
import {useEffect, useRef, useState} from "react";
import MyRequest from "../../Components/request";
import {useRouter} from "next/router";
import AjouterShapTable from "../../Components/shapshap/AjouterShapTable";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import * as React from "react";
import Typography from "@mui/material/Typography";

export default function Ajouter() {
    return (
        <div style={{flexGrow: 1}}>
            <Grid container spacing={3}>
                <Grid item xs={12} display="flex"
                      justifyContent="center"
                      alignItems="center">
                    <Typography component="h3" sx={{fontSize: 53,fontFamily:"bold"}} variant="h5">
                        Ajouter du credit
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                <AjouterShapTable type={"orange"}/>
                </Grid>
                <Grid item xs={4}>
                <AjouterShapTable type={"airtel"}/>
                </Grid>
                <Grid item xs={4}>
                <AjouterShapTable type={"moov"}/>
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

